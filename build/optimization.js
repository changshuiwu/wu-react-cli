
// const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const OptimizeCSs = require('optimize-css-assets-webpack-plugin')

module.exports = {
    // runtimeChunk用于生成维系各各代码块关系的代码
    runtimeChunk: {
        name: 'manifest'
    },
    splitChunks: {
        cacheGroups: {
            default: false,
            common: {
                test: /[\\/]node_modules[\\/]/,
                name: 'vendor',
                chunks: 'all'
            }
        }
    },
    minimizer: [
        // new UglifyJsPlugin({
        //     cache: true,
        //     sourceMap: true,
        //     // 采用多线程来加速压缩
        //     parallel: true
        // }),
        new OptimizeCSs({
            // cssnano ，使体积变小
            cssProcessor: require('cssnano'),
            cssProcessorPluginOptions: {
                reduceIndents: false,
                autoprefixer: false
            }
        })
    ]
}