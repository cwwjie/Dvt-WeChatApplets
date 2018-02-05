import request from './../../../utils/request';
import convertDate from './../../../utils/convertDate';
import ConvertPinyin from './../../../utils/ChineseHelper';

const app = getApp();

Page({
  'data': {
    'buttonType': 'default',

    'passportNo': '',

    'nationalityList': ['正在加载'],
    'nationality': 0,

    'chineseName': '',
    'chineseNameError': '',

    'pinyinName': '',
    'pinyinNameError': '',

    'genderList': ['男', '女'],
    'gender': 0,

    'birthday': '2018-01-01',

    'mobile': '',
    'mobileError': '',

    // 'email': '',
    // 'emailError': '',

    'isDive': false, // 是否深潜？ 'N' 'Y' 最终上传的数据

    'divingRankList': ['无', 'OW', 'AOW及以上'],
    'divingRank': 0,

    'divingCount': '', // 潜水次数
    'divingCountError': '',

    'lastDiveTime': '无', // 上次潜水时间

    'divingNo': '', // 潜水证号
    
    'anamnesis': '无', // 以往重大病史
  },

  saveToApp: function () {
    const IsAdd = this.checkIsAdd();
    const selectRoomNum = app.state.selectRoomNum;
    const selectCustomerNum = app.state.selectCustomerNum;
    let customerInfoList = {
      'passportNo': this.data.passportNo,
      'nationality': this.data.nationalityList[this.data.nationality],
      'chineseName': this.data.chineseName,
      'pinyinName': this.data.pinyinName,
      'birthday': this.data.birthday,
      'gender': this.data.gender + 1, // 1男 2女
      // 'email': this.data.email,
      'mobile': this.data.mobile,
      'isDive': this.data.isDive ? 'Y' : 'N',
      'divingCount': this.data.divingCount,
      'divingNo': this.data.divingNo,
      'divingRank': this.data.divingRankList[this.data.divingRank],
      'lastDiveTime': this.data.lastDiveTime === '无' ? null : this.data.lastDiveTime,
      'anamnesis': this.data.anamnesis,
    }

    if (this.handleAllowNext()) {
      if (IsAdd) {
        app.state.roomInfoList[selectRoomNum].customerInfoList.push(customerInfoList);
      } else {
        app.state.roomInfoList[selectRoomNum].customerInfoList[selectCustomerNum] = customerInfoList;
      }
    }
  },

  checkIsAdd: function () {
    const selectRoomNum = app.state.selectRoomNum;
    const selectCustomerNum = app.state.selectCustomerNum;

    if (app.state.roomInfoList[selectRoomNum].customerInfoList.length === selectCustomerNum) {
      return true
    } 
    return false
  },

  onHide: function () {
    this.saveToApp();
  },

  onUnload: function () {
    this.saveToApp();
  },

  onLoad: function () {
    if (this.checkIsAdd() === false) {
      const selectRoomNum = app.state.selectRoomNum;
      const selectCustomerNum = app.state.selectCustomerNum;
      const selectCustomer = app.state.roomInfoList[selectRoomNum].customerInfoList[selectCustomerNum];

      this.setData({
        'buttonType': 'primary',
        'passportNo': selectCustomer.passportNo,
        // 'nationality': selectCustomer.nationality,
        'chineseName': selectCustomer.chineseName,
        'pinyinName': selectCustomer.pinyinName,
        'gender': selectCustomer.gender - 1,
        'birthday': selectCustomer.birthday,
        'mobile': selectCustomer.mobile,
        'email': selectCustomer.email,
        'isDive': selectCustomer.isDive === 'Y' ? true : false,
        'divingRank': this.data.divingRankList.indexOf(selectCustomer.divingRank),
        'divingCount': selectCustomer.divingCount,
        'lastDiveTime': selectCustomer.lastDiveTime ? convertDate.timestampToFormat(selectCustomer.lastDiveTime) : '无',
        'divingNo': selectCustomer.divingNo,
        'anamnesis': selectCustomer.anamnesis
      });
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

  handleAllowNext: function () {
    if (
      this.verifyChineseName(this.data.chineseName).result === 1 &&
      this.verifyPinyinName(this.data.pinyinName).result === 1 &&
      this.verifyMobile(this.data.mobile).result === 1
    ) {
      this.setData({ 'buttonType': 'primary' });
      return true
    } else {
      this.setData({ 'buttonType': 'default' });
      return false
    }
  },

  handlePassportNo: function (event) {
    this.setData({'passportNo': event.detail.value});
  },

  nationalityChange: function (event) {
    this.setData({'nationality': event.detail.value});
  },

  verifyChineseName: function (chineseName) {
    if (chineseName === '') {
      return request.error('中文名为必填');
    } else if ( /^[\u4E00-\u9FA5\uF900-\uFA2D\u0020]*$/.test(chineseName) === false ) {
      return request.error('必须为中文格式');
    } else {
      return request.success();
    }
  },

  handleChineseName: function (event) {
    let verify = this.verifyChineseName(event.detail.value);

    this.setData(verify.result === 1 ? {
      'chineseName': event.detail.value,
      'chineseNameError': '',
      'pinyinName': ConvertPinyin(event.detail.value),
      'pinyinNameError': '',
    } : {
      'chineseName': event.detail.value,
      'chineseNameError': verify.message
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

  genderChange: function (event) {
    this.setData({'gender': event.detail.value});
  },

  birthdayChange: function (event) {
    this.setData({'birthday': event.detail.value});
  },

  verifyMobile: function (mobile) {
    if (mobile === '') {
      return request.error('手机为必填');
    } else if ( /^1[34578]\d{9}$/.test(mobile) === false ) {
      return request.error('请输入的手机格式必须为纯数字');
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

  isDiveChange: function (event) {
    this.setData({'isDive': event.detail.value});
  },

  handleAnamnesis: function (event) {
    this.setData({'anamnesis': event.detail.value});
  },

  divingRankChange: function (event) {
    this.setData({'divingRank': event.detail.value});
  },

  verifyDivingCount: function (divingCount) {
    if (divingCount === '' || divingCount === null) {
      return request.success();
    } else {
      let myDivingCount = parseInt(divingCount);
      if (myDivingCount > 100) {
        return request.error('潜水次数不能大于100次以上');
      }
      return request.success();
    }
  },

  handleDivingCount: function (event) {
    let verify = this.verifyDivingCount(event.detail.value);

    this.setData({
      'divingCount': event.detail.value,
      'divingCountError': verify.result === 1 ? '' : verify.message
    });
  },

  lastDiveTimeChange: function (event) {
    this.setData({'lastDiveTime': event.detail.value});
  },

  handleDivingNo: function (event) {
    this.setData({'divingNo': event.detail.value});
  },

  saveConfirm: function () {
    if (this.data.buttonType === 'primary') {
      wx.navigateBack();
    }
  }
})
