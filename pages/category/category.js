import { Category } from 'category-model.js';
var category = new Category();  //实例化 home 的推荐页面
Page({
  data: {
    transClassArr: ['tanslate0', 'tanslate1', 'tanslate2', 'tanslate3', 'tanslate4', 'tanslate5'],
    currentMenuIndex: 0,
    loadingHidden: false,
  },
  onLoad: function () {
    this._loadData();
  },

  /*加载所有数据*/
  _loadData: function (callback) {
    var that = this;
    category.getCategoryType((categoryData) => {

      that.setData({
        categoryTypeArr: categoryData,
        loadingHidden: true
      });
    });
  },

  /*切换分类*/
  changeCategory: function (event) {
    var index = category.getDataSet(event, 'index'),
      id = category.getDataSet(event, 'id')//获取data-set
    this.setData({
      currentMenuIndex: index
    });
  },

  /*跳转到商品详情*/
  onProductsItemTap: function (event) {
    var id = category.getDataSet(event, 'id');
    wx.navigateTo({
      url: '../product/product?id=' + id
    })
  },

  // /*下拉刷新页面*/
  // onPullDownRefresh: function () {
  //   this._loadData(() => {
  //     wx.stopPullDownRefresh()
  //   });
  // },

  // //分享效果
  // onShareAppMessage: function () {
  //   return {
  //     title: '零食商贩 Pretty Vendor',
  //     path: 'pages/category/category'
  //   }
  // }

})