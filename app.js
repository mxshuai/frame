define(function(require,exports) {
    var Backbone = require('backbone');
    Backbone.$ = require('jquery');
  var AppRouter = Backbone.Router.extend({
    routes: {
      '': 'index',
      'module/:menu': 'renderList',
      'at/:module/:action(/*condition)': 'loadmodule',
      '*error': 'renderError'
    },
    index: function () {
      console.log('首页');
        require.async('./modules/index/controller.js?'+Date.parse(new Date()));
    },
    renderList: function(menu) {
          console.log('列表页');
          //加载module目录下对应的模块
          require.async(['./modules',menu,'controller.js?'].join('/')+Date.parse(new Date()))
      },
    //按照at/module/action(/conditions)格式的請求自動加載模塊
    loadmodule: function(md, ac, con) {
          //将参数字符串'a:123/b:456'转换为json对象{a:123, b:456}
          var cj = {};
          if(con && con.indexOf(':') > -1) {
              con.replace(/(\w+)\s*:\s*([\w-]+)/g, function(a, b, c) {
                  b && (cj[b] = c);
              });
          } else {
              cj = con;
          }
          //加载module目录下对应的模块
          require.async(['./modules', md, ac].join('/'), function(cb) {
              if(cb) {
                  cb(cj);
              } else {
                  alert('模塊加載失敗！');
              }
          })
      },
    renderError: function (error) {
      console.log('URL错误, 错误信息: ' + error);
    }
  });


    //定义全局变量App
    window.App = {
        Models: {},
        Views: {},
        Collections: {},
        initialize: function() {
            new AppRouter();
            Backbone.history.start();
        }
    };

    exports.run = App.initialize;
  /*
   router.navigate('topic', {
   trigger: true,replace:true
   });
   router.route('topic/:pageno/:pagesize', 'page', function(pageno, pagesize) {
   Backbone.history.stop();
   });*/
})