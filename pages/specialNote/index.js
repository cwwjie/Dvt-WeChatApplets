Page({
  'data': {
    'template': null,
  },

  showViewById: function (event) {
    let temObj = {};
    let isShow = this.data[event.currentTarget.id] ? !this.data[event.currentTarget.id] : true;

    temObj[event.currentTarget.id] = isShow;

    this.setData(temObj);
  },

  jumpBack: function () {
    wx.navigateBack();
  },

  jumpToNext: function () {
    
  }
})
