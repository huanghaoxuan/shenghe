module.exports = {
  // 基本路径
  //baseUrl: "./",
  // 输出文件目录
  outputDir: "dist",
  devServer: {
    port: 8085, // 端口号
    //host: 'localhost',
    https: false, // https:{type:Boolean}
    open: true, //配置自动启动浏览器
    //disableHostCheck: true,
    proxy: null //'http://localhost:4000' // 配置跨域处理,只有一个代理
    /*proxy: {
            '/api': {
                target: '<url>',
                ws: true,
                changeOrigin: true
            },
            '/foo': {
                target: '<other_url>'
            } 
        }, */ // 配置多个代理
  }
};
