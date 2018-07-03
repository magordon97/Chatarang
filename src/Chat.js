import React, { Component } from 'react'
import ChatHeader from './ChatHeader'
import MessageList from './MessageList'
import MessageForm from './MessageForm'

class Chat extends Component{
    constructor(){
        super()

        this.state = {
            messages: [
                {id: 1,
                 user:{
                     uid: '2243983',
                     displayName: 'Mateo',
                     email: 'magordon@anderson.edu',
                 },
                 body: ' Whats up everbody?',
                },
                {id: 2,
                    user:{
                        uid: '123321',
                        displayName: 'Not Davey',
                        email: 'davey@fretless.com',
                    },
                    body: ' I\'m not Davey',
                   },
            ]
        }
    }

    addMessage = (body) => {
        const messages = [...this.state.messages]

        messages.push({
            id: Date.now(),
            user: {
                uid: '112233',
                displayName: 'Bob',
                email: 'bob@bobrulez.com',
            },
            body: body,
        })
        this.setState({messages: messages})
    }

    render(){
        return(
            <div className='Chat' style={styles}>
                <ChatHeader />
                <MessageList messages={this.state.messages}/>
                <MessageForm addMessage={this.addMessage}/>
            </div>
        )
    }
}

const styles = {
    backgroundColor: 'PeachPuff',
}

export default Chat