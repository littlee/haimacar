import React from 'react'
import './index.css'
import { Collapse } from 'react-collapse'

class Test extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      open: false
    }
  }

  render() {
    return (
      <div className="full test">
        <button type="button" onClick={() => {
          this.setState(prevState => ({
            open: !prevState.open
          }))
        }}>toggle</button>
        <Collapse isOpened={this.state.open} style={{
          color: 'red'
        }}>
          <div>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit modi, debitis aspernatur est dignissimos sit ullam praesentium ipsum harum qui voluptate labore excepturi eveniet fugit consectetur tenetur tempora dolorem! Eos.</div>
        </Collapse>
      </div>
    )
  }
}

export default Test
