import request from './../../utils/request';

let iceRelation = {
  'data': ['兄弟姐妹', '父母', '夫妻', '朋友', '其他'],

  toIndex: function (val) {
    return this.data.indexOf(val)
  },

  toValue: function (val) {
    return this.data[val]
  }
}

Page({
  'data': {
    'buttonType': 'default',

    'iceName': '',
    'iceNameError': '',

    'iceRelationArray': iceRelation.data,
    'iceRelation': iceRelation.toIndex('其他'),

    'iceMobile': '',
    'iceMobileError': '',

    'iceEmail': '',
    'iceEmailError': '',
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

  jumpBack: function () {
    wx.navigateBack();
  },

  jumpToNext: function () {
    
  }
})
