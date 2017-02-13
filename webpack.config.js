const webpack = require('webpack'),
    path = require('path');

module.exports = {
    entry: './index.js',
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'dist'),
        publicPath: '/assets/'
    },
    resolve: {
        extensions: ['', '.js'],
        modules: ['node_modules']
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: 'babel',
                exclude: 'node_modules'
            }
        ]
    },
    watch: true,
    devServer: {
        inline: true
    },
    devtool: 'source-map'
};