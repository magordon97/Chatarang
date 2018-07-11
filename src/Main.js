import React, { Component } from 'react'
import Sidebar from './Sidebar'
import Chat from './Chat'

class Main extends Component{
    state = {
        room: {
          name: 'cool room',
          description: 'Only cool things here',
        },

        rooms: {
            cool: {
                name: 'cool room',
                description: 'Only cool things here',
            },
            general: {
                name: 'general',
                description: 'Chat about whatever',
              },
        
              random: {
                name: 'random',
                description: 'Wizards, memes, tacos etc.',
              },
        }
      }

    render(){
        return(
            <div className='Main' style={styles}>
                <Sidebar user={this.props.user} signOut={this.props.signOut} rooms={this.state.rooms}/>
                <Chat user={this.props.user} room={this.state.room}/>
            </div>
        )
    }
}

const styles = {
    display: 'flex',
    alignItems: 'stretch',
    height: '100vh',
}

export default Main