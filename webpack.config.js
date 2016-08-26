var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {

    entry: {
        gallery: './src/components/app.jsx'
    },

    output: {
        path: './build',
        filename: '/js/[name].js'
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
            },

            {
                test: /(\.jpg|\.png)$/,
                loader: "url-loader?limit=10000"
            }
        ]
    },

     plugins: [
        new ExtractTextPlugin('/css/style.css', {
            allChunks: true
        })
    ]

};