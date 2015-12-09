define(function (require) {
    var Backbone = require('backbone');
    Backbone.$ = require('jquery');
    var tpl=require('./tpl.tpl');
    var V = Backbone.View.extend({
        el: '#container',
        initialize: function () {
            //  this.render()
        },
        render: function (model) {
            this.$el.html(_.template(tpl,JSON.parse(JSON.stringify(model))));//这是一个坑，具体原因待查
            return this;
        }
    });
    return V;
})