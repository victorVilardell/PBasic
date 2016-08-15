var pkg = require('./package.json');

    module.exports = {
        resolve: {
            extensions: ['', '.jsx', '.js']
        },

        entry: './src/components/app.jsx',

        output: {
            path: './build/js',
            filename: 'app.js'
        },

        module: {
            loaders: [
                {
                    test: /(\.js|\.jsx)$/,
                    loader: 'babel',
                    query: { presets: ['es2015', 'stage-0', 'react'] }
                }
            ]
        }
    };