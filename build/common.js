import path from 'path';

const currentPath = process.cwd();
const pkgJson = require(path.resolve(currentPath, 'package.json'));

const getUMDName = () => {
  return pkgJson.umdName ? pkgJson.umdName : pkgJson.name.replace('@', '').replace('/', '-');
};
const getFileName = (format) => {
  if (format === 'umd') {
    return pkgJson.main.replace('dist/', '');
  }
  if (format === 'es') {
    return pkgJson.module.replace('dist/', '');
  }
};

const getFileNameZip = (format) => {
  if (pkgJson.umdName) return `${pkgJson.umdName}.${format}@${[pkgJson.version]}.js`;
  const fileName = pkgJson.name.replace('@', '').replace('/', '-');
  return `${fileName}.${format}@${[pkgJson.version]}.js`;
};

function toGlobalName(pkgName) {
  return pkgName.replace('@', '').replace('/', '-');
}
const dependencies = Object.assign({}, pkgJson.dependencies ?? {}, pkgJson.peerDependencies ?? {});
const external = Object.keys(dependencies);
const globals = {};
external.forEach((pkgName) => {
  globals[pkgName] = toGlobalName(pkgName);
});

const entry = path.resolve(currentPath, 'src/index.ts');

export { getUMDName, getFileName, getFileNameZip, external, globals, currentPath, entry };
