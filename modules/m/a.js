define( function(reuqire) {
    var $ = reuqire('jquery');
    return function(c) {
        alert('moduleA加载成功，参数：' + $.param(c));
    }
});