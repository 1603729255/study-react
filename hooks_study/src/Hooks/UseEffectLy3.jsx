import React, { Component, useEffect } from 'react'

export default class UseEffectLy3 extends Component {
  state = { isCreated: true }
  render() {
    return (
      <div>
        <button
          onClick={() => {
            this.setState({
              isCreated: !this.state.isCreated
            })
          }}>
          click
        </button>
        {this.state.isCreated && <Child />}
      </div>
    )
  }
}

function Child() {
  // useLayoutEffect使用时机不同，如果操作dom可以用，useEffect完成页面更新时调用。
  // 理解为create和mounted

  useEffect(() => {
    window.onresize = () => {
      console.log('resize')
    }
    // let timer=setInterval(() => {
    //   console.log(111)
    // }, 1000)
    // 通过闭包函数嵌套来模拟销毁组件的生命周期
    return () => {
      window.onresize=null
      // clearInterval(timer)
    }
  }, [])

  return <div>UseEffectLy3</div>
}
