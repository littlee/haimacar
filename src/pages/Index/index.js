import React from 'react'
import './index.css'
import Draggable from 'react-draggable'
const winWidth = window.innerWidth

class Index extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      carX: -(winWidth/2),
      accX: (winWidth/2),
      carLayer: 1,
      accLayer: 1
    }
  }

  render() {
    var part = winWidth/4
    var carStart = -(winWidth/2)
    var carMoved = Math.abs(this.state.carX - carStart)/part

    var viewCarTranY = 100 * (1 - carMoved)
    var viewCarOpa = carMoved

    if (viewCarTranY < 0) {
      viewCarTranY = 0
    }
    if (viewCarOpa > 1) {
      viewCarOpa = 1
    }

    var accStart = winWidth/2
    var accMoved = Math.abs(this.state.accX - accStart)/part
    var viewAccTranY = 100 * (1 - accMoved)
    var viewAccOpa = accMoved

    if (viewAccTranY < 0) {
      viewAccTranY = 0
    }
    if (viewAccOpa > 1) {
      viewAccOpa = 1
    }

    return (
      <div className="full index">
        <Draggable
          axis="x"
          bounds={{
            left: -(winWidth/2),
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
          <div className="index-car" style={{
            backgroundPositionX: -this.state.carX,
            zIndex: this.state.carLayer
          }}/> 
        </Draggable>

        <Draggable
          axis="x"
          bounds={{
            left: 0,
            right: winWidth/2
          }}
          position={{
            x: this.state.accX,
            y: 0
          }}
          onStart={this._starAcc}
          onDrag={this._dragAcc}
          onStop={this._stopAcc}
          >
          <div className="index-accessory" style={{
            backgroundPositionX: -this.state.accX,
            zIndex: this.state.accLayer
          }}/>
        </Draggable>

        <img src="/images/index_logo.png" alt="" className="index-logo"/>

        <img src="/images/index_view_car.png" alt="" className="index-view-car" style={{
          transform: `translateY(${viewCarTranY}px)`,
          opacity: viewCarOpa
        }} onClick={() => {
          this.props.onViewCar && this.props.onViewCar()
        }}/>
        <img src="/images/index_view_accessory.png" alt="" className="index-view-acc" style={{
          transform: `translateY(${viewAccTranY}px)`,
          opacity: viewAccOpa
        }} onClick={() => {
          this.props.onViewAcc && this.props.onViewAcc()
        }}/>

      </div>
      )
  }

  _starCar = () => {
    this.setState({
      carLayer: 99,
      accLayer: 1
    })
  }

  _starAcc = () => {
    this.setState({
      carLayer: 1,
      accLayer: 99
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
    if (position.x > -(winWidth/4)) {
      this.setState({
        carX: 0,
        carLayer: 999
      })
      return
    }
    this.setState({
      carX: -(winWidth/2),
      carLayer: 1
    })
  }

  _stopAcc = (e, position) => {
    if (position.x < winWidth/4) {
      this.setState({
        accX: 0,
        accLayer: 999
      })
      return
    }
    this.setState({
      accX: (winWidth/2),
      accLayer: 1
    })
  }
}

export default Index