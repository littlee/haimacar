import React from 'react'
import './index.css'
import req from 'superagent'
import qs from 'qs'
import Header from '../../components/Header'
var query = qs.parse(window.location.search.slice(1))

var Swiper = window.Swiper

class SubProduct extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      list: []
    }
  }

  componentDidMount() {
    new Swiper('#s-product-swiper', {
      nextButton: '.swiper-button-next',
      prevButton: '.swiper-button-prev',
      loop: true
    })

    req
      .get('/api/productListByCategoryId')
      .query({
        categoryId: query.categoryId
      })
      .end((err, res) => {
        this.setState({
          list: res.body
        })
      })
  }

  render() {
    return (
      <div className="full s-product" style={{
        height: 'auto',
        minHeight: '100%'
      }}>
        <div className="s-product-header">
          <Header useLogo={true} useDark={true} onClickBar={this.props.onClickBar} onClickCar={this.props.onClickCar}/>
        </div>
        <div
          className="s-product-swiper swiper-container"
          id="s-product-swiper"
        >
          <div className="swiper-wrapper">
            <div className="swiper-slide">
              <img src="/images/carousel_2_20171012.png" alt="" />
            </div>
          </div>
          <div className="swiper-button-next" />
          <div className="swiper-button-prev" />
        </div>

        <div className="s-product-items">
          {this.state.list.map((item, index) => (
            <div className="s-product-item" key={index} onTouchStart={() => {}}>
              <div className="s-product-item-aside">
                <div className="s-product-item-img-holder">
                  <img
                    src={item.picture}
                    alt=""
                    className="s-product-item-img"
                  />
                </div>
              </div>
              <div className="s-product-item-main">
                <div className="s-product-item-title">{item.title}</div>
                <div className="s-product-item-subtitle">
                  <img
                    alt=""
                    src="/images/icon_folder.png"
                    width="12px"
                    className="s-product-item-icon"
                  />
                  <span className="s-product-item-text">{item.amount}</span>
                </div>
              </div>
              <div className="s-product-item-more" onClick={() => {
                window.location = '/?page=upload&productId=' + item.product_id
              }}>More</div>
            </div>
          ))}
        </div>

        <div className="s-product-mask" />
      </div>
    )
  }
}

export default SubProduct
