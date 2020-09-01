import React from 'react';
import { ComponentExt } from '@/utils/reactExt';
import { observer, inject } from 'mobx-react';
// 开发时使用
import { hot } from 'react-hot-loader';

interface IProps {
  globalStore?: IGlobalStore.GlobalStore;
}

@hot(module)
@inject('globalStore')
@observer
export default class Counter extends ComponentExt<IProps> {
  increase = (): void => {
    this.props.globalStore.increase(1);
  };

  render(): JSX.Element {
    const { num } = this.props.globalStore;
    return (
      <div>
        <p>{num}</p>
      </div>
    );
  }
}
