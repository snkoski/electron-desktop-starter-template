import React, { Component } from 'react'
import {
  ListView,
  ListViewSection,
  ListViewSectionHeader,
  ListviewRow,
  Text
} from 'react-desktop/macOs'

class MessageList extends Component {
  render() {
    return (
      <ListView>
        <ListViewSection>
          {this.props.messages.map((message, index) => {
            this.renderItem(message)
          })}
        </ListViewSection>
      </ListView>
    )
  }

  renderItem(message) {
    return (
      <ListviewRow key={message.id}>
        <Text color="#414141" size="13">
          {message.text}
        </Text>
      </ListviewRow>
    )
  }
}

export default MessageList
