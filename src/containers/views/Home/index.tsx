import React from 'react';
import { ComponentExt } from '@/utils/reactExt';
import { Button } from 'antd';

export default class Home extends ComponentExt {
  handClick = (): void => {
    import(/* webpackChunkName: 'test' */ '@/components/Test/index').then(() => {
      console.log(12);
    })
  };

  render(): JSX.Element {
    return (
      <div>
        <Button onClick={this.handClick}>加载</Button>
      </div>
    );
  }
}
