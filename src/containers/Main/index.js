import React, { Component } from 'react'
import  realtimeClient from 'gitter-realtime-client'

let client = new realtimeClient.RealtimeClient({ token: process.env.GITTER_TOKEN })
let rooms = new realtimeClient.RoomCollection([], { client: client, listen: true })

export default class Main extends Component {
  constructor() {
    super()
    this.state = {
      data: []
    }
  }
  componentDidMount() {
    this.setState({
      data: rooms.on('add remove reset change', () => 
        rooms.toJSON()
        )
    })
  }
  render() {
    return(
      <div>
      {console.log(this.state)}
      fasfdasfs
      </div>
      )
  }
}