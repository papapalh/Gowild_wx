import { Theme } from 'theme-model.js';
var theme = new Theme(); //实例化  主题列表对象
// pages/themes/themes.js
Page({
  data: {
    loadingHidden: false
  },
  /**
   * 页面的初始数据
   */
  data: {
  
  },

  // 加载所有数据
  onLoad: function (options) {
    var that = this;
    /*获取所有专题信息*/
    theme.getThemeData((data) => {
      that.setData({
        themeInfo: data,
        loadingHidden: true
      });
    });
  },

  // 跳转到主题详情
  onThemeItemTap: function (event) {
    var id = theme.getDataSet(event, 'id');
    var name = theme.getDataSet(event, 'name');

    console.log(id);
    wx.navigateTo({
      url: '../list/list?id=' + id + '&name=' + name
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})