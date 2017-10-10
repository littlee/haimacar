import React from 'react'
import './index.css'
import Header from '../../components/Header'
import ModelBtns from './ModelBtns'
import ModelOut from './ModelOut'
import ModelIn from './ModelIn'

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
        <Header onClickBar={this.props.onClickBar} onClickCar={this.props.onClickCar}/>
        {
          this.state.type === 'out' ? <ModelOut /> : <ModelIn />
        }
        <ModelBtns type={this.state.type} onChange={this._changeType} />
      </div>
    )
  }

  _changeType = type => {
    this.setState({ type })
  }
}

export default Model
