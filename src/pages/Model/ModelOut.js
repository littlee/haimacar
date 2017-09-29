import React from 'react'
var $ = window.jQuery

class ModelOut extends React.Component {
  componentDidMount() {
    $('#model-out-main').ThreeSixty({
      totalFrames: 42,
      endFrame: 42,
      currentFrame: 1,
      imgList: '.threesixty_images',
      progress: '.spinner',
      imagePath: '/images/s5young/',
      filePrefix: '',
      ext: '.jpg',
      width: window.innerWidth * 0.9,
      height: window.innerWidth * 0.9 * (232/320),
      navigation: false
    })
  }

  render() {
    return (
      <div className="model-out">
        <div className="model-out-title">
          <span className="model-out-title-text">海马 S5 Young</span>
        </div>
        <div className="model-out-main">
          <div className="threesixty" id="model-out-main">
            <div className="spinner">
              <span>0%</span>
            </div>
            <ol className="threesixty_images" />
          </div>
        </div>
      </div>
    )
  }
}

export default ModelOut
