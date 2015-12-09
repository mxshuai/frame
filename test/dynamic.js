/**
 * Created by listener on 2015/12/4.
 */
module.exports = function(req, res, next) {

    res.write('Hello world ');

    // set custom header.
    // res.setHeader('xxxx', 'xxx');

    res.end('The time is ' + Date.now());
};
