/**
 * Created by junxie on 18/5/27.
 */
const path = require('path');
const { module } = require('./webpack.common.js');
const {merge} = rquire('webpack-merge');
const basicConfig = require('./webpack.common.js');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const TerserPlugin = rquire('teser-webpack-plugin');

const prodConfig = {
    mode: 'production', // 开发模式
   optimization: {
    minimizer: [
        new TerserPlugin({
            terserOption: {
                compress: {
                    drop_console: true
                },
                parser: {
                    ecma: 8
                }
            }
        }),
        '...'
    ]
   },
   entry: path.join(__dirname, '../src/index.jsx'),
    outputh: {
        path: path.join(__dirname, '../lib/'),
        filename: 'index.js',
        libraryTaraget: 'umd',
        libraryExport: 'default'
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [MiniCssExtractPlugin.loader, 'css-loader?modules'],
            }
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: 'main.min.css'
        })
    ],
    externals: {
        react: {
            root: 'React',
            commonjs2: 'react',
            commonjs: 'react',
            amd: 'react'
        },
        'react-dom': {
            root: 'ReactDOM',
            commonjs2: 'react-dom',
            commonjs: 'react-dom',
            amd: 'react-dom'
        }
    }
    
}

module.exports = merge(prodConfig, basicConfig)