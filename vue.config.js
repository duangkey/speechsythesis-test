const { defineConfig } = require('@vue/cli-service')
const baseUrl = 'http://127.0.0.1:3000/'
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    proxy: {
      '/': {
        target: baseUrl,
        changeOrigin: true,
      },
    },
  },
})
