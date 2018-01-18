import { Base } from '../../utils/base.js';

class List extends Base {
  constructor() {
    super();
  }

  /*商品*/
  getListData(id, callback) {
    var param = {
      url: 'theme/get/' + id,
      sCallback: function (data) {
        callback && callback(data);
      }
    };
    this.request(param);
  }
};

export { List };