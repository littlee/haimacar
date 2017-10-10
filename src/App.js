import React, { Component } from 'react'
import Loading from './pages/Loading'
import Index from './pages/Index'
import Cars from './pages/Cars'
import Model from './pages/Model'
import Contact from './pages/Contact'
import Product from './pages/Product'
import SubProduct from './pages/SubProduct'
import Detail from './pages/Detail'
import Upload from './pages/Upload'
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
            title: '海马汽车',
            link: window.location.origin,
            imgUrl: window.location.origin + '/images/wx.jpg',
            success: function() {
              // 用户确认分享后执行的回调函数
            },
            cancel: function() {
              // 用户取消分享后执行的回调函数
            }
          })

          wx.onMenuShareAppMessage({
            title: '海马汽车',
            desc: '== 海马汽车 ==',
            link: window.location.origin,
            imgUrl: window.location.origin + '/images/wx.jpg',
            type: 'link',
            dataUrl: '',
            success: function() {
              // 用户确认分享后执行的回调函数
            },
            cancel: function() {
              // 用户取消分享后执行的回调函数
            }
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
          />
        ) : null}
        {this.state.page === 'model' ? (
          <Model onClickBar={this._onClickBar} onClickCar={this._onClickCar} />
        ) : null}
        {this.state.page === 'contact' ? (
          <Contact
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
        {this.state.page === 'subproduct' ? (
          <SubProduct
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
      </div>
    )
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
      page: 'product'
    })
  }

  _clickModel = () => {
    this.setState({
      page: 'model'
    })
  }
}

export default App
