import React from 'react'


const ModelBtns = (props) => {
  return (
    <div className="model-btns">
      <div className={'model-btn' + (props.type === 'out' ? ' active' : '')} onClick={() => {
        props.onChange && props.onChange('out')
      }}>
        外饰360全景
      </div>
      <div className={'model-btn' + (props.type === 'in' ? ' active' : '')} onClick={() => {
        props.onChange && props.onChange('in')
      }}>
        内饰360全景
      </div>
    </div>
    )
}

export default ModelBtns