const app = getApp();

Page({
  'data': {
    'template': null,
  },

  showViewById: function (event) {
    let temObj = {};
    let isShow = this.data[event.currentTarget.id] ? !this.data[event.currentTarget.id] : true;

    temObj[event.currentTarget.id] = isShow;

    this.setData(temObj);
  },

  onShow: function () {
    this.setData({
      'isFirstSubmit': app.state.isFirstSubmit,
      'template': app.taobaoItem.template
    });
  },

  jumpBack: function () {
    wx.navigateTo({
      'url': './../flightInfor/index'
    })
  },

  jumpToNext: function () {
    if (this.data.isFirstSubmit) {
      if (wx.reLaunch) {
        wx.reLaunch({
          'url': './../result/index'
        })
      } else {
        wx.navigateTo({
          'url': './../result/index'
        })
      }
    } else {
      wx.navigateBack();
    }
  },
})
