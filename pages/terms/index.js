Page({
  'data': {
    'buttonType': 'default',
    'isRead': false
  },
  
  agreeTerms: function () {
    this.setData({
      'isRead': true,
      'buttonType': 'primary'
    });
  },

  jumpToOrderInfor: function () {
    if (this.data.isRead) {
      wx.navigateTo({
        url: './../orderinfor/index'
      })
    }
  }
})
