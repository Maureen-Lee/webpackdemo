const path = require("path");
const {CleanWebpackPlugin} = require("clean-webpack-plugin")

const HtmlWebpackPlugin = require("html-webpack-plugin")
const MiniCssExtractPlugin = require("mini-css-extract-plugin")

const config = {
    //mode设置webpack的运行的是一个开发环境
    mode:"development",
    //entry设置webpack的入口文件路径
    entry:path.join(__dirname,"./js/index.js"),
    //output设置webpack打包之后的新文件的文件名和存储路径
    output:{
        filename:"bundle.js",
        path:path.join(__dirname,"./dist"),
        publicPath:"./"
    },
    //module在打包过程中根据自己的需求载入第三方模块添加一些特色功能
    module:{
        rules:[
            {
                //匹配所有的js文件
                test:/\.js$/,
                //把node_modules文件夹下面的JS文件排除在JS转换功能以外
                exclude:/node_modules/,
                //当前配置的规则是babel-loader的规则
                loader:"babel-loader"
            },
            {
                test:/\.css$/,
                use:[
                    MiniCssExtractPlugin.loader,
                    {
                        loader:"css-loader",
                        options:{
                            importLoaders:1
                        }
                    },                   
                    "postcss-loader"
                ]
            },
            {
                test:/\.(jpe?g|png|gif|svg|bmp|webp)/,
                use:[
                    {
                        loader:"url-loader",
                        options:{
                            //只处理8Kb大小以内的
                            limit:8 * 1024,
                            name:"[name].[hash:8].[ext]",
                            outputPath:"img/",
                            esModule:false,
                            publicPath:"../img"
                        }
                    }
                ],
                type:"javascript/auto"
            }
        ]
    },                          
    //对打包功能本身添加额外的功能
    plugins:[
        new HtmlWebpackPlugin({
            //配置模板文件的位置
            template:path.join(__dirname,"./飞机大战.html"),
            //生产的新文件的名称
            filename:"飞机大战.html",
            //生产的JS和CSS自动插入
            inject:true 
        }),
        new CleanWebpackPlugin(),
        new MiniCssExtractPlugin({
            filename:"css/index.[hash:8].css",
            ignoreOrder:false  //是否忽略第三方插件的处理
        })
    ]
}

module.exports = config