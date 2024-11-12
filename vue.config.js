const { defineConfig } = require('@vue/cli-service');
const path = require('path');

module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    port: '2020',
    host: '0.0.0.0',
  },
  configureWebpack: {
    resolve: {
      alias: {
        '@': path.resolve(__dirname, 'src'),
        '@assets': path.resolve(__dirname, 'src/assets'),
        '@components': path.resolve(__dirname, 'src/app/shared/components'),
        '@widgets': path.resolve(__dirname, 'src/app/shared/widgets'),
        '@pages': path.resolve(__dirname, 'src/app/pages'),
      }
    }
  }
});
