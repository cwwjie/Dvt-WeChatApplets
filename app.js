import convertDate from './utils/convertDate';
import config from './config/index';

//app.js
App({
  // 淘宝选择的数据
  'taobaoItem': {
    //   'adultNum': 2,
    //   'belongId': 33,
    //   'calMethod': "123412",
    //   'checkIn': 1514649600000,
    //   'checkOut': 1514736000000,
    //   'childNum': 0,
    //   'confirmStatus': null,
    //   'createBy': 33,
    //   'createTime': 1512926229000,
    //   'customCode': "AAADD",
    //   'discount': 100,
    //   'email': "",
    //   'infoId': null,
    //   'insuranceBegin': null,
    //   'insuranceEnd': null,
    //   'isBX': "N",
    //   'isComplete': "N",
    //   'isConfirmed': "Y",
    //   'isLocked': "Y",
    //   'isValid': "Y",
    //   'kidsAge': "",
    //   'linkId': 192,
    //   'mobile': "",
    //   'notPayAmount': 9800,
    //   'operationStatus': 1,
    //   'orderAmount': 9900,
    //   'orderDesc': "123123",
    //   'orderName': "园景房",
    //   'orderSn': "AAADD",
    //   'orderSrc': "TB",
    //   'payAmount': 100,
    //   'payStatus': 2,
    //   'peopleNum': 2,
    //   'pinyinName': "LianJieShu",
    //   'present': "",
    //   'productAmount': 10000,
    //   'remark': null,
    //   'reservationCode': "15544554",
    //   'roomNum': 1,
    //   'serialNumber': null,
    //   'signName': "连接数",
    //   'submitTime': null,
    //   'template': 1,
    //   'transfersInfo': "",
    //   'uniqueKey': "a98afa21-3808-43d4-b2e3-522c8e4b388f",
    //   'updateBy': 29,
    //   'updateTime': 1515615162000,
    //   'userId': 106,
  },

  // 远程服务器的数据
  'getGatherInfo': {
    // adultNum: 1,
    // attachmentList: [{
    //   attachId: 14,
    //   attachPath: "/source/image/attach/f7f2bf05-63be-41aa-8b4c-9d1f4e791229.png",
    //   attachThumb: "/source/image/attach/thum/thum_f7f2bf05-63be-41aa-8b4c-9d1f4e791229.png",
    //   attachType: "PT1",
    //   infoId: null,
    // }],
    // calMethod: "6000-500=5500",
    // checkIn: 1508428800000,
    // checkOut: 1508515200000,
    // childNum: 0,
    // discount: 500,
    // email: "123456789@qq.com",
    // flightNote: "",
    // hLandDate: null,
    // hLandTime: null,
    // hTakeoffDate: null,
    // hTakeoffTime: null,
    // inHarbourNum: null,
    // inboundNum: null,
    // infoId: 122,
    // insuranceBegin: null,
    // insuranceEnd: null,
    // isRead: "Y",
    // kidsAge: null,
    // landDate: null,
    // landTime: null,
    // mobile: "15911111111",
    // notPayAmount: 5000,
    // orderAmount: 5500,
    // orderDesc: "1间半独立沙滩木屋",
    // orderName: "半独立沙滩木屋",
    // orderSn: "2017082901",
    // orderSrc: "TB",
    // outHarbourNum: null,
    // outboundNum: null,
    // payAccount: null,
    // payAmount: 500,
    // payStatus: 2,
    // peopleNum: 1,
    // pinyinName: "Zeng Jie ",
    // present: "",
    // productAmount: 6000,
    // readTime: 1505324846000,
    // remark: null,
    // reservationCode: null,
    // resortShuttle: null,
    // roomNum: 1,
    // signName: "某某",
    // takeoffDate: null,
    // takeoffTime: null,
    // template: 1,
    // transfersInfo: "",
    // roomInfoList: [
    //   {
    //     infoId: 122,
    //     roomId: 123,
    //     bedType: "蜜月大床",
    //     iceEmail: null,
    //     iceMobile: null,
    //     iceName: null,
    //     iceRelation: null,
    //     customerInfoList: [
    //       {
    //         roomId: 123,
    //         customerId: 145,
    //         isKid: "N",

    //         passportNo: null,
    //         nationality: "MACAU CHINA",
    //         chineseName: "某某",
    //         pinyinName: "Zeng Jie",
    //         birthday: "1972-01-15",
    //         age: 45,
    //         gender: 1,
    //         email: "54454@qq.com",
    //         mobile: "15976713287",
    //         isDive: "N",
    //         divingCount: null,
    //         divingNo: null,
    //         divingRank: null,
    //         lastDiveTime: null,
    //         anamnesis: "无",
    //       }
    //     ]
    //   }
    // ]
  },

  // 本地的数据
  'state': {
    'isFirstSubmit': false, // 是否 第一次提交

    // terms
    'isReadTerms': false, // 是否同意 条款声明

    // reserverInfor 预订人信息
    'isReserverInforcomplete': false, // 是否 完成 预订人信息
    'signName': null,
    'pinyinName': null,
    'payAccount': null,
    'mobile': null,
    'email': null,

    // roomInfor 房间信息
    'isRoomInforcomplete': false, // 是否 完成 房间信息
    'iceName': null,
    'iceRelation': null,
    'iceMobile': null,
    'iceEmail': null,

    'selectRoomNum': null,
    'selectCustomerNum': null,

    'roomInfoList': [{
      'bedType': null,
      'customerInfoList': [{
        'passportNo': null,
        'nationality': null,
        'chineseName': null,
        'pinyinName': null,
        'birthday': null,
        'gender': null, // 1男 2女
        // 'email': null,
        'mobile': null,
        'isDive': null,
        'divingCount': null, // 100 以下 Number
        'divingNo': null,
        'divingRank': null, // 1 2
        'lastDiveTime': null, // 时间戳 Number
        'anamnesis': null,
      }]
    }],

    // flightInfor 航班信息
    'outboundNum': null, // 国际航班号（入境）
    'landDate': null, // 2018-01-02
    'landTime': null, // 03:00

    'inHarbourNum': null, // 到港航班号
    'hLandDate': null,
    'hLandTime': null,
    
    'outHarbourNum': null, // 离港航班号
    'hTakeoffDate': null,
    'hTakeoffTime': null,
    
    'inboundNum': null, // 国际航班号（出境）
    'takeoffDate': null,
    'takeoffTime': null,
  },

  'nationalityList': [{'value': 'CHINA', 'label': '中国 CHINA'}],

  getGatherInfoToState: function (val) {
    let state;
    if (val === false) {
      state = {
        'isFirstSubmit': true, // 是否 第一次提交

        // terms
        'isReadTerms': false, // 是否同意 条款声明

        // reserverInfor 预订人信息
        'isReserverInforcomplete': false, // 是否 完成 预订人信息
        'signName': null,
        'pinyinName': null,
        'payAccount': null,
        'mobile': null,
        'email': null,

        // roomInfor 房间信息
        'isRoomInforcomplete': false, // 是否 完成 房间信息
        'iceName': null,
        'iceRelation': null,
        'iceMobile': null,
        'iceEmail': null,
    
        'selectRoomNum': null,
        'selectCustomerNum': null,
    
        // flightInfor 航班信息
        'outboundNum': null, // 国际航班号（入境）
        'landDate': null, // 2018-01-02
        'landTime': null, // 03:00
    
        'inHarbourNum': null, // 到港航班号
        'hLandDate': null,
        'hLandTime': null,
        
        'outHarbourNum': null, // 离港航班号
        'hTakeoffDate': null,
        'hTakeoffTime': null,
        
        'inboundNum': null, // 国际航班号（出境）
        'takeoffDate': null,
        'takeoffTime': null,
      }

      let roomInfoList = [];
      for (let i = 0; i < this.taobaoItem.roomNum; i++) {
        roomInfoList.push({
          'bedType': null,
          'customerInfoList': []
        });
      }

      state.roomInfoList = roomInfoList;
      this.state = state;
    } else {
      state = {
        'isFirstSubmit': false,
        'isReadTerms': true,

        'isReserverInforcomplete': true,
        'signName': val.signName,
        'pinyinName': val.pinyinName,
        'payAccount': val.payAccount,
        'mobile': val.mobile,
        'email': val.email,

        'isRoomInforcomplete': true,
        'iceName': val.roomInfoList[0].iceName,
        'iceRelation': val.roomInfoList[0].iceRelation,
        'iceMobile': val.roomInfoList[0].iceMobile,
        'iceEmail': val.roomInfoList[0].iceEmail,

        'selectRoomNum': null,
        'selectCustomerNum': null,

        'roomInfoList': val.roomInfoList.map(room => ({
          'bedType': room.bedType ? room.bedType : null,
          'customerInfoList': room.customerInfoList ? room.customerInfoList.map(customer => ({
            'passportNo': customer.passportNo,
            'nationality': customer.nationality,
            'chineseName': customer.chineseName,
            'pinyinName': customer.pinyinName,
            'birthday': customer.birthday,
            'gender': customer.gender, // 1男 2女
            'email': customer.email,
            'mobile': customer.mobile,
            'isDive': customer.isDive,
            'divingCount': customer.divingCount,
            'divingNo': customer.divingNo,
            'divingRank': customer.divingRank,
            'lastDiveTime': customer.lastDiveTime ? convertDate.timestampToFormat(customer.lastDiveTime) : '',
            'anamnesis': customer.anamnesis,
          })) : null,
        })),

        'outboundNum': val.outboundNum,
        'landDate': convertDate.timestampToFormat(val.landDate),
        'landTime': convertDate.timestampToHHmm(val.landTime),
        'inHarbourNum': val.inHarbourNum,
        'hLandDate': convertDate.timestampToFormat(val.hLandDate),
        'hLandTime': convertDate.timestampToHHmm(val.hLandTime),
        'outHarbourNum': val.outHarbourNum,
        'hTakeoffDate': convertDate.timestampToFormat(val.hTakeoffDate),
        'hTakeoffTime': convertDate.timestampToHHmm(val.hTakeoffTime),
        'inboundNum': val.inboundNum,
        'takeoffDate': convertDate.timestampToFormat(val.takeoffDate),
        'takeoffTime': convertDate.timestampToHHmm(val.takeoffTime),
      }
    }
    this.state = state;
    wx.setStorageSync('state', state);
  },

  initNationality: function() {
    const _this = this;
    wx.request({
      'url': `${config.version}/system/codetype/nationality/getWith.do`,
      'method': 'GET',
      'header': { 'content-type': 'application/json' },
      'dataType': 'json',
      success: function(res) {
        let json = res.data;

        if (json.result === '0') {
          _this.nationalityList = json.data.codeList.map(function(val) {
            return {
              'value': val.code,
              'label': val.codeName
            }
          });
        } else {
          wx.showModal({
            title: '国籍初始化加载失败',
            content: `成功向服务器发起国籍请求, 但是数据有误原因: ${json.message}`
          });
        }
      },
      fail: function (error) {
        wx.showModal({
          title: '国籍初始化加载失败',
          content: `加载国籍发生错误, 原因: ${error}`
        });
      }
    });
  }
})
