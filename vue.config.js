// 注意。只能是js 文件
const path = require("path");
module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
        "/@/": path.resolve(__dirname, "./src"),
      },
      extensions: [".ts", ".tsx", ".js", ".vue"],
    },
    devtool: "source-map",
  },
  chainWebpack: (config) => {
    config.plugin("html").tap((args) => {
      args[0].title = "桃源.音乐";
      return args;
    });
  },
};
