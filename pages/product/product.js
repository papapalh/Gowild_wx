import { Product } from 'product-model.js';
var WxParse = require('../tpls/wxParse/wxParse.js');
import { ProductData } from '../../database/product-data';

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
    // 绑定商品详情数据
    WxParse.wxParse('details', 'html', ProductData.ProductData[this.data.id].details, this, 5);
    // 绑定产品参数数据
    WxParse.wxParse('params', 'html', ProductData.ProductData[this.data.id].params, this, 5);      
    // 绑定售后保障数据
    WxParse.wxParse('custormer', 'html', ProductData.ProductData[this.data.id].custormer, this, 5);      
    this.setData({
      product: ProductData.ProductData[this.data.id],
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
