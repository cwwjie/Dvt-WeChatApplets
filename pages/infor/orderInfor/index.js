import convertDate from './../../../utils/convertDate';

const app = getApp();

Page({
  'data': {
    'isFirstSubmit': true, // 是否 第一次提交

    'present': '', // '1' '2' '1,2' 

    'orderName': '半独立沙滩木屋',
    'orderSn': '2017082901',
    'payStatus': '已付款',

    'roomNum': 2,
    'peopleNum': 3,
    'adultNum': 2,
    'childNum': 1,

    'checkIn': '2018-1-21',
    'checkOut': '2018-1-24',
    'cycleLength': '2天1晚',

    'productAmount': 500,
    'discount': 0,
    'orderAmount': 1,
    'calMethod': '100 + 1 ?= 123',
    'payAmount': 500,
    'notPayAmount': 4000,
  },

  onLoad: function () {
    let checkIn = app.taobaoItem.checkIn;
    let checkOut = app.taobaoItem.checkOut;
    let cycleLength = Math.floor((checkOut - checkIn)/86400000);

    this.setData({
      'isFirstSubmit': app.state.isFirstSubmit,
      'present': app.taobaoItem.present,
      'orderName': app.taobaoItem.orderName,
      'orderSn': app.taobaoItem.orderSn,
      'roomNum': app.taobaoItem.roomNum,
      'peopleNum': app.taobaoItem.peopleNum,
      'adultNum': app.taobaoItem.adultNum,
      'childNum': app.taobaoItem.childNum,
      'checkIn': convertDate.timestampToFormat(app.taobaoItem.checkIn),
      'checkOut': convertDate.timestampToFormat(app.taobaoItem.checkOut),
      'cycleLength': `${cycleLength + 1}天${cycleLength}晚`,
      'productAmount': app.taobaoItem.productAmount,
      'discount': app.taobaoItem.discount,
      'orderAmount': app.taobaoItem.orderAmount,
      'calMethod': app.taobaoItem.calMethod,
      'payAmount': app.taobaoItem.payAmount,
      'notPayAmount': app.taobaoItem.notPayAmount
    });
  },

  jumpToNext: function () {
    if (this.data.isFirstSubmit) {
      if (this.data.present) {
        wx.navigateTo({
          url: './../giftInfor/index'
        });
      } else {
        wx.navigateTo({
          url: './../reserverInfor/index'
        });
      }
    } else {
      wx.navigateBack();
    }
  }
})
