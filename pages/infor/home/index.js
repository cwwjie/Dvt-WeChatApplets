const app = getApp();

Page({
  'data': {
    'isFirstSubmit': true,
    'isReadTerms': true,
    'isReserverInforcomplete': true,
    'isRoomInforcomplete': true,
  },

  init: function () {
    this.setData({
      'isFirstSubmit': app.state.isFirstSubmit,
      'isReadTerms': app.state.isReadTerms,
      'isReserverInforcomplete': app.state.isReserverInforcomplete,
      'isRoomInforcomplete': app.state.isRoomInforcomplete
    });
  },

  redirectToOrder: function () {
    wx.redirectTo({
      url: './../../order/index'
    });
  },

  onShow: function () {
    this.init();
  },

  onLoad: function () {
    this.init();
  }
})
