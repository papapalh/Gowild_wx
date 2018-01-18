import { Home } from 'home-model.js';
var home = new Home(); //实例化 首页 对象
// pages/home/home.js
Page({
  data: {
    loadingHidden: false
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function () {
    this._loadData();
  },

  _loadData: function (callback) {
    var that = this;
    // 获得bannar信息
    home.getBannerData((data) => {
      console.log(data);
      that.setData({
        bannerArr: data,
      });
    });
    // 获取栏目信息
    home.getThemeData((data) => {
      that.setData({
        themeArr: data,
      });
    });
    // 获取商品热门信息
    home.getProductData((data) => {
      that.setData({
        productArr: data,
      });
    });
  },

  // 跳转商品详情
  onProductsItemTap: function (event) {
    var id = home.getDataSet(event, 'id');
    wx.navigateTo({
      url: '../product/product?id=' + id
    })
  },
  /*跳转到主题列表*/
  onThemesItemTap: function (event) {
    var id = home.getDataSet(event, 'id');
    var name = home.getDataSet(event, 'name');
    wx.navigateTo({
      url: '../list/list?id=' + id + '&name=' + name
    })
  },


})