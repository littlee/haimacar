import React from 'react'
import './index.css'

class Loading extends React.Component {
  render() {
    return (
      <div className="full loading">

        <div className="loading-car">
          <img src="/images/loading_car.png" className="loading-img-car" alt=""/>
          <img src="/images/loading_light.png" className="loading-img-light" alt=""/>
        </div>
        <div className="loading-info">
          <div className="loading-title">
            <div className="loading-title-text">海马纯正品质</div>
            <div className="loading-title-active">海马纯正品质</div>
          </div>
          <div className="loading-progress">
            <div className="loading-progress-total"></div>
            <div className="loading-progress-active"></div>
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