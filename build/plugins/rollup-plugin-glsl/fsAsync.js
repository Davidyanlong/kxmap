const fs = require('fs');

const cache = Object.create(null);
module.exports = {
  readFile(p, options) {
    if (cache[p]) {
      return Promise.resolve(cache[p])
    }
    return new Promise((resolve, reject) => {
      fs.readFile(p, options, (err, data) => {
        if (err) {
          reject(err);
        }
        cache[p] = data;
        resolve(data);
      });
    });
  },
  deleteCache(p){
    if(cache[p]){
      delete cache[p]
    }
  }
}
