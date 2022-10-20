export default defineAppConfig({
  pages: [
    "pages/echarts/echarts",
    "pages/index/index"
  ],
  window: {
    backgroundTextStyle: "light",
    navigationBarBackgroundColor: "#fff",
    navigationBarTitleText: "WeChat",
    navigationBarTextStyle: "black"
  },
  lazyCodeLoading: "requiredComponents",
  tabBar: {
    list: [
      {
        pagePath: "pages/echarts/echarts",
        text: "ECharts"
      },
      {
        pagePath: "pages/index/index",
        text: "Index"
      }
    ]
  }
})
