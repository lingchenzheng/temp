const { resolve } = require('./util')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')

const mode = process.env.NODE_ENV || 'development'
module.exports = {
    mode,
    entry: {
        main: resolve('src/main.js')
    },
    output: {
        path: resolve('dist'),
        filename: 'js/[name]-[hash].js'
    },
    resolve: {
        alias: {
            '@': resolve('src')
        },
        extensions: ['.js', '.vue', '.json']
    },
    resolveLoader: {
        modules: [resolve('loaders'), 'node_modules'],
        extensions: ['.js']
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                use: [
                    {
                        loader: 'vue-loader'
                    }
                ]
            },
            {
                test: /\.js$/,
                use: [
                    {
                        loader: 'babel-loader'
                    }
                ],
                exclude: [/node_modules/, /\/assets\//]
            }
        ]
    },
    plugins: [
        new VueLoaderPlugin(),
        new HtmlWebpackPlugin({
            inject: true,
            template: resolve('index.html'),
            name: 'index.html',
            chunksSortMode: 'dependency',
            title: 'vue app'
        }),
        new CopyWebpackPlugin([
            {
                from: resolve('src/assets'),
                to: resolve('dist/assets')
            }
        ])
    ]
}
