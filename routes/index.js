var express = require('express');
var path = require('path');
var fs = require('fs');

var router = express.Router();
var filePath = path.resolve(path.dirname(__dirname), 'data/albums.json');

function getAlbums() {
  return JSON.parse(fs.readFileSync(filePath, 'utf8'));
}

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {
    albums: getAlbums(),
  });
});

module.exports = router;
