var path = require('path'),
    webpack = require('webpack'),
    ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
    entry: {
        index: [
            './src/scripts/index.js'
        ]
    },
    output: {
        filename: 'scripts/[name].js',
        path: path.join(__dirname, 'dist')
    },
    resolve: {
        root: path.join(__dirname, 'src')
    },
    module: {
        loaders: [{
            test: /\.js$/,
            loader: 'babel',
            include: path.join(__dirname, 'src/scripts')
        }, {
            test: /\.css$/,
            loader: ExtractTextPlugin.extract('style', 'css?-url'),
            include: path.join(__dirname, 'src/styles')
        }]
    },
    babel: {
        presets: ['react', 'es2015', 'stage-0'],
        plugins: ['react-hot-loader/babel']
    },
    plugins: [
        new ExtractTextPlugin("styles/[name].css"),
        new webpack.optimize.CommonsChunkPlugin('scripts/common.js'),
        new webpack.DefinePlugin({
            'process.env': {
                'NODE_ENV': JSON.stringify('production')
            }
        })
    ]
}