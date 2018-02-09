import config from './../../../config/index';

const app = getApp();

Page({
  'data': {
    'status': 'waiting', // success failure waiting
    'error': 'waiting'
  },

  copyError: function () {
    if (wx.setClipboardData) {
      wx.setClipboardData({
        data: app.stateToSubmitData(), // 错误信息放置在这里
        success: function(res) {
          wx.showToast({
            title: '复制错误信息!',
            icon: 'success',
            duration: 2000
          })
        }
      })
    } else {
      // 如果希望用户在最新版本的客户端上体验您的小程序，可以这样子提示
      wx.showModal({
        title: '提示',
        content: '当前微信版本过低，无法使用该功能，请升级到最新微信版本后重试。'
      })
    }
  },

  returnToHomePage: function () {
    if (wx.reLaunch) {
      wx.reLaunch({
        'url': './../../order/index'
      })
    } else {
      wx.navigateTo({
        'url': './../../order/index'
      })
    }
  },

  ajaxSubmit: function(data) {
    return new Promise((resolve, reject) => {

      wx.request({
        'url': `${config.version}/gather/${app.taobaoItem.uniqueKey}/gather.do`,
        'method': 'POST',
        'header': { 
          'content-type': 'application/json',
          'token': wx.getStorageSync('token'), 
          'digest': wx.getStorageSync('digest')
        },
        'dataType': 'json',
        'data': JSON.stringify(data),
        success: res => resolve(res.data),
        fail: error => reject(error)
      });
    });
  },

  ajaxUpdate: function(data) {
    return new Promise((resolve, reject) => {

      wx.request({
        'url': `${config.version}/gather/${app.taobaoItem.uniqueKey}/updateForm.do`,
        'method': 'POST',
        'header': { 
          'content-type': 'application/json',
          'token': wx.getStorageSync('token'), 
          'digest': wx.getStorageSync('digest')
        },
        'dataType': 'json',
        'data': JSON.stringify(data),
        success: res => resolve(res.data),
        fail: error => reject(error)
      });
    });
  },

  resultToErrorMessage: function (val) {
    if (val.result == '2') {
      return '非常抱歉，该链接已经失效!';
    } else if (val.result == '3') {
      return '非常抱歉，无法进行数据修改!';
    } else if (val.result == '100') {
      return '非常抱歉，无法进行数据修改!';
    } else if (val.result == '100') {
      return `非常抱歉，数据在提交时发生错误! 原因: ${val.message}`;
    } else {
      return `非常抱歉，服务器返回一个错误! 原因: ${val.message}`;
    }
  },

  onLoad: function (options) {
    const _this = this;
    let submitData = app.stateToSubmitData();

    wx.showLoading({ 'title': '正在加载', 'mask': true });
    if (app.state.isFirstSubmit) {
      this.ajaxSubmit(submitData)
      .then(val => {
        if (val.result == '0') {
          _this.setData({
            'status': 'success'
          });
        } else {
          _this.setData({
            'status': 'failure',
            'error': _this.resultToErrorMessage(val)
          });
        }
        wx.hideLoading();
      }, error => {
        wx.hideLoading();
        _this.setData({
          'status': 'failure',
          'error': `提交数据发生错误, 原因${error}`
        });
      });
    } else {
      this.ajaxUpdate(submitData)
      .then(val => {
        if (val.result == '0') {
          _this.setData({
            'status': 'success'
          });
        } else {
          _this.setData({
            'status': 'failure',
            'error': _this.resultToErrorMessage(val)
          });
        }
        wx.hideLoading();
      }, error => {
        wx.hideLoading();
        _this.setData({
          'status': 'failure',
          'error': `提交数据发生错误, 原因${error}`
        });
      });
    }
  }
})