// https://nuxt.com/docs/api/configuration/nuxt-config
//转发服务器
const commonUrl = "http://122.51.119.99/api";
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@element-plus/nuxt", "@nuxtjs/tailwindcss"],
  //项目是前后端分离的,所以要做代理转发,解决跨域问题
  nitro: {
    devProxy: {
      "/api": {
        target: commonUrl,
        changeOrigin: true,
        prependPath: true,
      },
      "/proxy/example": { target: "https://example.com", changeOrigin: true },
    },
    // 该配置用于服务端请求转发
    routeRules: {
      "/api/**": {
        proxy: `${commonUrl}/**`,
      },
    },
  },
  runtimeConfig: {
    public: {
      baseUrl: "/api",
      commonUrl: commonUrl,
    },
  },
});