import React from 'react'
import './index.css'
import req from 'superagent'
import Header from '../../components/Header'
import { Collapse } from 'react-collapse'
import { throttle } from 'lodash'
import qs from 'qs'
import Scrollbar from 'react-smooth-scrollbar'
var query = qs.parse(window.location.search.slice(1))

var $ = window.jQuery
function setOpacity() {
  var itemsHeight = $('#product-items').outerHeight()
  $('div.product-item').each(function(b) {
    var $this = $(this)
    if ($this.position().top > itemsHeight - 80) {
      $this.addClass('fade')
    }
    else {
      $this.removeClass('fade')
    }
  })
}

class Product extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      list: []
    }
  }

  componentDidMount() {
    req
      .get('/api/subCategoryList')
      .query({
        categoryId: query.categoryId
      })
      .end((err, res) => {
        this.setState(
          {
            list: res.body.map(item => ({
              ...item,
              open: false
            }))
          },
          () => {
            setOpacity()
          }
        )
      })
  }

  render() {
    return (
      <div className="full product">
        <div className="product-header">
          <Header
            onClickBar={this.props.onClickBar}
            onClickCar={this.props.onClickCar}
          />
        </div>

        <Scrollbar className="product-items" id="product-items" onScroll={throttle(setOpacity, 200)}>
          {this.state.list.map((item, index) => {
            return (
              <div
                className={'product-item' + (item.open ? ' active' : '')}
                key={index}
              >
                <div
                  className={'product-item-header'}
                  onClick={this._toggle.bind(this, item.category_id)}
                >
                  <span className="product-item-header-text">
                    {item.category.slice(0, 2)}
                  </span>
                  <img
                    src={item.picture}
                    alt=""
                    className="product-item-header-img"
                  />
                  <span className="product-item-header-text">
                    {item.category.slice(2, 4)}
                  </span>
                </div>
                <Collapse isOpened={item.open} onRest={() => {
                  setOpacity()
                }}>
                  <div className="product-item-body">
                    {item.subProducts && item.subProducts.map((item, index) => (
                      <div
                        className="product-sub-item"
                        key={index}
                        onClick={() => {
                          window.location =
                            '/?page=upload&productId=' + item.product_id
                        }}
                      >
                        <span>{item.title}</span>
                        <span className="product-sub-item-num">
                          {item.sub_title}
                        </span>
                      </div>
                    ))}
                  </div>
                </Collapse>
              </div>
            )
          })}
        </Scrollbar>
      </div>
    )
  }

  _toggle = id => {
    this.setState(prevState => {
      return {
        list: prevState.list.map(item => {
          if (item.category_id === id) {
            return {
              ...item,
              open: !item.open
            }
          }
          return item
        })
      }
    })
  }
}

export default Product
