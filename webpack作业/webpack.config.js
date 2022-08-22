///导出配置项
const path = require("path");

const MiniCssExtractPlugin = require("mini-css-extract-plugin");

//引入模板插件
const HtmlWebpackPlugin = require("html-webpack-plugin");
//VUE
const { VueLoaderPlugin } = require("vue-loader");

module.exports = {
  //production默认模式生产模式  会压缩代码  development开发  不会压缩
  mode: "development",
  entry: "./src/main.js", //入口
  output: {
    //出口  __dirname 当前目录绝对路径
    path: path.join(__dirname, "lib"), //更改目录名字
    filename: "index.js", //出口文件名
    clean: true, //先清除path目录在重新打包
  },
  //自动生成html 且以template里面路径为模板  需要下载插件引入
  plugins: [
    //插件
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
    new VueLoaderPlugin(),
    new MiniCssExtractPlugin(),
  ],

  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.less$/,
        use: ["style-loader", "css-loader", "less-loader"],
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        type: "asset/resource",
      },
      //vue
      {
        test: /\.vue$/,
        loader: "vue-loader",
      },
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
    ],
  },
  devServer: {
    open: true, //serve 以后自动打开浏览器  默认浏览器
    port: 30000,
  },
};
