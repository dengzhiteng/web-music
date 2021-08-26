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
};
