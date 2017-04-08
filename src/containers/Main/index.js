import React, { Component } from 'react'
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
      this.props.codeAction.setCode({code: params[params.length-1]})
      // () => {
      //         // after get auth token, go back to get second refresh token
      //         //first set the data we should send
      //         let data = {
      //           client_id: this.props.clientId,
      //           client_secret: this.props.clientSecret,
      //           code: this.props.code,
      //           redirect_uri: this.props.redirectUri,
      //           grant_type: this.props.grantType
      //         }

      //         //setting for ajax request
      //         let settings = {
      //           async: true,
      //           crossDomain: true,
      //           url: 'https://gitter.im/login/oauth/token',
      //           method: 'POST',
      //           headers: {
      //             'content-type': 'application/x-www-form-urlencoded',
      //             'cache-control': 'no-cache'
      //           },
      //           data: data
      //         }

      //         $.ajax(settings).done(function (response) {
      //           this.setState({
      //             access_token: response.access_token,
      //             token_type: response.token_type
      //           })
      //         });
      //       }
    }
  }

  render() {
    const url = 'https://gitter.im/login/oauth/authorize?response_type='+
    'code&'+ 'client_id='+ this.props.clientId
     + '&redirect_uri=' + this.props.redirectUri

    return(
      <div>
        fasfdasfs
        <a href={url}>oauth</a>
      </div>
      )
  }
}

  function mapStateToProps(state) {
    return {
      clientId: state.clientId,
      redirectUri: state.redirectUri,
      clientSecret: state.clientSecret,
      grantType: state.grantType
    }
  }

  function mapDispatchToProps(dispatch) {
    return {
      codeAction: bindActionCreators(codeAction, dispatch)
    }
  }

export default connect(mapStateToProps, mapDispatchToProps)(Main)