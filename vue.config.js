const path = require('path');
// 将打包后的dist文件加直接打包成dist.zip
const FileManagerPlugin = require('filemanager-webpack-plugin')
    // 打包的时候去掉console.log()
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
    // 引入打包工具
const CompressionWebpackPlugin = require('compression-webpack-plugin')
const productionGzipExtensions = ['js', 'css'];
//当前环境变量;dev开发环境;qa测试环境;release是正式环境;用于环境判断用;
const currentEnvironment = process.env.NODE_ENV;
module.exports = {
    publicPath: '/',
    // 引入css,Grid封装好样式
    css: {
        loaderOptions: {
            stylus: {
                // import: ['~@/assets/css/css.styl']
            }
        }
    },
    // 关闭EsLint的检查,
    lintOnSave: false,
    chainWebpack: config => {
        // 修复HMR
        config.resolve.symlinks(true);
        if (currentEnvironment == "release") {
            // js,css代码的最小化压缩
            config.optimization.minimize(true);
        }

    },
    configureWebpack: config => {
        if (currentEnvironment == "release") {
            // 打包自动生成zip包
            config.plugins.push(
                    new FileManagerPlugin({ //初始化 filemanager-webpack-plugin 插件实例
                        onEnd: {
                            delete: [ //首先需要删除项目根目录下的dist.zip
                                './dist.zip',
                            ],
                            archive: [ //然后我们选择dist文件夹将之打包成dist.zip并放在根目录
                                { source: './dist', destination: './dist.zip' },
                            ]
                        }
                    })
                )
                // 正式环境的时候去掉console.log
            config.plugins.push(
                    new UglifyJsPlugin({
                        uglifyOptions: {
                            warnings: false,
                            compress: {
                                drop_console: true,
                                drop_debugger: false,
                                pure_funcs: ["console.log"]
                            }
                        },
                    }),
                )
                // 正式环境打包的时候打包成gZip
            config.plugins.push(
                new CompressionWebpackPlugin({
                    filename: '[path].gz[query]', // 提示compression-webpack-plugin@2.0.0的话filename改为asset
                    algorithm: 'gzip',
                    test: new RegExp('\\.(' + productionGzipExtensions.join('|') + ')$'),
                    threshold: 10240, //内容超过10KB进行压缩
                    minRatio: 0.8
                })
            )
        }
    },
}