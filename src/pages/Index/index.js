import React from 'react'
import './index.css'
import Draggable from 'react-draggable'

const winWidth = window.innerWidth

class Index extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      carX: -(winWidth / 2),
      accX: winWidth / 2,
      carLayer: 1,
      accLayer: 1,
      intro: true,
      type: ''
    }
  }

  render() {
    var part = winWidth / 4
    var carStart = -(winWidth / 2)
    var carMoved = Math.abs(this.state.carX - carStart) / part

    var viewCarTranY = 100 * (1 - carMoved)
    var viewCarOpa = carMoved

    if (viewCarTranY < 0) {
      viewCarTranY = 0
    }
    if (viewCarOpa > 1) {
      viewCarOpa = 1
    }

    var accStart = winWidth / 2
    var accMoved = Math.abs(this.state.accX - accStart) / part
    var viewAccTranY = 100 * (1 - accMoved)
    var viewAccOpa = accMoved

    if (viewAccTranY < 0) {
      viewAccTranY = 0
    }
    if (viewAccOpa > 1) {
      viewAccOpa = 1
    }

    var { type } = this.state

    return (
      <div className="full index">
        <div
          style={{
            display: 'none'
          }}
        >
          <img src="/images/c1.gif" alt="" />
          <img src="/images/c2.gif" alt="" />
          <img src="/images/c3.gif" alt="" />
          <img src="/images/c4.gif" alt="" />
        </div>

        <Draggable
          axis="x"
          bounds={{
            left: -(winWidth / 2),
            right: 0
          }}
          position={{
            x: this.state.carX,
            y: 0
          }}
          onStart={this._starCar}
          onDrag={this._dragCar}
          onStop={this._stopCar}
        >
          <div
            className={'index-car' + (type === 'car' ? ' active' : '')}
            style={{
              backgroundPositionX: -this.state.carX,
              zIndex: this.state.carLayer
            }}
          >
            <img src="/images/hand_expo.png" alt="" className={'index-car-expo animated' + (type === 'car' ? ' fadeIn' : '')}/>
            <img src="/images/leave_left.png" alt="" className={'index-car-leave-left animated' + (type === 'car' ? ' slideInLeft' : '')}/>
            <img src="/images/leave_right.png" alt="" className={'index-car-leave-right animated' + (type === 'car' ? ' slideInRight' : '')}/>
          </div>
        </Draggable>

        <Draggable
          axis="x"
          bounds={{
            left: 0,
            right: winWidth / 2
          }}
          position={{
            x: this.state.accX,
            y: 0
          }}
          onStart={this._starAcc}
          onDrag={this._dragAcc}
          onStop={this._stopAcc}
        >
          <div
            className={'index-accessory' + (type === 'acc' ? ' active' : '')}
            style={{
              backgroundPositionX: -this.state.accX,
              zIndex: this.state.accLayer
            }}
          >
            <img
              src="/images/oil_drop.png"
              alt=""
              className={'index-accessory-oil animated' + (type === 'acc' ? ' slideInDown' : '')}
            />
            <img
              src="/images/index_acc_wheel.png"
              alt=""
              className="index-accessory-wheel"
            />
          </div>
        </Draggable>

        {this.state.intro ? (
          <div className="index-intro">
            <div
              className="index-intro-car"
              style={{
                backgroundSize: window.innerWidth
              }}
              onAnimationEnd={() => {
                this.setState({
                  intro: false
                })
              }}
            />
            <div
              className="index-intro-acc"
              style={{
                backgroundSize: window.innerWidth
              }}
            />
          </div>
        ) : null}

        <div className="index-logo">
          <img
            src="/images/index_logo.gif"
            alt=""
            className="index-logo-main"
          />
          <img
            src="/images/index_logo_sub.png"
            alt=""
            className="index-logo-sub"
          />
        </div>

        <img
          src="/images/index_view_car.png"
          alt=""
          className="index-view-car"
          style={{
            transform: `translateY(${viewCarTranY}px)`,
            opacity: viewCarOpa
          }}
          onClick={() => {
            this.props.onViewCar && this.props.onViewCar()
          }}
        />
        <img
          src="/images/index_view_accessory.png"
          alt=""
          className="index-view-acc"
          style={{
            transform: `translateY(${viewAccTranY}px)`,
            opacity: viewAccOpa
          }}
          onClick={() => {
            this.props.onViewAcc && this.props.onViewAcc()
          }}
        />
      </div>
    )
  }

  _starCar = () => {
    this.setState({
      carLayer: 99,
      accLayer: 1,
      type: ''
    })
  }

  _starAcc = () => {
    this.setState({
      carLayer: 1,
      accLayer: 99,
      type: ''
    })
  }

  _dragCar = (e, position) => {
    this.setState({
      carX: position.x
    })
  }

  _dragAcc = (e, position) => {
    this.setState({
      accX: position.x
    })
  }

  _stopCar = (e, position) => {
    if (position.x > -(winWidth / 4)) {
      this.setState({
        carX: 0,
        carLayer: 999,
        type: 'car'
      })
      return
    }
    this.setState({
      carX: -(winWidth / 2),
      carLayer: 1,
      type: ''
    })
  }

  _stopAcc = (e, position) => {
    if (position.x < winWidth / 4) {
      this.setState({
        accX: 0,
        accLayer: 999,
        type: 'acc'
      })
      return
    }
    this.setState({
      accX: winWidth / 2,
      accLayer: 1,
      type: ''
    })
  }
}

export default Index
