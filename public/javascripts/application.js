var App = {
  templates: JST,
  $el: $('main'),

  renderAlbums: function () {
    this.albums.each(this.renderAlbumView);
  },

  renderAlbumView: function (album) {
    new AlbumView({
      model: album,
    });
  },

  init: function () {
    this.renderAlbums();
  },
};

Handlebars.registerHelper('formatPrice', function (price) {
  return (+price).toFixed(2);
});
