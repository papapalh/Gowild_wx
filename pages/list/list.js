import { Base } from '../../utils/base';
var base = new Base();
import { ThemeData } from '../../database/theme-data';
Page({
  data: {
    loadingHidden: false
  },
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
    this.setData({
      themeInfo: ThemeData.ThemeData[this.data.id],
      loadingHidden: true
    });
  },

  /*跳转到商品详情*/
  onProductsItemTap: function (event) {
    var id = base.getDataSet(event, 'id');
    wx.navigateTo({
      url: '../product/product?id=' + id
    })
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
      title: '静静小姐的店铺',
      path: 'pages/theme/theme?id=' + this.data.id
    }
  }

})