import { Base } from '../../utils/base';
var base = new Base();
import { CategoryData } from '../../database/category-data'
Page({
  data: {
    transClassArr: ['tanslate0', 'tanslate1', 'tanslate2', 'tanslate3', 'tanslate4', 'tanslate5'],
    currentMenuIndex: 0,
  },
  onLoad: function () {
    this._loadData();
  },

  /*加载所有数据*/
  _loadData: function (callback) {
    //获取所有分类
    this.setData({
      categoryTypeArr: CategoryData.CategoryData,
    });
  },

  /*切换分类*/
  changeCategory: function (event) {
    var index = base.getDataSet(event, 'index'),
      id = base.getDataSet(event, 'id')//获取data-set
    this.setData({
      currentMenuIndex: index
    });
  },

  /*跳转到商品详情*/
  onProductsItemTap: function (event) {
    var id = base.getDataSet(event, 'id');
    wx.navigateTo({
      url: '../product/product?id=' + id
    })
  },

  //分享效果
  onShareAppMessage: function () {
    return {
      title: '静静的店铺',
      path: 'pages/category/category'
    }
  },
})