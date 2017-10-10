import React from 'react'
import './index.css'

class Header extends React.Component {
  render() {
    return (
      <div className="header">
        <div
          className="header-bar"
          onClick={() => {
            this.props.onClickBar && this.props.onClickBar()
          }}
        >
          {
            this.props.useDark ?
            <span className="header-bar-icon dark" />
            :
            <span className="header-bar-icon" />
          }
          {
            this.props.useDark ? null : <span className="header-bar-text">返回首页</span>
          }
        </div>

        {this.props.useLogo ? (
          <div className="header-logo">
            <img src="/images/header_logo.png" alt="" onClick={() => {
              this.props.onClickCar && this.props.onClickCar()
            }}/>
          </div>
        ) : (
          <div
            className="header-car"
            onClick={() => {
              this.props.onClickCar && this.props.onClickCar()
            }}
          />
        )}
      </div>
    )
  }
}

export default Header
