import request from './../../../utils/request';

const app = getApp();

let iceRelation = {
  'data': ['兄弟姐妹', '父母', '夫妻', '朋友'],

  toIndex: function (val) {
    return this.data.indexOf(val);
  },

  toValue: function (val) {
    return this.data[val];
  }
}

Page({
  'data': {
    'isFirstSubmit': true, // 是否 第一次提交
    'template': '',

    'buttonType': 'default',

    'customerRest': null,

    'roomInfoList': [{
      'isComplete': false,
      'bedType': null,
      'customerCount': 0,
    }],

    'iceName': '',
    'iceNameError': '',

    'iceRelationArray': iceRelation.data,
    'iceRelation': null,
    'iceRelationError': '',

    'iceMobile': '',
    'iceMobileError': '',

    // 'iceEmail': '',
    // 'iceEmailError': '',
  },

  saveToApp: function () {
    if (this.data.template === 3) {
      app.state.iceName = this.verifyIceName(this.data.iceName).result === 1 ? this.data.iceName : null;
      app.state.iceRelation = this.data.iceRelation !== null && this.data.iceRelation !== '' ? iceRelation.toValue(this.data.iceRelation) : null;
      app.state.iceMobile = this.verifyIceMobile(this.data.iceMobile).result === 1 ? this.data.iceMobile : null;
    }
  },

  onHide: function () {
    this.saveToApp();
  },

  onUnload: function () {
    this.saveToApp();
  },

  onLoad: function () {
    this.setData({
      'isFirstSubmit': app.state.isFirstSubmit,

      'template': app.taobaoItem.template,

      'buttonType': app.state.isRoomInforcomplete ? 'primary' : 'default',

      'customerRest': this.countCustomerRest(),

      'roomInfoList': app.state.roomInfoList.map(room => ({
        'isComplete': room.bedType !== null && room.customerInfoList.length > 0 ? true : false,
        'bedType': room.bedType,
        'customerCount': room.customerInfoList.length,
      })),

      'iceName': app.state.iceName,
      'iceRelation': app.state.iceRelation !== null && app.state.iceRelation !== '' ? iceRelation.toIndex(app.state.iceRelation) : null,
      'iceRelationError': app.state.iceRelation === null || app.state.iceRelation === '' ? '请选择紧急联系人关系' : '',

      'iceMobile': app.state.iceMobile,
      // 'iceEmail': app.state.iceEmail // 邮箱暂时不用管
    });
  },

  countCustomerRest: function () {
    let customerCount = 0;
    let roomInfoList = app.state.roomInfoList;
    let peopleNum = app.taobaoItem.peopleNum;

    roomInfoList.map(room => customerCount += room.customerInfoList.length);

    if (peopleNum - customerCount > 0) {
      let customerRestNum = peopleNum - customerCount;
      return roomInfoList.length > 0 ? `还可入住 0 - ${customerRestNum} 人` : `还可入住 ${customerRestNum} 人`;
    } else {
      return '已住满'
    }
  },

  handleAllowIce: function () {
    if (this.data.template === 3) {
      if (
        this.verifyIceName(this.data.iceName).result === 1 &&
        this.verifyIceMobile(this.data.iceMobile).result === 1  &&
        this.data.iceRelation !== null &&
        this.data.iceRelation !== ''
      ) {
        return request.success();
      } else {
        return request.error('紧急联系人未完成!');
      }
    } else {
      return request.success();
    }
  },

  checkRoomInfoList: function () {
    let roomNum = app.taobaoItem.roomNum;
    let isFullLoad = true;

    app.state.roomInfoList.map(room => room.customerInfoList.length < 1 ? isFullLoad = false : null);

    if (app.state.roomInfoList.length === roomNum && isFullLoad) {
      return request.success();
    }
    return request.error('房间尚未补充完成!');
  },

  handleAllowNext: function () {
    let handleAllowIce = this.handleAllowIce();
    let checkRoomInfoList = this.checkRoomInfoList();

    if (this.data.template === 3) {
      if (
        handleAllowIce.result === 1 &&
        checkRoomInfoList.result === 1
      ) {
        return request.success();
      } else {
        if (handleAllowIce.result === 1) {
          return checkRoomInfoList
        } else {
          return handleAllowIce
        }
      }
    } else {
      return checkRoomInfoList;
    }
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

  // 验证姓名
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

  // 关系
  iceRelationChange: function (event) {
    this.setData({
      'iceRelation': event.detail.value,
      'iceRelationError': ''
    });
  },

  // 验证手机
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

  // 验证邮箱
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

  jumpToNext: function () {
    if (this.data.isFirstSubmit) {
      let handleAllowNext = this.handleAllowNext();
      if (handleAllowNext.result === 1) {
        wx.navigateTo({
          'url': './../flightInfor/index'
        })
      } else {
        if (wx.showToast) {
          wx.showToast({
            'title': handleAllowNext.message,
            'icon': 'none'
          })
  
          setTimeout(function(){
            wx.hideToast()
          }, 2000)
        }
      }
    } else {
      wx.navigateBack();
    }
  },

  jumpToDetail: function (event) {
    app.state.selectRoomNum = event.currentTarget.id;

    wx.navigateTo({
      'url': './detail/index'
    })
  }
})
