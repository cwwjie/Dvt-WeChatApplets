const app = getApp();

Page({
  'data': {
    'isRead': false
  },
  
  agreeTerms: function () {
    this.setData({
      'isRead': true
    });
  },

  onLoad: function () {
    this.setData({ 'isRead': app.state.isReadTerms });
  },

  onHide: function () {
    app.state.isReadTerms = this.data.isRead;
  },

  jumpToOrderInfor: function () {
    if (this.data.isRead) {
      wx.navigateTo({
        'url': './../orderInfor/index'
      })
    } else {
      if (wx.showToast) {
        wx.showToast({
          'title': '必须同意条款声明',
          'icon': 'none'
        })

        setTimeout(function(){
          wx.hideToast()
        }, 2000)
      }
    }
  }
})
