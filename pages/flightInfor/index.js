Page({
  'data': {
    'template': 3,

    'checkIn':'正在加载',
    'checkOut':'正在加载',
    'cycleLength':'正在加载',
  },

  handlebyId: function(event) {
    let temObj = {};

    temObj[event.currentTarget.id] = event.detail.value;

    this.setData(temObj);
  },

  jumpBack: function () {
    wx.navigateBack();
  },

  jumpToNext: function () {
    
  }
})
