import React from 'react'
import './index.css'
import Header from '../../components/Header'
import ModelBtns from './ModelBtns'
import ModelOut from './ModelOut'

class Model extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      type: 'out'
    }
  }

  render() {
    return (
      <div className={'full model ' + this.state.type}>
        <Header />
        <ModelOut />
        <ModelBtns type={this.state.type} onChange={this._changeType} />
        <div style={{color: 'red', textAlign: 'center'}}>内饰暂未实现</div>
      </div>
    )
  }

  _changeType = type => {
    this.setState({ type })
  }
}

export default Model
