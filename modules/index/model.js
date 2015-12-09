define(function (require) {
    var Backbone = require('backbone');
var M = Backbone.Model.extend({

    validate:function(attrs, options) {
        if(attrs.age < 20) {
            return '未成年呢.'
        }
    },
    urlRoot:'/api/user',
    // url : '/javaservice' 相对于urlRoot优先级更高
    // validate:true,
    defaults: {

        name: "",
        age:""

    }
});
var data = new M({
    // id : 100,
    name: "小明",
    age:26
});
    return data;
});