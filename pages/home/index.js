const app = getApp();

Page({
  'data': {
    'isReadTerms': true,
    'isReserverInforcomplete': true,
    'isRoomInforcomplete': true,
  },

  init: function () {
    // 暂时隐藏
    // this.setData({
    //   'isReadTerms': app.state.isReadTerms,
    //   'isReserverInforcomplete': app.state.isReserverInforcomplete,
    //   'isRoomInforcomplete': app.state.isRoomInforcomplete
    // });

    wx.hideLoading();
  },

  loadAppAsync: function () {
    const _this = this;

    // 表示已初始化完成
    if (app.state) {
      this.init();

    // 表示 正在始化
    } else {
      return 
      wx.showLoading({ // 加载完成之前，阻止其他操作
        title: '加载中',
        mask: true
      });
      // 等待回调函数 异步执行
      app.stateReadyCallback = () => _this.init();
    }
  },

  onShow: function () {
    this.loadAppAsync();
  },

  onLoad: function () {
    this.loadAppAsync();
  }
})
