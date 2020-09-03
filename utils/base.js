import { Config } from 'config.js';

class Base {
  constructor() {
  }

  /*获得元素上的绑定的值*/
  getDataSet(event, key) {
    return event.currentTarget.dataset[key];
  };
}

export { Base };