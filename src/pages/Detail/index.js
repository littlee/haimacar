import React from 'react'
import './index.css'
import Header from '../../components/Header'
import req from 'superagent'
import qs from 'qs'
import Contact from '../Contact'
var query = qs.parse(window.location.search.slice(1))
var Swiper = window.Swiper
var $ = window.jQuery

function addAni() {
  $('.swiper-slide-active')
    .find('.detail-ani')
    .each(function() {
      var $this = $(this)
      $this.removeClass('hidden').addClass($this.data('ani'))
    })
}

function removeAni() {
  $('.detail-ani')
    .each(function() {
      var $this = $(this)
      $this.removeClass($this.data('ani')).addClass('hidden')
    })
}

class Detail extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      showHeader: true,
      name: '',
      screen: [],
      ing: true
    }
  }

  componentDidMount() {
    req.get('/data/detail.json').end((err, res) => {
      var data = res.body[query.product]
      this.setState(
        {
          ...data,
          ing: false
        },
        () => {
          new Swiper('#detail-swiper', {
            direction: 'vertical',
            onInit: swiper => {
              addAni()
            },
            onSlideChangeStart: swiper => {
              removeAni()
            },
            onSlideChangeEnd: swiper => {
              this.setState({
                showHeader: swiper.activeIndex < 2
              })
              addAni()
            }
          })
        }
      )
    })
  }

  render() {
    if (this.state.ing) {
      return null
    }
    return (
      <div className="full detail">
        {this.state.showHeader ? (
          <div className="detail-header">
            <Header
              useLogo={true}
              onClickBar={this.props.onClickBar}
              onClickCar={this.props.onClickCar}
            />
          </div>
        ) : null}
        <div className="swiper-container" id="detail-swiper">
          <div className="swiper-wrapper">
            {this.state.screen.map((item, index) => {
              if (item.type === 'single') {
                return (
                  <div
                    key={index}
                    className="swiper-slide"
                    style={{
                      backgroundColor: item.color
                    }}
                  >
                    <img
                      src={item.image}
                      alt={item.name}
                      className="detail-full-img"
                    />
                    {item.animation.map((item, index) => (
                      <img
                        key={index}
                        src={item.src}
                        className={'detail-ani animated'}
                        data-ani={item.type}
                        alt=""
                        style={{
                          width: item.width,
                          top: item.top,
                          left: item.left
                        }}
                      />
                    ))}
                  </div>
                )
              }
              return (
                <div className="swiper-slide" key={index}>
                  <div className="detail-inner">
                    <div className="detail-title">{item.title}</div>
                    <div className="detail-subtitle">{item.subtitle}</div>
                    <img
                      alt=""
                      src={item.images[0].src}
                      className="detail-main-img"
                    />
                    <div className="detail-main-img-text">
                      {item.images[0].text}
                    </div>

                    <div className="detail-sub-img-row">
                      {item.images.slice(1).map((img, i) => (
                        <div className="detail-sub-img-col" key={i}>
                          <img
                            alt=""
                            src={img.src}
                            className="detail-sub-img"
                          />
                          <div className="detail-sub-img-title">{img.text}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )
            })}
            <div className="swiper-slide">
              <Contact
                onClickBar={this.props.onClickBar}
                onClickCar={this.props.onClickCar}
              />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Detail
