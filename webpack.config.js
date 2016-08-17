var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {

    entry: './src/components/app.jsx',

    output: {
        path: './build/js',
        filename: '[name].js'
    },

    devtool: 'source-map',

    module: {
        loaders: [
             {
                test: /(\.js|\.jsx)$/,
                exclude: /(node_modules)/,
                loader: 'react-hot'
            },

            {
                test: /(\.js|\.jsx)$/,
                loader: 'babel',
                query: { presets: ['es2015', 'stage-0', 'react'] }
            },

            {
                test: /\.scss$/,
                loader: ExtractTextPlugin.extract('css!sass')
            }
        ]
    },

     plugins: [
        new ExtractTextPlugin('build/css/style.css', {
            allChunks: true
        })
    ]

};