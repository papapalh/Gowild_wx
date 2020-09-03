import { Base } from '../../utils/base.js';

class List extends Base {
  constructor() {
    super();
  }

  /*商品*/
  getListData(id, callback) {
    var data = ["https://img2020.cnblogs.com/blog/1071918/202006/1071918-20200601211711758-931714898.png"]
    callback(data)
  }
};

export { List };