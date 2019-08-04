const { smart } = require('webpack-merge')
const webpack = require('webpack')
const base = require('./webpack.base')
const { resolve } = require('./util')

let port = process.env.port || 3000
module.exports = smart(base, {
    devServer: {
        proxy: {},
        hot: true,
        host: '127.0.0.1',
        port,
        open: true,
        contentBase: resolve('dist')
    },
    module: {
        rules: [
            {
                test: /\.(le|c)ss/,
                use: [
                    'style-loader',
                    {
                        loader: 'css-loader',
                        options: {
                            sourceMap: true
                        }
                    },
                    'postcss-loader',
                    'less-loader',
                    {
                        loader: 'style-resources-loader',
                        options: {
                            patterns: [
                                resolve('src/styles/variables.less'),
                                resolve('src/styles/mixins.less')
                            ],
                            injector: 'prepend'
                        }
                    }
                ]
            },
            {
                test: /\.(png|jpg|gif|jpeg)$/i,
                loader: 'url-loader',
                options: {
                    limit: 0,
                    name: 'images/[name]-[hash].[ext]'
                }
            },
            {
                test: /\.(eot|woff2?|ttf|svg)$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 0,
                            name: 'fonts/[name]-[hash].[ext]'
                        }
                    }
                ]
            }
        ]
    },
    plugins: [
        new webpack.NamedModulesPlugin(),
        new webpack.HotModuleReplacementPlugin()
    ],
    devtool: 'source-map'
})
