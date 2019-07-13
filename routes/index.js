var path = require('path');
var fs = require('fs');

var filePath = path.resolve(path.dirname(__dirname), 'data/albums.json');

function getAlbums() {
  return JSON.parse(fs.readFileSync(filePath, 'utf8')).data;
}

module.exports = function (router) {
  router.get('/', function(req, res, next) {
    res.render('index', {
      albums: getAlbums(),
    });
  });
};
