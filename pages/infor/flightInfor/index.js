const app = getApp();

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

  onLoad: function () {
    this.setData({
      'template': app.taobaoItem.template,

      'outboundNum': app.state.outboundNum, // 国际航班号（入境）
      'landDate': app.state.landDate ? app.state.landDate : '无',
      'landTime': app.state.landTime ? app.state.landTime : '无',
  
      'inHarbourNum': app.state.inHarbourNum, // 到港航班号
      'hLandDate': app.state.hLandDate ? app.state.hLandDate : '无',
      'hLandTime': app.state.hLandTime ? app.state.hLandTime : '无',
      
      'outHarbourNum': app.state.outHarbourNum, // 离港航班号
      'hTakeoffDate': app.state.hTakeoffDate ? app.state.hTakeoffDate : '无',
      'hTakeoffTime': app.state.hTakeoffTime ? app.state.hTakeoffTime : '无',
      
      'inboundNum': app.state.inboundNum, // 国际航班号（出境）
      'takeoffDate': app.state.takeoffDate ? app.state.takeoffDate : '无',
      'takeoffTime': app.state.takeoffTime ? app.state.takeoffTime : '无',
    });
  },

  onHide: function () {
    this.saveToApp();
  },

  onUnload: function () {
    this.saveToApp();
  },

  saveToApp: function () {
    app.state.outboundNum = this.data.outboundNum; // 国际航班号（入境）
    app.state.landDate = this.data.landDate === '无' ? null : this.data.landDate;
    app.state.landTime = this.data.landTime === '无' ? null : this.data.landTime;

    app.state.inHarbourNum = this.data.inHarbourNum; // 到港航班号
    app.state.hLandDate = this.data.hLandDate === '无' ? null : this.data.hLandDate;
    app.state.hLandTime = this.data.hLandTime === '无' ? null : this.data.hLandTime;
    
    app.state.outHarbourNum = this.data.outHarbourNum; // 离港航班号
    app.state.hTakeoffDate = this.data.hTakeoffDate === '无' ? null : this.data.hTakeoffDate;
    app.state.hTakeoffTime = this.data.hTakeoffTime === '无' ? null : this.data.hTakeoffTime;

    app.state.inboundNum = this.data.inboundNum; // 国际航班号（出境）
    app.state.takeoffDate = this.data.takeoffDate === '无' ? null : this.data.takeoffDate;
    app.state.takeoffTime = this.data.takeoffTime === '无' ? null : this.data.takeoffTime;
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
