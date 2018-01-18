import { Base } from 'base.js';
import { Config } from 'config.js';

class Address extends Base {
  constructor() {
    super();
  }

  /*获得我自己的收货地址*/
  getAddress(callback) {
    var that = this;
    var param = {
      url: 'address',
      sCallback: function (res) {
        if (res) {
          // res.totalDetail = that.setAddressInfo(res);
          callback && callback(res);
        }
      }
    };
    this.request(param);
  }

  /*更新保存地址*/
  submitAddress(data, callback) {
    // data = this._setUpAddress(data);
    var param = {
      url: 'address/info',
      type: 'post',
      data: data,
      sCallback: function (res) {
        console.log(res);
        callback && callback(true, res);
      }, eCallback(res) {
        callback && callback(false, res);
      }
    };
    this.request(param);
  }
}

export { Address }