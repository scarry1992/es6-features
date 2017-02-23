const webpack = require('webpack'),
    path = require('path');

module.exports = {
    entry: './app.js',
    output: {
        filename: 'app.js',
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
                exclude: /node_modules/
            },
            {
                test: /\.json$/,
                loader: 'file',
                include: /src/,
                query: {
                    name: '[name].[ext]',
                    publicPath: 'assets/'
                }
            },
        ]
    },
    watch: true,
    watchOptions: {
        aggregateTimeout: 100
    },
    devServer: {
        inline: true
    },
    devtool: 'source-map'
};