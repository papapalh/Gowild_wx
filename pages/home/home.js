import { HomeData } from '../../page-data/home-data';
import { Base } from '../../utils/base.js';
var base = new Base();

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

    //Banner 信息
    this.setData({
      bannerArr: HomeData.BannerData
    });

    // 获取栏目信息
    this.setData({
      themeArr: HomeData.ThemeData,
    });

    //商品信息
    this.setData({
      productArr: HomeData.ProductData,
    });
  },

  // 跳转商品详情
  onProductsItemTap: function (event) {
    var id = base.getDataSet(event, 'id');
    wx.navigateTo({
      url: '../product/product?id=' + id
    })
  },
  // /*跳转到主题列表*/
  onThemesItemTap: function (event) {
    var id = base.getDataSet(event, 'id');
    var name = base.getDataSet(event, 'name');
    wx.navigateTo({
      url: '../list/list?id=' + id + '&name=' + name
    })
  },
})