const path = require('path')
const webpack = require('webpack')
const HtmlWebPackPlugin = require("html-webpack-plugin")
const CleanWebpackPlugin = require('clean-webpack-plugin')
const Dotenv = require('dotenv-webpack');

module.exports = {
    entry: './src/client/index.js',
    output: {
        libraryTarget: 'var',
        library: 'Client'
    },
    mode: 'development',
    devtool: 'source-map',
    module: {
        rules: [{
                test: '/\.js$/',
                exclude: /node_modules/,
                loader: "babel-loader"
            },
            {
                test: /\.scss$/,
                use: ['style-loader', 'css-loader', 'sass-loader']
            },
            {
                test: /\.(png|jpe?g|gif|ico)$/i,
                use: [
                  {
                    loader: 'file-loader',
                  },
                ],
            },
        ]
    },
    plugins: [
        new HtmlWebPackPlugin({
            template: "./src/client/views/index.html",
            favicon: './src/client/images/favicon.ico',
            filename: "./index.html",
        }),
        new Dotenv()
    ]
}