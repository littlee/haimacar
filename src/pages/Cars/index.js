import React from 'react'
import './index.css'
import Header from '../../components/Header'
import qs from 'qs'
var query = qs.parse(window.location.search.slice(1))
// var $ = window.jQuery
var Swiper = window.Swiper

class Cars extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      active: false,
      introActiveIndex: 0
    }
  }

  componentDidMount() {
    new Swiper('#cars-intro-swiper', {
      direction: 'vertical',
      initialSlide: parseInt(query.initialSlide, 10) || 0,
      onInit: () => {},
      onSlideChangeStart: swiper => {},
      onSlideChangeEnd: swiper => {
        this.setState({
          introActiveIndex: swiper.activeIndex
        })
      }
    })

    new Swiper('#cars-swiper', {
      nextButton: '.swiper-button-next',
      prevButton: '.swiper-button-prev',
      loop: true
    })
  }

  render() {
    return (
      <div className="full cars">
        <div className="cars-header">
          <Header
            onClickBar={this.props.onClickBar}
            onClickCar={this.props.onClickCar}
            prev={() => {
              this.props.changePage('index')
            }}
          />
        </div>

        <div className="swiper-container" id="cars-intro-swiper">
          <div className="swiper-wrapper">
            <div className="swiper-slide">
              <img
                src="/images/car_intro_bg.jpg"
                alt=""
                width="100%"
                className="cars-intro-bg"
              />
              <img
                src="/images/car_intro_man.png"
                alt=""
                className="cars-intro-ani animated fadeIn"
                style={{
                  width: 346 / 640 * 100 + '%',
                  top: 611 / 1008 * 100 + '%',
                  left: 0,
                  right: 0,
                  margin: 'auto',
                  animationDelay: '0.5s'
                }}
              />
              <img
                src="/images/car_intro_scroll.png"
                alt=""
                className="cars-intro-ani animated fadeInUp"
                style={{
                  width: '100%',
                  top: 817 / 1008 * 100 + '%',
                  left: 0,
                  animationDelay: '1s'
                }}
              />
              <img
                src="/images/car_intro_light.png"
                alt=""
                className="cars-intro-ani animated fadeInUp"
                style={{
                  width: '100%',
                  top: 0,
                  left: 0,
                  animationDelay: '0.7s'
                }}
              />
              <img
                src="/images/car_intro_text.png"
                alt=""
                className="cars-intro-ani animated slideInLeft"
                style={{
                  width: 414 / 640 * 100 + '%',
                  top: 165 / 1008 * 100 + '%',
                  left: 0,
                  right: 0,
                  margin: 'auto'
                }}
              />
              <img
                src="/images/car_intro_sub_text.png"
                alt=""
                className="cars-intro-ani animated slideInRight"
                style={{
                  width: 389 / 640 * 100 + '%',
                  top: 280 / 1008 * 100 + '%',
                  left: 0,
                  right: 0,
                  margin: 'auto'
                }}
              />
            </div>
            <div className="swiper-slide">
              <div
                className={
                  'cars-btns-wrap' +
                  (this.state.introActiveIndex === 1 ? '' : ' hide')
                }
              >
                <div className="cars-btns">
                  <div
                    className="cars-btn"
                    onTouchStart={() => {}}
                    onClick={() => {
                      window.location = '/?page=model&model=s5'
                    }}
                  >
                    <img src="/images/haima_s5.png" width="40" alt="" />
                    <span>海马 S5</span>
                  </div>
                  <div
                    className="cars-btn"
                    onClick={() => {
                      window.location = '/?page=model&model=s5young'
                    }}
                  >
                    <img src="/images/haima_s5_y.png" width="40" alt="" />
                    <span>海马 S5 young</span>
                  </div>

                  <div
                    className="cars-btn"
                    onClick={() => {
                      window.location = '/?page=model&model=m6'
                    }}
                  >
                    <img src="/images/haima_m6.png" width="40" alt="" />
                    <span>海马 M6</span>
                  </div>
                  <div
                    className="cars-btn"
                    onClick={() => {
                      window.location = '/?page=model&model=m3'
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
                    <img src="/images/c1.gif" alt="" />
                  </div>
                  <div className="swiper-slide">
                    <img src="/images/c2.gif" alt="" />
                  </div>
                  <div className="swiper-slide">
                    <img src="/images/c3.gif" alt="" />
                  </div>
                  <div className="swiper-slide">
                    <img src="/images/c4.gif" alt="" />
                  </div>
                </div>
                <div className="swiper-button-next" />
                <div className="swiper-button-prev" />
                <div className="cars-swiper-mask" />
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Cars
