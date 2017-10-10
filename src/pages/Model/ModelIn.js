import React from 'react'

class ModelIn extends React.Component {
  componentDidMount() {
    window.pannellum.viewer('panorama', {
      type: 'equirectangular',
      panorama: '/images/360in/s5.jpg',
      autoLoad: true,
      showZoomCtrl: false,
      showFullscreenCtrl: false
    })
  }

  render() {
    return (
      <div
        id="panorama"
        style={{
          margin: 'auto',
          width: window.innerWidth * 0.9,
          height: window.innerWidth * 0.9
        }}
      />
    )
  }
}

export default ModelIn
