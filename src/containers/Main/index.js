import React, { Component, PropTypes } from 'react'
import $ from 'jquery'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as codeAction from '../../actions/codeAction'
// import  realtimeClient from 'gitter-realtime-client'

// let client = new realtimeClient.RealtimeClient({ token: process.env.GITTER_TOKEN })
// let rooms = new realtimeClient.RoomCollection([], { client: client, listen: true })

class Main extends Component {
  constructor() {
    super()
  }

  componentDidMount() {
    const params = this.props.location.search.split('=')

    // split url to set token
    if (params[0] == '?code' && params.length == 2) {
      this.setState({code: params[params.length-1]},
      () => {
              // after get auth token, go back to get second refresh token
              //first set the data we should send
              let data = {
                client_id: this.props.clientId,
                client_secret: this.props.clientSecret,
                code: this.state.code,
                redirect_uri: this.props.redirectUri,
                grant_type: this.props.grantType
              }

              //setting for ajax request
              let settings = {
                async: true,
                crossDomain: true,
                url: 'https://gitter.im/login/oauth/token',
                method: 'POST',
                headers: {
                  'content-type': 'application/x-www-form-urlencoded',
                  'cache-control': 'no-cache'
                },
                data: data
              }

              $.ajax(settings).done(response => {
                this.props.codeAction.setCode({
                  access_token: response.access_token,
                  token_type: response.token_type
                })
              });
            })
    }
  }

  onClick() {
    console.log(this.props)
  }

  render() {
    const url = 'https://gitter.im/login/oauth/authorize?response_type='+
    'code&'+ 'client_id='+ this.props.clientId
     + '&redirect_uri=' + this.props.redirectUri

    return(
      <div>
        fasfdasfs
        <a href={url}>oauth</a>
<button onClick={this.onClick.bind(this)}>sdfdf</button>
      </div>
      )
  }
}

  function mapStateToProps(state) {
    return {
      clientId: state.clientId,
      redirectUri: state.redirectUri,
      clientSecret: state.clientSecret,
      grantType: state.grantType,
      access_token: state.access_token,
      token_type: state.token_type
    }
  }

  function mapDispatchToProps(dispatch) {
    return {
      codeAction: bindActionCreators(codeAction, dispatch)
    }
  }

export default connect(mapStateToProps, mapDispatchToProps)(Main)

Main.propTypes = {
  clientId: PropTypes.string.isRequired,
  redirectUri: PropTypes.string.isRequired,
  clientSecret: PropTypes.string.isRequired,
  grantType: PropTypes.string.isRequired,
  access_token: PropTypes.string,
  token_type: PropTypes.string
}