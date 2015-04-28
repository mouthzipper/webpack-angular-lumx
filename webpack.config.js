'use strict';

var webpack  = require( 'webpack' );
var path = require( 'path' );

var PATHS = {
    app : __dirname + '/app',
    bower : __dirname + '/app/bower_components'
};

module.exports = {
    module: {
        loaders: [
            {
                test: /\.scss$/,
                loader: 'style!css!sass'
            },
            {
                test: /\.js$/,
                loader: 'ng-annotate!babel!jshint',
                exclude: /node_modules|bower_components/
            }
        ]
      },
    context : PATHS.app,
    entry : {
        app:[ 'webpack/hot/dev-server',  './core/bootstrap.js' ]
    },
    output : {
        path: PATHS.app,
        filename : 'bundle.js'

    }
};
