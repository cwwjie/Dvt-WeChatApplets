import request from './../../utils/request';
import config from './../../config/index';

Page({
  'data': {
    'buttonType': 'default',
    'isPasswordShow': false,
    'automatiSave': true,

    'account': '',
    'accountError': '',
    'password': '',
    'passwordError': '',
  },

  onLoad: function () {
    let account = wx.getStorageSync('account');
    let password = wx.getStorageSync('password');

    this.setData({
      'account': account ? account : '',
      'password': password ? password : '',
      'buttonType': password && account ? 'primary' : 'default'
    });
  },

  switchPasswordShow: function () {
    this.setData({'isPasswordShow': !this.data.isPasswordShow});
  },

  checkValue: function () {
    if (this.data.account === '') {
      return request.error('账号不能为空!');
    }
    if (this.data.password.length < 8) {
      return request.error('密码不能小于8位数!');
    }

    if (
      /^1[34578]\d{9}$/.test( this.data.account ) ||
      /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/.test( this.data.account)
    ) {
      return request.success();
    } else {
      return request.error('账号格式有误!');
    }
  },

  handleAllowNext: function () {
    let checkValue = this.checkValue();

    if (checkValue.result === 1) {
      this.setData({'buttonType': 'primary'});
    } else {
      this.setData({'buttonType': 'default'});
    }
  },

  handleAccount: function (event) {
    this.setData({
      'account': event.detail.value,
      'accountError': ''
    }, () => this.handleAllowNext());
  },

  handlePassword: function (event) {
    this.setData({
      'password': event.detail.value,
      'passwordError': ''
    }, () => this.handleAllowNext());
  },

  showErrorMessage: function () {
    let errorMessage = {};
    if (
      /^1[34578]\d{9}$/.test( this.data.account ) === false &&
      /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/.test( this.data.account) === false
    ) {
      errorMessage.accountError = '请输入正确格式的邮箱或手机号码';
    } else {
      errorMessage.accountError = '';
    }

    if (this.data.account === '') {
      errorMessage.accountError = '账号不能为空';
    }

    if (this.data.password.length < 8) {
      errorMessage.passwordError = '密码不能小于8位数';
    } else {
      errorMessage.passwordError = '';
    }

    if (this.data.password === '') {
      errorMessage.passwordError = '密码不能为空';
    }

    this.setData(errorMessage);
  },

  login: function () {
    const _this = this;
    let body = {};

    if (this.data.buttonType === 'primary') {
      if (/^1[34578]\d{9}$/.test(this.data.account)) {
        body = {
          'mobile': this.data.account,
          'passwd': this.data.password
        };
      } else {
        body = {
          'email': this.data.account,
          'passwd': this.data.password
        };
      }

      wx.showLoading({
        'title': '正在登录',
        'mask': true
      });

      wx.request({
        'url': `${config.version}/user/login.do`,
        'method': 'POST',
        'header': { 'content-type': 'application/json' },
        'dataType': 'json',
        'data': JSON.stringify(body),
        success: function(res) {
          let json = res.data;
          if (json.result === '0') {
            wx.setStorageSync('token', json.data.token);
            wx.setStorageSync('digest', json.data.digest);
    
            // 如果有自动储存
            if (_this.data.automatiSave) {
              wx.setStorageSync('account', _this.data.account);
              wx.setStorageSync('password', _this.data.password);
            } else {
              wx.removeStorageSync('account');
              wx.removeStorageSync('password');
            }
            wx.redirectTo({
              url: './../order/index'
            });
          } else if (json.result == '-9') {
            wx.showModal({
              title: '账户未激活',
              content: '您的账号尚未激活'
            });
            _this.setData({'accountError': '您的账号尚未激活'});
          } else if (json.result == '-5') {
            wx.showModal({
              title: '账号不存在',
              content: '此账号不存在'
            });
            _this.setData({'accountError': '此账号不存在'});
          } else if (json.result == '-6') {
            wx.showModal({
              title: '密码错误',
              content: '您输入的密码是错误, 请输入正确的密码！'
            });
            _this.setData({'passwordError': '您输入的密码是错误, 请输入正确的密码！'});
          } else {
            wx.showModal({
              title: '数据有误',
              content: `请求服务器成功, 但是返回的数据有误! 原因: ${json.message}`
            });
          }
          wx.hideLoading();
        },
        fail: function (error) {
          wx.hideLoading();
          wx.showModal({
            title: '登录失败',
            content: `发生错误, 原因: ${error}`
          });
        }
      });
    } else {
      this.showErrorMessage();
    }
  }
})
