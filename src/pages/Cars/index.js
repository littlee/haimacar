import React from 'react'
import './index.css'
import Header from '../../components/Header'
var $ = window.jQuery

class Cars extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      active: false
    }
  }

  componentDidMount() {
    $('#cars-slick').slick({
      infinite: true,
      speed: 1000,
      fade: true
    })
  }

  render() {
    return (
      <div className="full cars">
        <Header />

        <div className="cars-btns">
          <div className="cars-btn" onTouchStart={()=>{}}>
            <img src="/images/haima_s5.png" width="57" alt="" />
            <span>海马 S5</span>
          </div>
          <div className="cars-btn">
            <img src="/images/haima_s5_y.png" width="47" alt="" />
            <span>海马 S5 young</span>
          </div>

          <div className="cars-btn-group">
            <div className="cars-btn">
              <img src="/images/haima_m6.png" width="40" alt="" />
              <span>海马 M6</span>
            </div>
            <div className="cars-btn">
              <img src="/images/haima_m3.png" width="40" alt="" />
              <span>海马 M3</span>
            </div>
          </div>
        </div>

        <div
          id="cars-slick"
          className="cars-slick"
        >
          <div className="cars-slick-item">
            <img src="/images/sp1.jpg" alt=""/>
          </div>
          <div className="cars-slick-item">
            <img src="/images/sp2.jpg" alt=""/>
          </div>
          <div className="cars-slick-item">
            <img src="/images/sp3.jpg" alt=""/>
          </div>
        </div>
      </div>
    )
  }
}

export default Cars
