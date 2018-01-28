import convertDate from './utils/convertDate';

//app.js
App({
  // 远程服务器的数据
  'databaseData': JSON.parse(
    // 此处是假数据的模拟
    '{"infoId":131,"isRead":"Y","readTime":null,"template":3,"orderSn":"123AC","orderSrc":"TB","orderName":"水上屋","orderDesc":"","roomNum":1,"adultNum":2,"childNum":0,"peopleNum":2,"checkIn":1517328000000,"checkOut":1517414400000,"productAmount":1112,"orderAmount":612,"discount":500,"payAmount":612,"notPayAmount":0,"calMethod":"11","present":"1,2","signName":"阿斯顿","payAccount":"","mobile":"18503025768","email":"gewurong@divingtime.asia","outboundNum":"","landTime":null,"landDate":null,"inboundNum":"","takeoffTime":null,"takeoffDate":null,"inHarbourNum":"","hLandTime":1520000,"hLandDate":1514563200000,"outHarbourNum":"","hTakeoffTime":12033000,"hTakeoffDate":1514822400000,"flightNote":"","insuranceBegin":1518710400000,"insuranceEnd":1518796800000,"payStatus":1,"transfersInfo":"十多个是否","reservationCode":"","pinyinName":"ASiDun","resortShuttle":null,"remark":null,"kidsAge":"","roomInfoList":[{"roomId":134,"iceName":"曾杰","iceRelation":"兄弟姐妹","iceMobile":"15976713287","iceEmail":"","bedType":"单床","infoId":131,"customerInfoList":[{"customerId":170,"passportNo":"123123","nationality":"CHINA","chineseName":"曾杰1111","pinyinName":"ZengJie1111","gender":2,"birthday":"1981-01-01","mobile":"15976713287","email":"2498537734@qq.com","isDive":"Y","divingRank":2,"divingNo":"sfs","divingCount":12,"lastDiveTime":1509379200000,"anamnesis":null,"roomId":134,"age":37,"isKid":"N"},{"customerId":175,"passportNo":"123","nationality":"TAIWAN CHINA","chineseName":"控件","pinyinName":"KongJian","gender":1,"birthday":"1972-12-13","mobile":"12312","email":"","isDive":"N","divingRank":null,"divingNo":"","divingCount":null,"lastDiveTime":null,"anamnesis":null,"roomId":134,"age":46,"isKid":"N"}]}],"attachmentList":[{"attachId":21,"attachType":"PT2","attachThumb":"/source/image/attach/thum/thum_b0e294da-dfd0-4405-b4e7-6933f5da39b6.jpg","attachPath":"/source/image/attach/b0e294da-dfd0-4405-b4e7-6933f5da39b6.jpg","infoId":131},{"attachId":22,"attachType":"PT3","attachThumb":"/source/image/attach/thum/thum_263e39ff-e5ae-4d3a-bbfb-23bb7d68ff4c.jpg","attachPath":"/source/image/attach/263e39ff-e5ae-4d3a-bbfb-23bb7d68ff4c.jpg","infoId":131},{"attachId":23,"attachType":"PT4","attachThumb":"/source/image/attach/thum/thum_9499dcff-d542-4f4e-8a3e-c87b5b4270a5.jpg","attachPath":"/source/image/attach/9499dcff-d542-4f4e-8a3e-c87b5b4270a5.jpg","infoId":131},{"attachId":24,"attachType":"MC","attachThumb":"/source/image/attach/thum/thum_12b166f4-5bd8-4e09-a0b0-d11ddff77124.jpg","attachPath":"/source/image/attach/12b166f4-5bd8-4e09-a0b0-d11ddff77124.jpg","infoId":131},{"attachId":26,"attachType":"MC","attachThumb":"/source/image/attach/thum/thum_25b7dcb0-ff00-46c0-ac3e-0e427d1b0e89.png","attachPath":"/source/image/attach/25b7dcb0-ff00-46c0-ac3e-0e427d1b0e89.png","infoId":131}]}'
  ),

  // 提交的数据
  'submitData': {
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
  'state': false && { // false 表示未初始化
    'orderSn': null, // 辨识 id

    'template': null, // 模板

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
        'email': null,
        'mobile': null,
        'isDive': null,
        'divingCount': null,
        'divingNo': null,
        'divingRank': null,
        'lastDiveTime': null,
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

  // 由于 初始化数据 是网络请求，可能会在 Page.onLoad 之后才返回，所以此处加入 callback 以防止这种情况。
  'stateReadyCallback': false,

  // 请求 远程服务器的数据
  getData: function () {
    const _this = this;

    return new Promise((resolve, reject) => {

      resolve(_this.databaseData); // 假装请求完成
    });
  },

  // 远程服务器的数据 转化 本地的数据
  resolveDataToState: function (val) {
    let state = {
      'orderSn': val.orderSn,

      'template': val.template,

      'isFirstSubmit': false, // 是否 第一次提交
    
      // terms
      'isReadTerms': false, // 是否同意 条款声明
    
      // reserverInfor 预订人信息
      'isReserverInforcomplete': false, // 是否 完成 预订人信息
      'signName': val.signName || null,
      'pinyinName': val.pinyinName || null,
      'payAccount': val.payAccount || null,
      'mobile': val.mobile || null,
      'email': val.email || null,
    
      // roomInfor 房间信息
      'isRoomInforcomplete': false, // 是否 完成 房间信息

      'iceName': val.roomInfoList.length ? val.roomInfoList[0].iceName : null,
      'iceRelation': val.roomInfoList.length ? val.roomInfoList[0].iceRelation : null,
      'iceMobile': val.roomInfoList.length ? val.roomInfoList[0].iceMobile : null,
      'iceEmail': val.roomInfoList.length ? val.roomInfoList[0].iceEmail : null,
    
      'selectRoomNum': 0,
      'selectCustomerNum': 0,
    
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
          'lastDiveTime': customer.lastDiveTime,
          'anamnesis': customer.anamnesis,
        })) : null,
      })),
      
      // flightInfor 航班信息
      'outboundNum': val.outboundNum ? val.outboundNum : null, // 国际航班号（入境）
      'landDate': val.landDate ? convertDate.timestampToFormat(val.landDate) : null,
      'landTime': val.landTime ? convertDate.timestampToHHmm(val.landTime) : null,
    
      'inHarbourNum': val.inHarbourNum ? val.inHarbourNum : null, // 到港航班号
      'hLandDate': val.hLandDate ? convertDate.timestampToFormat(val.hLandDate) : null,
      'hLandTime': val.hLandTime ? convertDate.timestampToHHmm(val.hLandTime) : null,
      
      'outHarbourNum': val.outHarbourNum ? val.outHarbourNum : null, // 离港航班号
      'hTakeoffDate': val.hTakeoffDate ? convertDate.timestampToFormat(val.hTakeoffDate) : null,
      'hTakeoffTime': val.hTakeoffTime ? convertDate.timestampToHHmm(val.hTakeoffTime) : null,
      
      'inboundNum': val.inboundNum ? val.inboundNum : null, // 国际航班号（出境）
      'takeoffDate': val.takeoffDate ? convertDate.timestampToFormat(val.takeoffDate) : null,
      'takeoffTime': val.takeoffTime ? convertDate.timestampToHHmm(val.takeoffTime) : null,
    };

    return state;
  },

  // 这边逻辑暂且可不需过于认真
  init: function (val) {
    // 初始化 远程服务器数据
    this.databaseData = val;

    let storageState = wx.getStorageSync('storageState'); // 获取本地数据

    if (storageState && val.orderSn === storageState.orderSn) {
      this.state = storageState.orderSn;
    } else {
      this.state = this.resolveDataToState(val);
    }

    // 执行回调函数 表示初始化已完成
    this.stateReadyCallback ? this.stateReadyCallback() : null;
  },

  onLaunch: function () {
    const _this = this;
    
    let storageData = wx.getStorageSync('storageData'); // 获取本地数据

    if (storageData) { // 如果有本地数据, 表示表 信息收集未完成!

      this.init(storageData);
    } else { // 无本地数据, 则从远端加载数据进来
      this.getData()
      .then(
        val => _this.init(val), 
        error => wx.showModal({
          'title': '数据加载失败',
          'content': `加载远程服务端数据失败! 原因: ${error}`,
          'showCancel': false
        })
      );
    }
  },
})
