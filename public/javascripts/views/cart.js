var CartView = Backbone.View.extend({
  template: App.templates.cart,
  el: $('#cart').get(0),

  render: function () {
    this.$el.html(this.template({
      quantity: this.collection.getQuantity(),
      items: this.collection.toJSON(),
      total: this.collection.getTotal(),
    }));
  },

  initialize: function () {
    this.render();
    this.listenTo(this.collection, 'cartUpdate', this.render);
  },
});
