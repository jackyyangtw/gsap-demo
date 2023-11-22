const path = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin");
const HtmlReplaceWebpackPlugin = require('html-replace-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const TerserPlugin = require('terser-webpack-plugin');


module.exports = (env, argv) => {
    let mode = !env.WEBPACK_SERVE ? 'production':'development';
    let uploadImgHost = !env.WEBPACK_SERVE ? 'https://cdn.jsdelivr.net/gh/yourname/yourrepo/_img':'../_img';

    return {
        mode,
        entry: './src/index.js',
        output: {
            filename: 'bundle.js',
            path: path.resolve(__dirname, 'dist')
        },
        devServer: { 
            watchFiles: ['src/**/*'],
            hot: true
        },
        plugins: [
            new BundleAnalyzerPlugin(),
            // HtmlWebpackPlugin 插件会在打包结束后，自动生成一个 html 文件，并把打包生成的 js 自动引入到这个 html 文件中
            new HtmlWebpackPlugin({
                template: path.resolve(__dirname, "./src/index.html")
            }),
            // HtmlReplaceWebpackPlugin 插件会在打包结束后，自动替换 html 文件中的字符串
            new HtmlReplaceWebpackPlugin([
                {
                    pattern: '../_img',
                    replacement: uploadImgHost
                },
            ]),
            // CopyWebpackPlugin 插件会在打包结束后，自动将指定文件夹下的文件复制到指定目录
            new CopyWebpackPlugin({
                patterns: [
                    { from: './_css', to: '_css' },
                    { from: './_img', to: '_img' },
                    { from: './custom', to: 'custom' },
                    { from: './_scss', to: '_scss' },
                ],
            }),
        ],
        performance: {
            maxAssetSize: 10000000, // bytes
            maxEntrypointSize: 10000000, // bytes
        },
        module: {
            rules: [
                {
                    test: /\.js$/,
                    loader: 'string-replace-loader',
                    options: {
                        search: '../_img',
                        replace: uploadImgHost,
                        flags: 'g'
                    }
                }
            ]
        },
        optimization: {
            usedExports: true, // 標記未使用的模塊，使得可以被 minifier 刪除
            minimize: true, // 啟用/禁用優化
            minimizer: [new TerserPlugin()], // 您可以取消註釋這行以啟用 TerserPlugin
        },
    }
};

