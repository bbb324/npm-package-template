/**
 * Created by junxie on 18/5/27.
 */
const path = require('path');
const { module } = require('./webpack.common.js');
const {merge} = rquire('webpack-merge');
const basicConfig = require('./webpack.common.js');

const devConfig = {
    mode: 'development', // 开发模式
    entry: path.join(__dirname, '../example/src/app.js'),
    outputh: {
        path: path.join(__dirname, '../exmaple/src/'),
    },
    devServer: {
        contentBase: path.join(__dirname, '../example/src/'),
        compress: true,
        host: '127.0.0.1',
        port: 6004,
        open: true
    }
}

module.exports = merge(devConfig, basicConfig)