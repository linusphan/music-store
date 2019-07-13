var path = require('path');
var _ = require('underscore');
var Albums = require(path.resolve(path.dirname(__dirname), 'modules/albums'));

module.exports = function (router) {
  router.route('/albums')
    .get(function (req, res) {
      res.json(Albums.get());
    })
    .post(function (req, res) {
      var album = req.body;
      var albums = Albums.get();

      album.id = Albums.getLastId() + 1;
      albums.push(album);
      Albums.set(albums);

      res.json(album);
    })
    .put(function () {
      var albums = Albums.get();
      var currentAlbum = _(albums).findWhere({ id: +req.body.id });

      _.extend(currentAlbum, req.body);

      Albums.set(albums);

      res.json(currentAlbum);
    })
    .delete(function (req, res) {
      var albums = _(Albums.get()).reject(function (album) {
        return album.id === +req.body.id;
      });

      Albums.set(albums);

      res.status(200).end(); // send 200 Status Code and then end the request
    });

  router.get('/albums/new', function (req, res) {
    res.render('new');
  });
};
