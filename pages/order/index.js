import config from './../../config/index';
import convertDate from './../../utils/convertDate';

const app = getApp();

Page({
  'data': {
    'orderList': [
      // {
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
      // }
    ]
  },

  getOrderList: function (pageNum, pageSize) {
    const _this = this;

    wx.showLoading({
      'title': '正在加载',
      'mask': true
    });

    wx.request({
      'url': `${config.version}/gather/link/${pageNum ? pageNum : 1}/${pageSize ? pageSize : 0}/listOrder.do`,
      'method': 'GET',
      'header': { 
        'content-type': 'application/json', 
        'token': wx.getStorageSync('token'), 
        'digest': wx.getStorageSync('digest') 
      },
      'dataType': 'json',
      success: function(res) {
        let json = res.data;
        wx.hideLoading();
        if (json.result === '0') {
          _this.setData({
            'orderList': json.data.list
          });
        } else {
          wx.showModal({
            title: '请求订单出错',
            content: `向服务器发起请求订单失败, 原因: ${json.message}`
          });
        }
      },
      fail: function (error) {
        wx.hideLoading();
        wx.showModal({
          title: '加载失败',
          content: `加载数据发生错误, 原因: ${error}`
        });
      }
    });
  },

  onLoad: function () {
    this.getOrderList();
  },

  operate: function (event) {
    let taobaoItem = this.data.orderList[event.currentTarget.id];

    wx.showLoading({
      'title': '正在加载',
      'mask': true
    });

    wx.request({
      'url': `${config.version}/gather/link/${taobaoItem.uniqueKey}/getGatherInfo.do`,
      'method': 'GET',
      'header': { 
        'content-type': 'application/json',
        'token': wx.getStorageSync('token'), 
        'digest': wx.getStorageSync('digest')
      },
      'dataType': 'json',
      success: function(res) {
        let json = res.data;
        if (json.result === '0') {
          app.taobaoItem = taobaoItem;
          app.getGatherInfo = json.data;

          // 表示第一次填写
          if (!json.data) {
            app.getGatherInfoToState(false);
          } else {
            app.getGatherInfoToState(json.data);
          }
          
          wx.redirectTo({
            url: './../infor/home/index'
          });
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
          title: '加载失败',
          content: `加载用户信息发生错误, 原因: ${error}`
        });
      }
    });
  }
})
