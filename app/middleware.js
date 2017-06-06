/**
 * Created by zibilal on 6/6/17.
 */

var middleware = {
    requireAuthentication: function(req, res, next) {
        console.log('Private route hit!');
        next();
    },
    logger: function(req, res, next) {
        console.log('[' + req.method + '] ' + req.originalUrl + ' : ' + (new Date().toString()) );
        next();
    }
};

module.exports = middleware;