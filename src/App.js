import React, { Component } from 'react';
import './App.css';
import Main from './Main'

class App extends Component {
  constructor(){
    super()

    this.state = {
      user: {
        uid: '2243983',
        displayName: 'Mateo',
        email: 'magordon@anderson.edu',
      }
    }
  }

  render() {
    return (
      <div className="App">
        <Main user={this.state.user}/>
      </div>
    );
  }
}

export default App;