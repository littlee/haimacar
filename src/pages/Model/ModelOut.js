import React from 'react'
import qs from 'qs'
var query = qs.parse(window.location.search.slice(1))
var object2vrPlayer = window.object2vrPlayer
var object2vrSkin = window.object2vrSkin

var modelMap = {
  's5': 'S5',
  's5young': 'S5 Young',
  'm6': 'M6',
  'm3': 'M3'
}

class ModelOut extends React.Component {
  componentDidMount() {
    var obj = new object2vrPlayer('model-out-container')
    new object2vrSkin(obj)
    obj.readConfigUrl(`/model_${query.model}.xml`)
  }

  render() {
    return (
      <div className="model-out">
        <div className="model-out-title">
          <span className="model-out-title-text">海马 {modelMap[query.model]}</span>
        </div>
        <div className="model-out-main">
          <div id="model-out-container" style={{
            width: window.innerWidth * 0.9,
            height: window.innerWidth * 0.9
          }}>
          </div>
        </div>
      </div>
    )
  }
}

export default ModelOut
