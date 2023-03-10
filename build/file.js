const path = require('path');
const fs = require('fs');
const lernaJson = require('../lerna.json');

const mkdir = async function (folderpath) {
  try {
      let pathArr = folderpath.split(path.sep);
      if(pathArr[pathArr.length-1].indexOf('.')!==-1){
          pathArr = pathArr.slice(0, pathArr.length-1);
      }
      let _path = '';
      for (let i = 0; i < pathArr.length; i++) {
              _path += `${pathArr[i]}/`;
              if (!fs.existsSync(_path)) {
                  fs.mkdirSync(_path);
              }
      }
  } catch (e) { }
}



const writeFile = async(from,to)=>{
  const rs = fs.createReadStream(from, {
      autoClose: true,
      encoding: 'utf-8',
      highWaterMark: 64 * 1024 * 1024,
      flags: 'r'
  })
  const ws = fs.createWriteStream(to, {
      encoding: 'utf-8',
      flags: 'a',
      highWaterMark: 16 * 1024 * 1024,
      autoClose: true
  })
  // 直接解决背压问题
  rs.pipe(ws);
}

const copy = async (_fromFileName,_toFileName) => {
  // console.time('优化用流的方式读取文件')
  const fromFileName = path.resolve(process.cwd(), _fromFileName);
  const toFileName = path.resolve(_toFileName);
  console.log('源路径',fromFileName)
  console.log('目标路径',toFileName)

  await mkdir(toFileName)
  await writeFile(fromFileName, toFileName);

  // console.timeEnd('优化用流的方式读取文件') // 7.967ms
}

const copyZip = async (_fromFileName,_toFileName) => {
  // console.time('优化用流的方式读取文件')
  const fromFileName = path.resolve(process.cwd(), _fromFileName);
  const toFileName = path.resolve(_toFileName);

  // 压缩文件处理
  const fromFileNameCompress =  fromFileName.replace('.js',`@${lernaJson.version}.js`);
  const toFileNameCompress =  toFileName.replace('.js',`@${lernaJson.version}.js`);
  console.log('源路径',fromFileNameCompress)
  console.log('目标路径',toFileNameCompress)

  await mkdir(toFileName)
  await writeFile(fromFileNameCompress, toFileNameCompress);

  // console.timeEnd('优化用流的方式读取文件') // 7.967ms
}

module.exports = {
  mkdir,
  writeFile,
  copy,
  copyZip
}
