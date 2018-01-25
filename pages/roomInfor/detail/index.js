Page({
  'data': {
    'buttonType': 'default',

    'bedTypeList': ['单床', '大床', '双床'],
    'bedType': 0
  },

  onLoad: function (options) {
    this.setData({ 'bedTypeList': bedType.init().map(val => val.label) })
  },

  bedTypeChange: function (event) {
    this.setData({'bedType': event.detail.value});
  },

  saveConfirm: function () {
    if (this.data.buttonType === 'primary') {
      wx.navigateBack();
    }
  }
})

let bedType = {
  'data': [ { 'value': '单床', 'label': '单床' }, { 'value': '大床', 'label': '大床' }, { 'value': '双床', 'label': '双床' } ],

  'allBedTypeList': {
    // 默认床型
    '0': [ { 'value': '单床', 'label': '单床' }, { 'value': '大床', 'label': '大床' }, { 'value': '双床', 'label': '双床' } ],
    // 马达京
    '1': [
      {
        'value': '大床',
        'label': '大床'
      }, {
        'value': '双床',
        'label': '双床(仅园景房提供)'
      }, {
        'value': '蜜月大床',
        'label': '蜜月大床(需半年内结婚证申请/含免费花瓣铺床，烛光晚餐)'
      }, {
        'value': '大床+单床',
        'label': '大床+单床'
      }, {
        'value': '双床+单床',
        'label': '双床+单床(仅园景房和半独立房提供)'
      }
    ],
    // 马布岛 - 水屋
    '2': [
      {
        'value': '大床',
        'label': '大床'
      }, {
        'value': '双床',
        'label': '双床'
      }, {
        'value': '大床+单床',
        'label': '大床+单床(联排不可选)'
      }, {
        'value': '双床+单床',
        'label': '双床+单床(联排不可选)'
      }, {
        'value': '大床+床垫',
        'label': '大床+床垫(只限联排房间)'
      }, {
        'value': '双床+床垫',
        'label': '双床+床垫(只限联排房间)'
      }, {
        'value': '蜜月大床',
        'label': '蜜月大床(需半年内结婚证申请/含免费花瓣铺床)'
      }
    ],
    // 卡帕莱
    '3': [
      {
        'value': '单床',
        'label': '单床(仅一人入住可能选)'
      }, {
        'value': '大床',
        'label': '大床'
      }, {
        'value': '双床',
        'label': '双床'
      }, {
        'value': '大床+单床',
        'label': '大床+单床'
      }, {
        'value': '双床+单床',
        'label': '双床+单床'
      }, {
        'value': '蜜月布置大床',
        'label': '蜜月布置大床(需要支付160马币/仅限入住当天)'
      }
    ],
    // 平台
    '4': [
      {
        'value': '单床',
        'label': '单床(仅限四人间选)'
      }, {
        'value': '双床',
        'label': '双床(二人间可选)'
      }, {
        'value': '大床',
        'label': '大床(二人间可选)'
      }
    ],
    // 邦邦岛 - 龙珠
    '5': [
      {
        'value': '大床',
        'label': '大床'
      }, {
        'value': '双床',
        'label': '双床'
      }, {
        'value': '蜜月大床',
        'label': '蜜月大床(需半年内结婚证申请/含免费花瓣铺床)'
      }, {
        'value': '大床+单床',
        'label': '大床+单床'
      }, {
        'value': '双床+单床',
        'label': '双床+单床'
      }
    ],
    // 马布岛 - 木屋
    '6': [
      {
        'value': '大床',
        'label': '大床'
      }, {
        'value': '双床',
        'label': '双床'
      }, {
        'value': '大床+单床',
        'label': '大床+单床(联排不可选)'
      }, {
        'value': '双床+单床',
        'label': '双床+单床(联排不可选)'
      }, {
        'value': '大床+床垫',
        'label': '大床+床垫(只限联排房间)'
      }, {
        'value': '双床+床垫',
        'label': '双床+床垫(只限联排房间)'
      }, {
        'value': '蜜月大床',
        'label': '蜜月大床(需半年内结婚证申请/含免费花瓣铺床)'
      }
    ],
    // 邦邦岛 - 白珍珠
    '7': [
      {
        'value': '双大床',
        'label': '双大床'
      }, {
        'value': '蜜月大床',
        'label': '蜜月大床(需半年内结婚证申请/含免费花瓣铺床)'
      }
    ],
    // 邦邦岛 - 婆罗
    '8': [
      {
        'value': '大床',
        'label': '大床'
      }, {
        'value': '双床',
        'label': '双床'
      }, {
        'value': '大床+单床',
        'label': '大床+单床'
      }, {
        'value': '双床+单床',
        'label': '双床+单床'
      }, {
        'value': '大床+床垫',
        'label': '大床+床垫'
      }, {
        'value': '双床+床垫',
        'label': '双床+床垫'
      }, {
        'value': '蜜月大床',
        'label': '蜜月大床(需半年内结婚证申请/含免费花瓣铺床)'
      }
    ],
    // 兰卡央
    '9': [
      {
        'value': '大床',
        'label': '大床'
      }, {
        'value': '双床',
        'label': '双床'
      }, {
        'value': '大床+单床',
        'label': '大床+单床'
      }, {
        'value': '双床+单床',
        'label': '双床+单床'
      }, {
        'value': '大床+床垫',
        'label': '大床+床垫'
      }, {
        'value': '双床+床垫',
        'label': '双床+床垫'
      }, {
        'value': '蜜月大床',
        'label': '蜜月大床(需半年内结婚证申请/含免费花瓣铺床)'
      }
    ],
    // 巴拉望地区度假村
    '11': [{ 'value': '随机安排', 'label': '默认床型' }],
    '12': [{ 'value': '随机安排', 'label': '默认床型' }],
    '13': [{ 'value': '随机安排', 'label': '默认床型' }],
    '14': [{ 'value': '随机安排', 'label': '默认床型' }]
  },

  init: function (template) {
    if (template) {
      this.data = this.allBedTypeList[template] ? this.allBedTypeList[template] : this.allBedTypeList[0];
    }

    return this.data
  },

  toIndex: function (val) {
    return this.data.map(val => val.label).indexOf(val)
  },

  toValue: function (val) {
    return this.data[val].value
  }
}
