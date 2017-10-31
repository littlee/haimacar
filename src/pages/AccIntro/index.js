import React from 'react'
import './index.css'

class AccIntro extends React.Component {
  render() {
    return (
      <div className="full acc-intro">
        <img src="/images/acc_intro_bg.jpg" className="acc-intro-bg" alt=""/>
        <img
          src="/images/acc_intro_text.png"
          alt=""
          className="acc-intro-text animated slideInDown"
        />
        <img
          src="/images/acc_intro_scroll.png"
          className="acc-intro-scroll animated fadeInUp"
          alt=""
          style={{
            animationDelay: '0.5s'
          }}
          onClick={() => {
            this.props.changePage('category')
          }}
        />
        <div className="acc-intro-arrow"></div>
      </div>
    )
  }
}

export default AccIntro
