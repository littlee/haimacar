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

  _stopCar = () => {
    this.setState({
      carX: -(winWidth/2),
      carLayer: 1
    })
  }

  _stopAcc = () => {
    this.setState({
      accX: (winWidth/2),
      accLayer: 1
    })
  }
}

export default Index