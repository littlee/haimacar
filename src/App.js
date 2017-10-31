import React, { Component } from 'react'
import Loading from './pages/Loading'
import Index from './pages/Index'
import Cars from './pages/Cars'
import Model from './pages/Model'
import Contact from './pages/Contact'
import Category from './pages/Category'
import Product from './pages/Product'
import Detail from './pages/Detail'
import Upload from './pages/Upload'
import AccIntro from './pages/AccIntro'
import Test from './pages/Test'
import qs from 'qs'
import req from 'superagent'
var wx = window.wx
var query = qs.parse(window.location.search.slice(1))

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      page: query.page || 'loading'
    }
  }

  componentDidMount() {
    req
      .post('/api/getJsSdkInfo')
      .send({
        url: window.location.href
      })
      .end((err, res) => {
        if (err) {
          return err
        }
        wx.config({
          debug: false,
          appId: res.body.appid,
          timestamp: res.body.timestamp,
          nonceStr: res.body.noncestr,
          signature: res.body.signature,
          jsApiList: ['onMenuShareTimeline', 'onMenuShareAppMessage']
        })

        wx.ready(() => {
          wx.onMenuShareTimeline({
            title: '海马汽车云端产品画册',
            link: window.location.origin,
            imgUrl: window.location.origin + '/images/wx.jpg',
            success: function() {},
            cancel: function() {}
          })

          wx.onMenuShareAppMessage({
            title: '海马汽车云端产品画册',
            desc: '海马纯正品质',
            link: window.location.origin,
            imgUrl: window.location.origin + '/images/wx.jpg',
            type: 'link',
            dataUrl: '',
            success: function() {},
            cancel: function() {}
          })
        })
      })
  }

  render() {
    return (
      <div className="app">
        {this.state.page === 'loading' ? (
          <Loading onComplete={this._afterLoad} />
        ) : null}
        {this.state.page === 'index' ? (
          <Index onViewCar={this._viewCar} onViewAcc={this._viewAcc} />
        ) : null}
        {this.state.page === 'cars' ? (
          <Cars
            onClickModel={this._clickModel}
            onClickBar={this._onClickBar}
            onClickCar={this._onClickCar}
            changePage={this._changePage}
          />
        ) : null}
        {this.state.page === 'model' ? (
          <Model
            onClickBar={this._onClickBar}
            onClickCar={this._onClickCar}
            changePage={this._changePage}
          />
        ) : null}
        {this.state.page === 'contact' ? (
          <Contact
            onClickBar={this._onClickBar}
            onClickCar={this._onClickCar}
          />
        ) : null}
        {this.state.page === 'category' ? (
          <Category
            onClickBar={this._onClickBar}
            onClickCar={this._onClickCar}
          />
        ) : null}
        {this.state.page === 'product' ? (
          <Product
            onClickBar={this._onClickBar}
            onClickCar={this._onClickCar}
          />
        ) : null}
        {this.state.page === 'detail' ? (
          <Detail onClickBar={this._onClickBar} onClickCar={this._onClickCar} />
        ) : null}
        {this.state.page === 'upload' ? (
          <Upload onClickBar={this._onClickBar} onClickCar={this._onClickCar} />
        ) : null}
        {this.state.page === 'accintro' ? (
          <AccIntro
            onClickBar={this._onClickBar}
            onClickCar={this._onClickCar}
            changePage={this._changePage}
          />
        ) : null}
        {this.state.page === 'test' ? <Test /> : null}
      </div>
    )
  }

  _changePage = page => {
    this.setState({ page })
  }

  _onClickBar = () => {
    this.setState({
      page: 'index'
    })
  }

  _onClickCar = () => {
    this.setState({
      page: 'cars'
    })
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

  _viewAcc = () => {
    this.setState({
      page: 'accintro'
    })
  }

  _clickModel = () => {
    this.setState({
      page: 'model'
    })
  }
}

export default App
