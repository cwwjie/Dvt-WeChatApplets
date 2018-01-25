import request from './../../../utils/request';
import convertDate from './../../../utils/convertDate';
import ChineseHelper from './../../../utils/ChineseHelper';

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

    'lastDiveTime': '无', // 上次潜水时间

    'divingNo': '', // 潜水证号
    
    'anamnesis': '无', // 以往重大病史
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

  handlePassportNo: function (event) {
    this.setData({'passportNo': event.detail.value});
  },

  nationalityChange: function (event) {
    this.setData({'nationality': event.detail.value});
  },

  handleChineseName: function (event) {
    this.setData({'chineseName': event.detail.value});
  },

  handlePinyinName: function (event) {
    this.setData({'pinyinName': event.detail.value});
  },

  genderChange: function (event) {
    this.setData({'gender': event.detail.value});
  },

  birthdayChange: function (event) {
    this.setData({'birthday': event.detail.value});
  },

  handleMobile: function (event) {
    this.setData({'mobile': event.detail.value});
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

  handleDivingCount: function (event) {
    this.setData({'divingCount': event.detail.value});
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
