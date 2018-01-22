import ConvertPinyin from './../../utils/ChineseHelper';
import request from './../../utils/request';

Page({
  'data': {
    'buttonType': 'default',

    'signName': '',
    'signNameError': '',

    'pinyinName': '',
    'pinyinNameError': '',

    'payAccount': '',
    'payAccountError': '',

    'mobile': '',
    'mobileError': '',

    'email': '',
    'emailError': '',
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

  handleAllowNext: function () {
    if (
      this.verifySignName(this.data.signName).result === 1 &&
      this.verifyPinyinName(this.data.pinyinName).result === 1 &&
      this.verifyMobile(this.data.mobile).result === 1 &&
      this.verifyEmail(this.data.email).result === 1
    ) {
      this.setData({ 'buttonType': 'primary' });
    } else {
      this.setData({ 'buttonType': 'default' });
    }
  },

  verifySignName: function (signName) {
    if (signName === '') {
      return request.error('中文名为必填');
    } else if ( /^[\u4E00-\u9FA5\uF900-\uFA2D\u0020]*$/.test(signName) === false ) {
      return request.error('必须为中文格式');
    } else {
      return request.success();
    }
  },

  handleSignName: function (event) {
    let verify = this.verifySignName(event.detail.value);

    this.setData(verify.result === 1 ? {
      'signName': event.detail.value,
      'signNameError': '',
      'pinyinName': ConvertPinyin(event.detail.value)
    } : {
      'signName': event.detail.value,
      'signNameError': verify.message
    }, () => this.handleAllowNext());
  },

  verifyPinyinName: function (pinyinName) {
    if (pinyinName === '') {
      return request.error('英文名为必填');
    } else if ( /^[A-Za-z ]+$/.test(pinyinName) === false ) {
      return request.error('请输入正确的英文格式');
    } else {
      return request.success();
    }
  },

  handlePinyinName: function (event) {
    let verify = this.verifyPinyinName(event.detail.value);

    this.setData({
      'pinyinName': event.detail.value,
      'pinyinNameError': verify.result === 1 ? '' : verify.message
    }, () => this.handleAllowNext());
  },

  handlePayAccount: function (event) {
    this.setData({
      'payAccount': event.detail.value,
      'payAccountError': ''
    });
  },

  verifyMobile: function (mobile) {
    if (mobile === '') {
      return request.error('电话为必填');
    } else if ( /^[0-9]*$/.test(mobile) === false ) {
      return request.error('请输入的电话格式必须为纯数字');
    } else {
      return request.success();
    }
  },

  handleMobile: function (event) {
    let verify = this.verifyMobile(event.detail.value);

    this.setData({
      'mobile': event.detail.value,
      'mobileError': verify.result === 1 ? '' : verify.message
    }, () => this.handleAllowNext());
  },

  verifyEmail: function (email) {
    if (email === '') {
      return request.error('邮箱为必填');
    } else if ( /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/.test(email) === false ) {
      return request.error('邮箱格式不正确');
    } else {
      return request.success();
    }
  },

  handleEmail: function (event) {
    let verify = this.verifyEmail(event.detail.value);

    this.setData({
      'email': event.detail.value,
      'emailError': verify.result === 1 ? '' : verify.message
    }, () => this.handleAllowNext());
  },

  jumpBack: function () {
    wx.navigateBack();
  },

  jumpToNext: function () {
    
  }
})