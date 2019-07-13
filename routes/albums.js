var path = require('path');
var fs = require('fs');

var filePath = path.resolve(path.dirname(__dirname), 'data/albums.json');

function getAlbums() {
  return JSON.parse(fs.readFileSync(filePath, 'utf8')).data;
}

function nextId() {
  return JSON.parse(fs.readFileSync(filePath, 'utf8')).lastId + 1;
}

function writeAlbums(data) {
  fs.writeFileSync(filePath, JSON.stringify(data), 'utf8');
}

module.exports = function (router) {
  router.post('/albums', function (req, res) {
    var album = req.body;
    var albums = getAlbums();

    album.id = nextId();
    albums.push(album);
    writeAlbums({ lastId: album.id, data: albums });

    res.json(album);
  });

  router.get('/albums/new', function (req, res) {
    res.render('new');
  });
};
