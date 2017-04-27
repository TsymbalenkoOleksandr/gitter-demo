import React, { Component } from 'react'
import logo from '../../img/logo.png'

export default class Header extends Component {
  constructor() {
    super()
  }

  render() {
    return (
      <header className='main-header'>
          <nav className='navbar navbar-toggleable-md navbar-inverse bg-inverse fixed-top'>
            <img className='logo logo_left' src={logo}
            alt='logo' />
          </nav>
        </header>
      )
  }
}