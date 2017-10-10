import React from 'react'
import './index.css'
import Header from '../../components/Header'
import fto from 'form_to_object'
import req from 'superagent'

class Contact extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      err: ''
    }
  }

  render() {
    return (
      <div className="full contact" style={this.props.style}>
        <Header onClickBar={this.props.onClickBar} onClickCar={this.props.onClickCar} />
        <img src="/images/index_logo.png" className="contact-logo" alt=""/>
        <form className="contact-form" onSubmit={this._submit}>
          <div className="contact-form-item">
            <span className="contact-form-icon phone"></span>
            <input type="tel" className="contact-form-control" placeholder="PHONE" name="phone"/>
          </div>
          <div className="contact-form-item">
            <span className="contact-form-icon name"></span>
            <input type="text" className="contact-form-control" placeholder="NAME" name="name"/>
          </div>
          
          {
            this.state.err ?
            <div className="contact-form-err">{this.state.err}</div> : null
          }

          <div className="contact-form-btn-wrap">
            <button type="submit" className="contact-form-btn">提交</button>
          </div>

        </form>
      </div>
      )
  }

  _submit = (e) => {
    e.preventDefault()
    var data = fto(e.target)

    if (!data || !data.phone) {
      return this.setState({
        err: '请填写手机号码'
      })
    }

    if (!data.name) {
      return this.setState({
        err: '请填写姓名'
      })
    }

    req.post('/api/submitContact').send(data).end((err, res) => {
      alert('提交成功')
      window.location = '/?page=index'
    })

    return
  }
}

export default Contact