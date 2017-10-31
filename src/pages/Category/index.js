import React from 'react'
import './index.css'
import req from 'superagent'
import Header from '../../components/Header'
import img1 from '../../assets/product_1_1.jpeg'
import img2 from '../../assets/product_1_2.jpeg'
var Swiper = window.Swiper

class Category extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      list: []
    }
  }

  componentDidMount() {
    new Swiper('#category-swiper', {
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
      <div className="full category" style={{
        height: 'auto',
        minHeight: '100%'
      }}>
        <div className="category-header">
          <Header useLogo={true} useDark={true} onClickBar={this.props.onClickBar} onClickCar={this.props.onClickCar}/>
        </div>

        <div className="category-swiper swiper-container" id="category-swiper">
          <div className="swiper-wrapper">
            <div className="swiper-slide">
              <img src={img1} alt="" />
            </div>
            <div className="swiper-slide">
              <img src={img2} alt="" />
            </div>
          </div>
          <div className="swiper-button-next" />
          <div className="swiper-button-prev" />
        </div>

        <div className="category-items">
          {this.state.list.map((item, index) => (
            <div className="category-item" key={index} onTouchStart={() => {}}>
              <div className="category-item-aside">
                <div
                  className="category-item-more"
                  onClick={this._clickMore.bind(this, item.category_id)}
                >
                  More
                </div>
              </div>
              <div className="category-item-main">
                <img src={item.picture} alt="" className="category-item-img" />
                <div className="category-item-title">{item.category}</div>
                <div className="category-item-subtitle">{item.sub_title}</div>
              </div>
            </div>
          ))}
        </div>

        {this.state.list.length > 6 ? <div className="category-arrow" /> : null}
      </div>
    )
  }

  _clickMore = (id) => {
    req
      .get('/api/subCategoryList')
      .query({
        categoryId: id
      })
      .end((err, res) => {
        if (!res.body.length) {
          return //alert('暂时未有产品')
        }
        window.location = '/?page=product&categoryId=' + id
      })
  }
}

export default Category
