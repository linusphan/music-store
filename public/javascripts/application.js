var App = {
  templates: JST,
  $el: $('main'),

  indexView: function () {
    this.index = new IndexView();
    this.renderAlbums();
    this.createCart();
    this.bindEvents();
  },

  createCart: function () {
    this.cart = new CartItems();
    this.cart.view = new CartView({
      collection: this.cart,
    });
  },

  renderAlbums: function () {
    this.albums.each(this.renderAlbumView);
  },

  renderAlbumView: function (album) {
    new AlbumView({
      model: album,
    });
  },

  newAlbum: function () {
    new NewAlbumView();
  },

  bindEvents: function () {
    _.extend(this, Backbone.Events);
    this.listenTo(this.index, 'addAlbum', this.newAlbum);
    this.on('addToCart', this.cart.addItem.bind(this.cart));
  },
};

Handlebars.registerHelper('formatPrice', function (price) {
  return (+price).toFixed(2);
});
