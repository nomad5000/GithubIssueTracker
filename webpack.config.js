'use strict'
module.exports = {
    entry: './src/js/app',
    output: {
        path: __dirname + '/build',
        publicPath: '/',
        filename: 'js/app.js'
    },
    resolve: {
        extensions: ['', '.js']
    },
    module: {
        loaders: [{
            test: /\.jsx?$/,
            exclude: /(node_modules|bower_components)/,
            loader: 'babel-loader', // 'babel-loader' is also a legal name to reference
            query: {
                  presets: 'es2015',
            }
          }, {
            test: /\.scss$/,
            loaders: ["style", "css", "sass"]
          },
        ]
    }
};
