import React, { Component } from 'react'
import './style.css'

export default class LoginPanel extends Component {
  constructor() {
    super()
  }

  render(){
    return (
        <div className='content-wrapper'>
          <div className='login-page'>
            <div className='form'> 
              <form className='login-form' method='post'>
                <a href={this.props.url} className='login-form-button'>enter</a><br/>
                <p className='message'>Not registered? <a href='#' className='message'>Create
                an account</a></p>
                {(!this.props.query) ?
                  <p className='error'>Unfortunatly you have trouble with entering</p> :
                  <p></p>
                }
              </form>
            </div>
          </div>
        </div>
      )
  }
}