var path = require('path'),
    webpack = require('webpack');

module.exports = {
    devtool: 'source-map',
    entry: {
        index: [
            'react-hot-loader/patch',
            'webpack-dev-server/client?http://localhost:8080',
            'webpack/hot/only-dev-server',
            './src/scripts/index.js'
        ]
    },
    //proxy
    devServer: {
        proxy: {
            '/api': {
                target: 'http://localhost:8081',
                secure: false
            }
        }
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
            loader: 'style!css'
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
            /* */

    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin('scripts/common.js'),
        new webpack.DefinePlugin({
            'process.env': {
                'NODE_ENV': JSON.stringify('development')
            }
        })
    ]
}