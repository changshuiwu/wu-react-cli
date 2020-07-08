import { action, observable } from 'mobx';

export class GlobalStore {
  @observable
  num = 0;

  @action
  increase = (num: number): void => {
    this.num += num;
  };

  @action
  decrease = (num: number): void => {
    this.num -= num;
  };
}

export default new GlobalStore();
