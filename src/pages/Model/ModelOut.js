import React from 'react'
import qs from 'qs'
var query = qs.parse(window.location.search.slice(1))
var object2vrPlayer = window.object2vrPlayer

var skinMap = {
  's5': window.object2vrSkinS5,
  's5young': window.object2vrSkinS5Young,
  'm6': window.object2vrSkinM6,
  'm3': window.object2vrSkinM3
}

var rectMap = {
  's5': {
    width: 640,
    height: 680,
  },
  's5young': {
    width: 640,
    height: 640,
  },
  'm6': {
    width: 640,
    height: 640,
  },
  'm3': {
    width: 640,
    height: 640,
  },
}

var marginMap = {
  's5': '20%',
  's5young': '30%',
  'm6': '30%',
  'm3': '30%'
}

class ModelOut extends React.Component {
  componentDidMount() {
    var obj = new object2vrPlayer('model-out-container')
    skinMap[query.model] && skinMap[query.model](obj)
    obj.readConfigUrl(`/model_${query.model}.xml`)
  }

  render() {
    var rect = rectMap[query.model]
    return (
      <div className="model-out" style={{
        marginTop: marginMap[query.model]
      }}>
        <div className="model-out-main">
          <div id="model-out-container" style={{
            width: window.innerWidth,
            height: Math.round(window.innerWidth * (rect.height / rect.width))
          }}>
          </div>
        </div>
      </div>
    )
  }
}

export default ModelOut
