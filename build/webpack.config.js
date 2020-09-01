const plugins = require('./plugins')
const {resolve} = require('./utils')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const  optimization  = require('./optimization')

module.exports = {
    entry: {
        app: resolve('src/index.tsx')
    },
    output: {
        filename: '[name].js',
        chunkFilename: '[name].bundle.js',
        path: resolve('dist/')
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.jsx'],
        alias:{
           '@': resolve('src/'),
           '@components': resolve('src/components/'),
           "views": resolve('src/containers/views/'),
           "shared": resolve('src/containers/shared/')
        }
    },
    module: {
        rules: [
            {
                // 解析的类型
                test: /\.ts(x?)$/,
                // 对应的loader
                use: [
                    {
                        loader: 'awesome-typescript-loader',
                        options:{
                            useCache: true,
                            useBabel: true,
                            babelCore: '@babel/core',
                            cacheDirectory: resolve('cache-loader'),
                            // babelOptions: {
                            //     babelrc: false,
                            //     plugins: [
                            //         "@babel/plugin-syntax-dynamic-import",
                            //         "react-hot-loader/babel"
                            //     ]
                            // }
                        }
                    }
                ]
            },
            {
                test: /\.scss$/,
                include: [resolve('src')],
                use: [MiniCssExtractPlugin.loader, 
                     'css-loader', 
                     {
                         loader: 'sass-loader',
                         // scss导入的路径
                         options: {
                             sassOptions: {
                                includePaths: [resolve('src/styles')]
                             } 
                         }
                    }
                ]
            },
            {
                test: /\.css$/,
                use: [MiniCssExtractPlugin.loader, 'css-loader']
            },
            {
                test: /\.less$/,
                include: resolve('node_modules'),
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    {
                        // 修改antd的主题
                        loader: 'less-loader',
                        options: {
                            
                        }
                    }
                ]
            },
            {
                test: /\.(eot|svg|ttf|woff|woff2)$/,
                use: ['url-loader']
            }
        ]
    },
    plugins: [...plugins],
    optimization
}