var webpack  = require('webpack');
var providePlugin = new webpack.ProvidePlugin({$: 'jquery','jQuery': 'jquery', 'window.jQuery': 'jquery'});
// 插件 功能 
var uglifyPlugin = new webpack.optimize.UglifyJsPlugin({minimize: true});//压缩代码
// var commonPlugin = new webpack.optimize.CommonsChunkPlugin('common.js');//提取公共模块common.js

//对CSS代码进行独立打包
// var ExtractTextPlugin = require('extract-text-webpack-plugin');
// var extractTextPlugin = new ExtractTextPlugin('[name].css', {allChunks: true});
module.exports = {
    entry: {entry: './entry.js'},
    output: {
        path: './output',
        filename: '[name].js',
    },
    module: {
        loaders: [
            {test: /\.js$/, loader: 'babel-loader'},
            {test: /\.css$/, loader: 'style-loader!css-loader'}, 
            //{test: /\.css$/, loader: ExtractTextPlugin.extract('style-loader','css-loader') }, 
            {test: /\.less$/, loader: 'style-loader!css-loader!less-loader'},           
            {test: /\.(jpg|png|gif)$/, loader: 'url-loader?limit=8192'}
        ]         
    },
    plugins: [uglifyPlugin]//(new ExtractTextPlugin('[name].css'))在html页面在引入output路径path下打包后的css文件。
}