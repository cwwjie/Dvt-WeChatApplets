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

  onShow: function () {
    this.init();
  },

  onLoad: function () {
    this.init();
  },

  sumbitInfor: function () {
    let storageState = wx.getStorageSync('state');
    let state = app.state;

    if (JSON.stringify(state) != JSON.stringify(storageState)) {

    } else {
      wx.showToast({
        title: '未修改任何信息, 不需要进行提交!',
        icon: 'none'
      })
    }
  },

  redirectToOrder: function () {
    let storageState = wx.getStorageSync('state');
    let state = app.state;

    if (JSON.stringify(state) != JSON.stringify(storageState)) {
      wx.showModal({
        title: '信息未提交',
        content: '检查到您的数据发生改变, 但是未提交到服务器. 你确定要退出吗?',
        success: function(res) {
          if (res.confirm) {
            wx.redirectTo({
              url: './../../order/index'
            });
          }
        }
      });
    } else {
      wx.redirectTo({
        url: './../../order/index'
      });
    }
  }
})
