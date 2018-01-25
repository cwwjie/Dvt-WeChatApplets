const app = getApp();

Page({
  data: {
  },

  init: function () {

    wx.hideLoading();
  },

  onLoad: function () {
    const _this = this;


    // 表示已初始化完成
    if (app.state) {
      this.init();

    // 表示 正在始化
    } else {
      return 
      wx.showLoading({
        title: '加载中',
        mask: true
      });
      // 等待回调函数 异步执行
      app.stateReadyCallback = () => _this.init();
    }
  }
})
