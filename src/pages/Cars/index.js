import React from 'react'
import './index.css'
import Header from '../../components/Header'
var Swiper = window.Swiper

class Cars extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      active: false
    }
  }

  componentDidMount() {
    new Swiper('#cars-swiper', {
      nextButton: '.swiper-button-next',
      prevButton: '.swiper-button-prev',
      loop: true
    })
  }

  render() {
    return (
      <div className="full cars">
        <Header
          onClickBar={this.props.onClickBar}
          onClickCar={this.props.onClickCar}
        />

        <div className="cars-btns">
          <div
            className="cars-btn"
            onTouchStart={() => {}}
            onClick={() => {
              // this.props.onClickModel && this.props.onClickModel()
              window.location = '/?page=model&model=s5'
            }}
          >
            <img src="/images/haima_s5.png" width="57" alt="" />
            <span>海马 S5</span>
          </div>
          <div
            className="cars-btn"
            style={{
              paddingTop: 15
            }}
            onClick={() => {
              // this.props.onClickModel && this.props.onClickModel()
              window.location = '/?page=model&model=s5young'
            }}
          >
            <img src="/images/haima_s5_y.png" width="47" alt="" />
            <span>海马 S5 young</span>
          </div>

          <div className="cars-btn-group">
            <div
              className="cars-btn"
              style={{
                paddingTop: 15
              }}
              onClick={() => {
                // this.props.onClickModel && this.props.onClickModel()
                window.location = '/?page=model&model=s5young'
              }}
            >
              <img src="/images/haima_m6.png" width="40" alt="" />
              <span>海马 M6</span>
            </div>
            <div
              className="cars-btn"
              style={{
                paddingTop: 15
              }}
              onClick={() => {
                // this.props.onClickModel && this.props.onClickModel()
                window.location = '/?page=model&model=s5young'
              }}
            >
              <img src="/images/haima_m3.png" width="40" alt="" />
              <span>海马 M3</span>
            </div>
          </div>
        </div>

        <div className="cars-swiper swiper-container" id="cars-swiper">
          <div className="swiper-wrapper">
            <div className="swiper-slide">
              <img src="/images/car_s5.png" alt=""/>
            </div>
            <div className="swiper-slide">
              <img src="/images/car_s5_young.png" alt=""/>
            </div>
            <div className="swiper-slide">
              <img src="/images/car_m6.png" alt=""/>
            </div>
            <div className="swiper-slide">
              <img src="/images/car_m3.png" alt=""/>
            </div>
          </div>
          <div className="swiper-button-next" />
          <div className="swiper-button-prev" />
        </div>
      </div>
    )
  }
}

export default Cars
