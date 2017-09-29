import React from 'react'
import './index.css'

class Loading extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      percent: 0
    }
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        percent: 1
      })

      setTimeout(() => {
        this.props.onComplete && this.props.onComplete()
      }, 3000)
    },250)
  }

  render() {
    return (
      <div className="full loading">
        <div className="loading-car">
          <img
            src="/images/loading_car.png"
            className="loading-img-car"
            alt=""
          />
          <img
            src="/images/loading_light.png"
            className="loading-img-light"
            alt=""
            style={{
              opacity: this.state.percent
            }}
          />
        </div>
        <div className="loading-info">
          <div className="loading-title">
            <div className="loading-title-text">海马纯正品质</div>
            <div
              className="loading-title-active"
              style={{
                width: `${this.state.percent * 100}%`
              }}
            >
              海马纯正品质
            </div>
          </div>
          <div className="loading-progress">
            <div className="loading-progress-total" />
            <div
              className="loading-progress-active"
              style={{
                width: `${this.state.percent * 100}%`
              }}
            />
          </div>
          <div className="loading-subtitle">
            <span>服帖设计</span>
            <span>卓越品质</span>
            <span>优良工艺</span>
          </div>
        </div>
      </div>
    )
  }
}

export default Loading
