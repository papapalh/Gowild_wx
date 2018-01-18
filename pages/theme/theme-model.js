import { Base } from '../../utils/base.js';

class Theme extends Base {
  constructor() {
    super();
  }

  // 获取全部专题信息
  getThemeData(callback) {
    var param = {
      url: 'theme/all',
      sCallback: function (data) {
        callback && callback(data);
      }
    };
    this.request(param);
  }
};

export { Theme };