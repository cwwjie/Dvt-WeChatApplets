import convertDate from './../../../utils/convertDate';

const app = getApp();

Page({
  'data': {
    'isFirstSubmit': true, // 是否 第一次提交
    'present': '', // '1' '2' '1,2' 

    'transfersInfo': '2018-1-22 到 2018-1-28',
    'transfersInfo': '接送信息',

    'isShowDescription': false,
  },

  showDescription: function () {
    this.setData({
      'isShowDescription': !this.data.isShowDescription
    });
  },

  onLoad: function () {
    let insuranceBegin = convertDate.timestampToFormat(app.taobaoItem.insuranceBegin);
    let insuranceEnd = convertDate.timestampToFormat(app.taobaoItem.insuranceEnd);
    let transfersInfo = app.taobaoItem.transfersInfo;

    this.setData({
      'isFirstSubmit': app.state.isFirstSubmit,
      'present': app.taobaoItem.present,
      'insurance': `${insuranceBegin} 到 ${insuranceEnd}`,
      'transfersInfo': app.taobaoItem.transfersInfo
    });
  },

  jumpToNext: function () {
    if (this.data.isFirstSubmit) {
      wx.navigateTo({
        url: './../reserverInfor/index'
      });
    } else {
      wx.navigateBack();
    }
  }
})
