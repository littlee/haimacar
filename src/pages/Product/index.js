import React from 'react'
import './index.css'
import req from 'superagent'
import Header from '../../components/Header'
var Swiper = window.Swiper

class Product extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      list: []
    }
  }

  componentDidMount() {
    new Swiper('#product-swiper', {
      nextButton: '.swiper-button-next',
      prevButton: '.swiper-button-prev',
      loop: true
    })

    req.get('/api/categoryList').end((err, res) => {
      this.setState({
        list: res.body
      })
    })
  }

  render() {
    return (
      <div className="full product" style={{
        height: 'auto',
        minHeight: '100%'
      }}>
        <div className="product-header">
          <Header useLogo={true} useDark={true} onClickBar={this.props.onClickBar} onClickCar={this.props.onClickCar}/>
        </div>

        <div className="product-swiper swiper-container" id="product-swiper">
          <div className="swiper-wrapper">
            <div className="swiper-slide">
              <img src="/images/carousel_1.png" alt="" />
            </div>
          </div>
          <div className="swiper-button-next" />
          <div className="swiper-button-prev" />
        </div>

        <div className="product-items">
          {this.state.list.map((item, index) => (
            <div className="product-item" key={index} onTouchStart={() => {}}>
              <div className="product-item-aside">
                <div
                  className="product-item-more"
                  onClick={() => {
                    window.location =
                      '/?page=subproduct&categoryId=' + item.category_id
                  }}
                >
                  More
                </div>
              </div>
              <div className="product-item-main">
                <img src={item.picture} alt="" className="product-item-img" />
                <div className="product-item-title">{item.category}</div>
                <div className="product-item-subtitle">{item.sub_title}</div>
              </div>
            </div>
          ))}
        </div>

        {this.state.list.length > 6 ? <div className="product-arrow" /> : null}
      </div>
    )
  }
}

export default Product
