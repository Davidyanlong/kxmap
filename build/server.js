var express = require('express');
var request = require('request');
var fs = require('fs');

var app = express();

var maxAge = 86400;

app.get('/tiles/:z/:x/:y.vector.pbf', function (req, res) {
  var filename = '../tiles/' + req.params.z + '-' + req.params.x + '-' + req.params.y + '.vector.pbf';
  fs.readFile(filename, function (err, data) {
    if (err) {
      var url =
        'https://basemaps.arcgis.com/arcgis/rest/services/World_Basemap_v2/VectorTileServer/tile' +
        '/' +
        req.params.z +
        '/' +
        req.params.x +
        '/' +
        req.params.y +
        '.pbf';
      console.log(req.params, url);
      request(
        {
          url: url,
          encoding: null,
        },
        function (err, response, body) {
          if (err) {
            console.warn(err.stack);
            res.end();
          } else if (response.statusCode != 200) {
            console.warn(response.statusCode, url);
            res.end();
          } else {
            fs.writeFileSync(filename, body);
            res.header('Content-Encoding', 'gzip');
            res.header('Content-Type', 'application/octet-stream');
            res.header('Cache-Control', 'max-age=' + maxAge);
            // setTimeout(function() {
            res.end(body);
            // }, 500);
          }
        },
      );
    } else {
      res.header('Content-Encoding', 'gzip');
      res.header('Content-Type', 'application/octet-stream');
      res.header('Cache-Control', 'max-age=' + maxAge);
      // setTimeout(function() {
      res.end(data);
      // }, 500);
    }
  });
});

app.use(express.static(__dirname));

app.listen(8000);

