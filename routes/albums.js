var path = require('path');
var fs = require('fs');
var express = require('express');

var router = express.Router();
var filePath = path.resolve(path.dirname(__dirname), 'data/albums.json');

function getAlbums() {
  return JSON.parse(fs.readFileSync(filePath, 'utf8'));
}

router.get('/albums/new', function (req, res) {
  res.render('new');
});

module.exports = router;
