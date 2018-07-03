import React, { Component } from 'react'
import Message from './Message'

const MessageList = () => {
    const messages = [
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

        return(
            <div className='MessageList'>
                {messages.map(msg => 
                <Message message={msg} key={msg.id} />
                )}
            </div>
        )
}

export default MessageList