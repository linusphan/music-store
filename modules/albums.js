var path = require('path');
var fs = require('fs');

var filePath = path.resolve(path.dirname(__dirname), 'data/albums.json');

module.exports = {
  __readFile: function () {
    return JSON.parse(fs.readFileSync(filePath, 'utf8'));
  },

  getLastId: function () {
    return this.__readFile().lastId;
  },

  get: function () {
    return this.__readFile().data;
  },

  set: function (data) {
    data.id = this.getLastId() + 1;
    fs.writeFileSync(filePath, JSON.stringify({
      lastId: data.id,
      data: data,
    }), 'utf8');
  },
};

