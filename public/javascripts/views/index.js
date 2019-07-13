var IndexView = Backbone.View.extend({
  attributes: {
    id: 'index',
  },

  events: {
    'click footer a': 'addAlbum',
  },

  template: App.templates.index,

  addAlbum: function (e) {
    e.preventDefault();
  
    this.trigger('addAlbum');
  },

  render: function () {
    this.$el.html(this.template());
    App.$el.html(this.$el);
  },

  initialize: function () {
    this.render();
  },
});
