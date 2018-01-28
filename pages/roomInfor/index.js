import request from './../../utils/request';

const app = getApp();

let iceRelation = {
  'data': ['兄弟姐妹', '父母', '夫妻', '朋友', '其他'],

  toIndex: function (val) {
    return this.data.indexOf(val);
  },

  toValue: function (val) {
    return this.data[val];
  }
}

Page({
  'data': {
    'template': '',

    'buttonType': 'default',

    'roomInfoList': [{
      'isComplete': false,
      'bedType': null,
      'customerCount': 0,
    }],

    'iceName': '',
    'iceNameError': '',

    'iceRelationArray': iceRelation.data,
    'iceRelation': iceRelation.toIndex('其他'),

    'iceMobile': '',
    'iceMobileError': '',

    'iceEmail': '',
    'iceEmailError': '',
  },

  onLoad: function () {
    this.setData({
      'template': app.state.template,

      'buttonType': app.state.isRoomInforcomplete ? 'primary' : 'default',

      'iceName': app.state.iceName,
      'iceRelation': app.state.iceRelation,
      'iceMobile': app.state.iceMobile,
      'iceEmail': app.state.iceEmail
    });
  },

  handleAllowNext: function () {
    // if (
    //   this.verifyMobile(this.data.mobile).result === 1 &&
    //   this.verifyEmail(this.data.email).result === 1
    // ) {
    //   this.setData({ 'buttonType': 'primary' });
    // } else {
    //   this.setData({ 'buttonType': 'default' });
    // }
  },

  showError: function (event) {
    const _this = this;

    wx.showToast({
      'title': _this.data[event.currentTarget.id],
      'icon': 'none',
    });

    setTimeout(function(){
      wx.hideToast();
    }, 2000);
  },

  verifyIceName: function (iceName) {
    if (iceName === '') {
      return request.error('中文名为必填');
    } else if ( /^[\u4E00-\u9FA5\uF900-\uFA2D\u0020]*$/.test(iceName) === false ) {
      return request.error('必须为中文格式');
    } else {
      return request.success();
    }
  },

  handleIceName: function (event) {
    let verify = this.verifyIceName(event.detail.value);

    this.setData({
      'iceName': event.detail.value,
      'iceNameError': verify.result === 1 ? '' : verify.message
    }, () => this.handleAllowNext());
  },

  iceRelationChange: function (event) {
    this.setData({'iceRelation': event.detail.value});
  },

  verifyIceMobile: function (mobile) {
    if (mobile === '') {
      return request.error('电话为必填');
    } else if ( /^[0-9]*$/.test(mobile) === false ) {
      return request.error('请输入的电话格式必须为纯数字');
    } else {
      return request.success();
    }
  },
  
  handleIceMobile: function (event) {
    let verify = this.verifyIceMobile(event.detail.value);

    this.setData({
      'iceMobile': event.detail.value,
      'iceMobileError': verify.result === 1 ? '' : verify.message
    }, () => this.handleAllowNext());
  },

  verifyIceEmail: function (email) {
    if (email === '') {
      return request.error('邮箱为必填');
    } else if ( /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/.test(email) === false ) {
      return request.error('邮箱格式不正确');
    } else {
      return request.success();
    }
  },

  handleIceEmail: function (event) {
    let verify = this.verifyIceEmail(event.detail.value);

    this.setData({
      'iceEmail': event.detail.value,
      'iceEmailError': verify.result === 1 ? '' : verify.message
    }, () => this.handleAllowNext());
  },

  handleAllowNext: function () {
    return request.success();
  },

  jumpToNext: function () {
    if (this.handleAllowNext().result === 1) {
      wx.navigateTo({
        'url': './../flightInfor/index'
      })
    } else {
      if (wx.showToast) {
        wx.showToast({
          'title': '必须补充完成入住信息',
          'icon': 'none'
        })

        setTimeout(function(){
          wx.hideToast()
        }, 2000)
      }
    }
  }
})
