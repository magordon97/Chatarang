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
                    body: ' Im not Davey',
                   },
            ]
        }
    }
    render(){
        return(
            <div className='Chat'>
                <ChatHeader />
                <MessageList messages={this.state.messages}/>
                <MessageForm />
            </div>
        )
    }
}

export default Chat