import React, { Component } from 'react'
import Loading from './pages/Loading'
import Index from './pages/Index'
import Cars from './pages/Cars'
import Model from './pages/Model'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      page: 'loading'   
    }
  }


  render() {
    return (
      <div className="app">
        {this.state.page === 'loading' ? <Loading onComplete={this._afterLoad}/> : null}
        {this.state.page === 'index' ? <Index onViewCar={this._viewCar} onViewAcc={this._viewCar}/> : null}
        {this.state.page === 'cars' ? <Cars onClickModel={this._clickModel}/> : null}
        {this.state.page === 'model' ? <Model /> : null}
      </div>
    )
  }

  _afterLoad = () => {
    this.setState({
      page: 'index'
    })
  }

  _viewCar = () => {
    this.setState({
      page: 'cars'
    })
  }

  _clickModel = () => {
    this.setState({
      page: 'model'
    })
  }
}

export default App
