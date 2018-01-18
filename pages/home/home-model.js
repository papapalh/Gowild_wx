import { Base } from '../../utils/base.js';

class Home extends Base {
  constructor() {
    super();
  }

  /*banner图片信息*/
  getBannerData(callback) {
    var that = this;
    var param = {
      url: 'banner/get',
      sCallback: function (data) {
        callback && callback(data);
      }
    };
    this.request(param);
  }
  /*首页主题*/
  getThemeData(callback) {
    var param = {
      url: 'theme/all',
      sCallback: function (data) {
        callback && callback(data);
      }
    };
    this.request(param);
  }
  /*首页主题*/
  getProductData(callback) {
    var param = {
      url: 'product/recent',
      sCallback: function (data) {
        callback && callback(data);
      }
    };
    this.request(param);
  }
};

export { Home };
