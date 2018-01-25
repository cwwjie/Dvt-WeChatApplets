Page({
  'data': {
    'isRead': false
  },
  
  agreeTerms: function () {
    this.setData({
      'isRead': true
    });
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
