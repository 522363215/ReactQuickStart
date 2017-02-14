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
        path: path.join(__dirname, 'dist'),
        publicPath: '/develop/'
    },
    resolve: {
        root: path.join(__dirname, 'src'),
        extensions: ['', '.jsx', '.js']
    },
    module: {
        loaders: [{
            test: /\.(js|jsx)?$/,
            loader: 'babel',
            include: path.join(__dirname, 'src/scripts'),
            exclude: path.join(__dirname, 'src/config')
        }, {
            test: /\.css$/,
            loader: ExtractTextPlugin.extract('style', 'css?-url')
        }, {
            test: /\.(jpg|png|jpeg|bmp|gif)$/,
            loader: 'url-loader?limit=10240&name=images/[name].[ext]'
        }, {
            test: /\.(svg|woff|ttf|eot)$/,
            loader: 'url-loader?limit=10240&name=fonts/[name].[ext]'
        }]
    },
    babel: {
        presets: ['react', 'es2015', 'stage-0'],
        plugins: ['react-hot-loader/babel', ['import', {
            libraryName: 'antd',
            style: 'css'
        }]]
    },
    plugins: [
        new ExtractTextPlugin("styles/[name].css"),
        new webpack.optimize.CommonsChunkPlugin('scripts/common.js'),
        new webpack.DefinePlugin({
            'process.env': {
                'NODE_ENV': JSON.stringify('production')
            }
        }),
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            }
        }),
        new webpack.ProvidePlugin({
            Promise: 'imports?this=>global!exports?global.Promise!es6-promise'
        }) //promise polyfill
    ]
}