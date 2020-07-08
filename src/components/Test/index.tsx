import React from 'react'
import { Button } from 'antd'
import { ComponentExt } from '@/utils/reactExt'

@log
class Test extends ComponentExt {
    showMsg = ():void => {
      this.$message.success('这是一个通知')
    }
    render():JSX.Element {
      return (
        <Button onClick = {this.showMsg}>Submit</Button>
      )
    }
}

function log(target: any) {
  console.log(new target())
}

export default Test
