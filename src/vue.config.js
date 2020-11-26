const path = require("path");

function resolve(dir) {
  return path.join(__dirname, dir);
}
module.exports = {
  publicPath: "",
  productionSourceMap: false,
  chainWebpack: config => {
    config.resolve.alias //设置别名
      .set("@", resolve("src"))
      .set("config", resolve("config"));
  },
  css: {
    extract: true,
    sourceMap: false, //css文件映射
    loaderOptions: {
      stylus: {}
    }
  }
};
