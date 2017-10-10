import React from 'react'
import './index.css'
import req from 'superagent'
import qs from 'qs'
import Contact from '../Contact'
var query = qs.parse(window.location.search.slice(1))

class Upload extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      content: '',
      ing: true
    }
  }

  componentDidMount() {
    req
      .get('/api/getProduct')
      .query({
        productId: query.productId
      })
      .end((err, res) => {
        this.setState({
          content: res.body.detail,
          ing: false
        })
      })
  }

  render() {
    return (
      <div>
        <div
          style={{
            minHeight: '100%',
            background: '#fff'
          }}
          dangerouslySetInnerHTML={{
            __html: this.state.content
          }}
        />
        {this.state.ing ? null : (
          <Contact
            onClickBar={this.props.onClickBar}
            onClickCar={this.props.onClickCar}
            style={{
              height: window.innerHeight
            }}
          />
        )}
      </div>
    )
  }
}

export default Upload
