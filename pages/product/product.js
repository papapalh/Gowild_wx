import { Product } from 'product-model.js';
var WxParse = require('../tpls/wxParse/wxParse.js');

var product = new Product();  //实例化 商品详情 对象
Page({
  data: {
    loadingHidden: false,
    hiddenSmallImg: true,
    countsArray: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    productCounts: 1,
    currentTabsIndex: 0,
    cartTotalCounts: 0,
  },
  onLoad: function (option) {
    var id = option.id;
    this.data.id = id;
    this._loadData();
  },

  /*加载所有数据*/
  _loadData: function (callback) {
    var that = this;
    product.getDetailInfo(this.data.id, (data) => {
      // 绑定商品详情数据
      WxParse.wxParse('details', 'html', data.details, that, 5);
      // 绑定产品参数数据
      WxParse.wxParse('params', 'html', data.params, that, 5);      
      // 绑定售后保障数据
      WxParse.wxParse('custormer', 'html', data.custormer, that, 5);      
      that.setData({
        product: data,
      });
      callback && callback();
    });
  },
  //切换详情面板
  onTabsItemTap: function (event) {
    var index = product.getDataSet(event, 'index');
    this.setData({
      currentTabsIndex: index
    });
  },



})


