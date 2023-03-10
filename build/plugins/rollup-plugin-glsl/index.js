// 1.插件用于处理Shader的模块化引入(以@include标识)
// 2.同时支持去除注释及压缩，后续可根据需要在此处添加混淆

const path = require('path');
const createFilter = require('rollup-pluginutils').createFilter;
const uglifySourceList = require('./const').uglifySourceList;
const {readFile,deleteCache } = require('./fsAsync');

function removeComments(source) {
  // Remove comments
  // cStyle Comment ToKeepLicense
  const cStyleRegex = /\/\*[\s\S]*?\*\//g;
  source = source.replace(cStyleRegex, '');
  const cppStyleRegex = /\/\/[^\n]*/g;
  source = source.replace(cppStyleRegex, '\n');

  return source;
}

function getMinifiedName(count) {
  const num = count % 52;
  const offset = num < 26 ? num + 65 : num + 71; // 65 = 'A'; 71 = ('a' - 26)
  const c = String.fromCharCode(offset);

  // For tokens over 52, recursively add characters
  const recurse = Math.floor(count / 52);
  return recurse === 0 ? c : getMinifiedName(recurse - 1) + c;
}

// 手动挡混淆个方法名称
function uglify(source) {
  uglifySourceList.forEach((name, index) => {
    const reg = RegExp(`${name}`, 'g');
    const targetName = `LGL_${getMinifiedName(index)}`;
    source = source.replace(reg, targetName);
  });

  return source;
}

function compressShader(source) {
  let needNewline = false;
  return source
    .replace(/\\(?:\r\n|\n\r|\n|\r)|\/\*.*?\*\/|\/\/(?:\\(?:\r\n|\n\r|\n|\r)|[^\n\r])*/g, '')
    .split(/\n+/)
    .reduce((result, line) => {
      line = line.trim().replace(/\s{2,}|\t/, ' ');
      if (line[0] === '#') {
        if (needNewline) {
          result.push('\n');
        }

        result.push(line, '\n');
        needNewline = false;
      } else {
        result.push(line.replace(/\s*({|}|=|\*|,|\+|\/|>|<|&|\||\[|\]|\(|\)|\-|!|;)\s*/g, '$1'));
        needNewline = true;
      }
      return result;
    }, [])
    .join('')
    .replace(/\n+/g, '\n');
}

function processPass(code, options) {
  if (options.removeComments !== false) {
    code = removeComments(code);
  }
  if (options.compress !== false) {
    code = compressShader(code);
  }
  if (options.uglify !== false) {
    code = uglify(code);
  }

  return code;
}

module.exports = function glsl(options = {}) {
  const filter = createFilter(options.include, options.exclude);
  let config;
  return {
    name: 'glsl',
    enforce: 'pre',
    config (config) {
      if (!options.watch) return;
      config.server = config.server ?? {};
      config.server.watch = config.server.watch ?? {};
    },
    configureServer (server) {
      options.watch && server.watcher.on('change', shader =>{
        deleteCache(shader);
        filter(shader) && server.ws.send(JSON.stringify({type:'full-reload'}))
      }

      );
    },
    configResolved(resolvedConfig) {
      config = resolvedConfig;
    },
    async transform(code, id) {
      // 测试这里是否执行了
      // console.log('transform 执行了',id);
      if (!filter(id)) return;
      // Include contents
      const includeRegex = /@include\s+(.*)/;
      // console.log(id);
      while (true) {
        const match = includeRegex.exec(code);
        if (!match) {
          break;
        }
        const currentPath = path.dirname(id);
        let includeFilename = match[1];
        const sep = '/';
        let pathArr = includeFilename.split(sep);
        for (let i = 0; i < pathArr.length - 1; i++) {
          let tag = pathArr[i];
          if (id.includes(tag + path.sep)) {
            includeFilename = includeFilename.replace(tag + sep, '');
          }
          if (id.includes(path.sep + tag)) {
            includeFilename = includeFilename.replace(sep + tag, '');
          }
        }
        if (includeFilename.endsWith(';')) includeFilename = includeFilename.substr(0, includeFilename.length - 1);
        const fullPath = path.join(currentPath, includeFilename);
        const includeFile = await readFile(fullPath, 'utf-8');
        // Replace the @include directive with the file contents
        code = code.replace(includeRegex, '\n' + includeFile);
      }
      // 仅生产环境压缩及清理
      // if (config.command === 'build') {
      // 	code = processPass(code, options);
      // }

      // TODO: 代码map需要处理一下
      if (id.endsWith('.ts.vs') || id.endsWith('.ts.fs') || id.endsWith('.ts.glsl')) {
        return { code, map:null };
      }

      return {
        code: `export default ${JSON.stringify(code)}; `,
        map: { mappings: '' },
      };
    },
    async shouldTransformCachedModule(){
      return Promise.resolve(true);
    }
  };
}
