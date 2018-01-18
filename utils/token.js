// 引入Config配置文件
import { Config } from 'config.js';
class Token {
  // 定义token路由
  constructor() {
    this.verifyUrl = Config.restUrl + 'token/verify';
    this.tokenUrl = Config.restUrl + 'token/user';
  }
  verify() {
    // 检查本地缓存是否存在
    var token = wx.getStorageSync('token');
    if (!token) {
      this.getTokenFromServer();
    }
    else {
      this._veirfyFromServer(token);
    }
  }

  // 获取对应token-code换取登录态
  getTokenFromServer() {
    var that = this;
    wx.login({
      success: function (res) {
        wx.request({
          url: that.tokenUrl,
          method: 'POST',
          data: {
            code: JSON.stringify(res.code)
          },
          success: function (res) {
            wx.setStorageSync('token', res.data);
            // callBack && callBack(res.data.token);
          }
        })
      }
    })
  }

  // 检查Token在服务端是否存在
  _veirfyFromServer(token) {
    var that = this;
    wx.request({
      url: that.verifyUrl,
      method: 'POST',
      data: {
        token: token
      },
      success: function (res) {
        var valid = res.data.openid;
        if (!valid) {
          that.getTokenFromServer();
        }
      }
    })
  }
}

export { Token };