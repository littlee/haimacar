import React from 'react'
import './index.css'

var assets = [
  '/images/car_active.png',
  '/images/car_arrow_left.png',
  '/images/car_arrow_right.png',
  '/images/car_icon.png',
  '/images/car_intro_bg.jpg',
  '/images/car_intro_man.png',
  '/images/car_intro_light.png',
  '/images/car_intro_text.png',
  '/images/car_intro_sub_text.png',
  '/images/car_intro_scroll.png',
  '/images/acc_intro_scroll.png',
  '/images/acc_intro_bg.jpg',
  '/images/acc_intro_text.png',
  '/images/haima_m3.png',
  '/images/haima_m6.png',
  '/images/haima_s5.png',
  '/images/haima_s5_y.png',
  '/images/header_logo.png',
  '/images/icon_folder.png',
  '/images/index_accessory.png',
  '/images/index_car.png',
  '/images/index_logo.gif',
  '/images/index_logo_sub.png',
  '/images/index_view_accessory.png',
  '/images/index_view_car.png',
  '/images/menu_icon.png',
  '/images/model_out_s5.jpg',
  '/images/model_out_m3.jpg',
  '/images/name_icon.png',
  '/images/phone_icon.png',
  '/images/oil_drop.png',
  '/images/hand_expo.png',
  '/images/leave_left.png',
  '/images/leave_right.png',
  '/images/prod_arrow.png'
]

var assetsLen = assets.length

class Loading extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      percent: 0
    }
  }

  componentDidMount() {
    this._loadImage()
  }

  render() {
    return (
      <div className="full loading">
        <div className="loading-car">
          <img
            src="/images/loading_car1.png"
            className="loading-img-car"
            alt=""
          />
          <img
            src="/images/loading_light1.png"
            className="loading-img-light"
            alt=""
            style={{
              opacity: this.state.percent
            }}
          />
        </div>
        <div className="loading-info">
          <div className="loading-title">
            <div className="loading-title-text">海马纯正品质</div>
            <div
              className="loading-title-active"
              style={{
                width: `${this.state.percent * 100}%`
              }}
            >
              海马纯正品质
            </div>
          </div>
          <div className="loading-progress">
            <div className="loading-progress-total" />
            <div
              className="loading-progress-active"
              style={{
                width: `${this.state.percent * 100}%`
              }}
            />
          </div>
          <div className="loading-subtitle">
            <span>服帖设计</span>
            <span>卓越品质</span>
            <span>优良工艺</span>
          </div>
        </div>
      </div>
    )
  }

  _loadImage = e => {
    this.setState(prevState => {
      return {
        percent: (assetsLen - assets.length) / assetsLen
      }
    })
    if (assets.length) {
      var img = new Image()
      img.onload = () => {
        setTimeout(
          this._loadImage,
          100 // 100ms delay
        )
      }
      img.src = assets.shift()
    } else {
      setTimeout(() => {
        this.props.onComplete && this.props.onComplete()
      }, 200)
    }
  }
}

export default Loading
