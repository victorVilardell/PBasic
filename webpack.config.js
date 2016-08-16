var pkg = require('./package.json');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    resolve: {
        extensions: ['', '.jsx', '.js']
    },

    entry: './src/components/app.jsx',

    output: {
        path: './build/js',
        filename: 'app.js'
    },

    devtool: 'source-map',

    module: {
        loaders: [
            {
                test: /(\.js|\.jsx)$/,
                loader: 'babel',
                query: { presets: ['es2015', 'stage-0', 'react'] }
            },

            {
                test: /\.scss$/,
                loaders: ["style", "css?sourceMap", "sass?sourceMap"]
                //ExtractTextPlugin.extract('css!sass')
            }

        ]
    },

     plugins: [
        new ExtractTextPlugin('build/css/style.css', {
            allChunks: true
        })
    ]

};