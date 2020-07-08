
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

const { resolveAssetsRootDir } = require('./utils')

module.exports = [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
        template: 'build/tpl/index.html',
        minify: {
            removeComments: true,
            collapseWhitespace: true,
            removeAttributeQuotes: true
        }
    }),
    new MiniCssExtractPlugin({
        filename: resolveAssetsRootDir('css/[name].css')
    })
]