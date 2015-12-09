define(function(require,exports) {
    var Backbone = require('backbone');
    Backbone.$ = require('$');
    var M = Backbone.Model.extend({
        defaults: {
            name: "",
            age:""

        }
    });
    var V = Backbone.View.extend({
        el: "#container",
        render: function() {
          alert(1)
        }
    });
    var view = new V;
    exports.run = view.render;

});