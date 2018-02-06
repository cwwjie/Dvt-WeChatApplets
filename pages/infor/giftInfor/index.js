Page({
  'data': {
    'present': '', // '1' '2' '1,2' 

    'insurance': '2018-1-22 到 2018-1-28',
    'transfersInfo': '接送信息',

    'isShowDescription': false,
  },

  showDescription: function () {
    this.setData({
      'isShowDescription': !this.data.isShowDescription
    });
  },

  jumpBack: function () {
    wx.navigateTo({
      'url': './../orderInfor/index'
    })
  },

  jumpToNext: function () {
    wx.navigateTo({
      url: './../reserverInfor/index'
    })
  }
})
