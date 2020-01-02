
module.exports = {
  assetsDir: "static",
  lintOnSave: true,
  productionSourceMap: false,
  chainWebpack: config => {
    // Loader
    config.module
      .rule("svg")
      .test(/\.(swf|ttf|eot|svg|woff(2))(\?[a-z0-9]+)?$/)
      .use("file-loader")
      .loader("file-loader")
      .end();
  },

  configureWebpack: {
    resolve: {
      alias: {
        components: "@/components",
        common: "@/common",
        assets: "@/assets",
        network: "@/network",
        views: "@/views",
        pages: "@/pages"
      }
    },
    plugins: [],
    optimization: {
      runtimeChunk: "single",
      splitChunks: {
        chunks: "all",
        maxInitialRequests: Infinity,
        minSize: 20000,
        cacheGroups: {
          vendor: {
            test: /[\\/]node_modules[\\/]/,
            name(module) {
              // get the name. E.g. node_modules/packageName/not/this/part.js
              // or node_modules/packageName
              const packageName = module.context.match(
                /[\\/]node_modules[\\/](.*?)([\\/]|$)/
              )[1];
              // npm package names are URL-safe, but some servers don't like @ symbols
              return `npm.${packageName.replace("@", "")}`;
            }
          }
        }
      }
    }
  }
};
