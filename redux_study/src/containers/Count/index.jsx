import React, { Component } from 'react'
import { connect } from 'react-redux'
import {countIncrementAction} from '../../redux/count_action'
class Count extends Component {
  render() {
    return (
      <div>
        当前求和为：{this.props.count}
        <button onClick={this.add}>点我+1</button>
      </div> 
    )
  }
  add=()=>{
    this.props.jiafa(1)
  }
}

export default connect(
  state=>({count:state}),
  {jiafa:countIncrementAction}

)(Count)