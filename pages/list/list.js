import { List } from 'list-model.js';
var list = new List(); //实例化  主题列表对象
Page({
  data: {
    loadingHidden: false
  },
  // onReady: function () {
  //   wx.setNavigationBarTitle({
  //     title: this.data.titleName
  //   });
  // },
  onLoad: function (option) {
    this.data.titleName = option.name;
    this.data.id = option.id;
    console.log(this.data.id);
    wx.setNavigationBarTitle({
      title: option.name
    });
    this._loadData();

  },

  /*加载所有数据*/
  _loadData: function (callback) {
    var that = this;
    // 获取该专题信息
    list.getListData(this.data.id,(data) => {
      // console.log(id);
      that.setData({
        themeInfo: data,
        loadingHidden: true
      });
    });
  },

  /*跳转到商品详情*/
  onProductsItemTap: function (event) {
  },

  /*下拉刷新页面*/
  onPullDownRefresh: function () {
    this._loadData(() => {
      wx.stopPullDownRefresh()
    });
  },

  //分享效果
  onShareAppMessage: function () {
    return {
      title: '静静小姐的店铺 Pretty Vendor',
      path: 'pages/theme/theme?id=' + this.data.id
    }
  }

})