const { copy, copyZip } = require('./file.js');
const arguments = process.argv.slice(2);
const params = Object.fromEntries(
  arguments.reduce((pre, item) => {
    if (item.startsWith("--")) {
      return [...pre, item.slice(2).split("=")];
    }
    return pre;
  }, []),
);



// copy(params.source,params.desc)
// 拷贝压缩文件
copyZip(params.source,params.desc)
