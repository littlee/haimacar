import React from 'react'
import './index.css'
import req from 'superagent'
import qs from 'qs'
import Header from '../../components/Header'

var query = qs.parse(window.location.search.slice(1))
var Swiper = window.Swiper

// content = content.replace(/\n+|\s+/g,",");

function convert2Array(str) {
  return str.replace(/\n+|\s+/g, ',').split(',')
}

class Upload extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      pictures: [],
      urls: [],
      ing: true,
      showHeader: true
    }
  }

  componentDidMount() {
    req
      .get('/api/getProduct')
      .query({
        productId: query.productId
      })
      .end((err, res) => {
        this.setState(
          {
            pictures: res.body.detail_pictures,
            urls: convert2Array(res.body.detail_urls),
            ing: false
          },
          () => {
            new Swiper('#upload-swiper', {
              direction: 'vertical',
              onSlideChangeEnd: swiper => {
                this.setState({
                  showHeader: !swiper.isEnd
                })
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
      <div className="full upload">
        <div className="upload-header">
          <Header
            useLogo={true}
            onClickBar={this.props.onClickBar}
            onClickCar={this.props.onClickCar}
          />
        </div>
        {this.state.pictures.map((item, index) => (
          <img src={item} className="upload-full-img" alt=""/>
        ))}

        <div className="upload-msg">
          <img src="/images/message_btn.png" alt="" className="upload-msg-btn" onClick={() => {
            window.location = '/?page=contact'
          }}/>
        </div>
      </div>
    )
  }
}

export default Upload
