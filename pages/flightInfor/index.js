Page({
  'data': {
    'template': null,

    'flightinfor': {
      'checkIn': '正在加载',
      'checkOut': '正在加载',
      'cycleLength': '正在加载'
    },

    // 国际航班号（入境）
    'outboundNum': null,
    'landDate': '无',
    'landTime': '无',

    // 到港航班号
    'inHarbourNum': null,
    'hLandDate': '无',
    'hLandTime': '无',

    // 离港航班号
    'outHarbourNum': null,
    'hTakeoffDate': '无',
    'hTakeoffTime': '无',

    // 国际航班号（出境）
    'inboundNum': null,
    'takeoffDate': '无',
    'takeoffTime': '无',
  },

  handlebyId: function(event) {
    let temObj = {};

    temObj[event.currentTarget.id] = event.detail.value;

    this.setData(temObj);
  },

  jumpToNext: function () {
    wx.navigateTo({
      'url': './../specialNote/index'
    })
  }
})
