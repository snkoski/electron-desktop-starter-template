import React, { Component } from 'react'
import { ChatManager, TokenProvider } from '@pusher/chatkit'

class Chat extends Component {
  state = {
    currentUser: null
  }

  componentDidMount() {
    const chatkit = new ChatManager({
      instanceLocator: 'v1:us1:cfcce473-08a0-4edb-a20e-a92ed1cba1e3',
      userId: this.props.currentId,
      tokenProvider: new TokenProvider({
        url: 'https://us1.pusherplatform.io/services/chatkit_token_provider/v1/cfcce473-08a0-4edb-a20e-a92ed1cba1e3/token'
      })
    })

    chatkit
      .connect()
      .then(currentUser => {
        this.setState({ currentUser })
        console.log('Bleep bloop 🤖 You are connected to Chatkit')
      })
      .catch(error => console.error('error', error))
  }

  render() {
    return (
      <div>
        <h1>Chat Screen</h1>
      </div>
    )
  }
}

export default Chat
