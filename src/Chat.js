import React, { Component } from 'react'
import ChatHeader from './ChatHeader'
import MessageList from './MessageList'
import MessageForm from './MessageForm'
import base from './base'

class Chat extends Component{
    constructor(){
        super()

        this.state = {
            messages: []
        }
    }

    componentDidMount() {
        this.syncMessages()
    }

    componentDidUpdate(prevProps, _prevState, _snapshot) {
        if (prevProps.room.name !== this.props.room.name) {
          this.syncMessages()
        }
      }

    syncMessages = () => {
        if (this.messagesRef){
            base.removeBinding(this.messagesRef)
        }

        this.messagesRef = base.syncState(
            `messages/${this.props.room.name}`,
            {
              context: this,
              state: 'messages',
              asArray: true,
            }
        )
    }

    componentWillUnmount() {
        base.removeBinding(this.messagesRef)
      }

    addMessage = (body) => {
        const messages = [...this.state.messages]
        const user = this.props.user

        messages.push({
            id: `${user.uid}-${Date.now()}`,
            user,
            body,
        })
        this.setState({messages})
    }

    render(){
        return(
            <div className='Chat' style={styles}>
                <ChatHeader room={this.props.room}/>
                <MessageList messages={this.state.messages} room={this.props.room} />
                <MessageForm addMessage={this.addMessage}/>
            </div>
        )
    }
}

const styles = {
    backgroundColor: 'PeachPuff',
    flex: '1',
    display: 'flex',
    flexDirection: 'column',
    fontSize: '1.5rem',
}

export default Chat