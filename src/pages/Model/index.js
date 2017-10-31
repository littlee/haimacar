import React from 'react'
import './index.css'
import Header from '../../components/Header'
import ModelBtns from './ModelBtns'
import ModelOut from './ModelOut'
import ModelIn from './ModelIn'
import qs from 'qs'
var query = qs.parse(window.location.search.slice(1))

class Model extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      type: 'out'
    }
  }

  render() {
    return (
      <div className={'full model ' + this.state.type + ' ' + query.model}>
        <Header onClickBar={this.props.onClickBar} onClickCar={this.props.onClickCar} prev={() => {
          window.location = '/?page=cars&initialSlide=1'
        }}/>
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
