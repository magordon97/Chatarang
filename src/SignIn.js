import React, { Component } from 'react'

class SignIn extends Component {
    state={
        email: '',
    }

    handleChange = (ev) => {
        this.setState({ email: ev.target.value })
      }
    
      handleSubmit = (ev) => {
        ev.preventDefault()
        this.props.handleAuth({
          uid: `${this.state.email}-abcd1234`,
          displayName: this.state.email,
          email: this.state.email,
        })
      }

    render(){
        return(
            <div className="SignIn">
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor='email'>Email</label>
                    <input
                        required
                        autoFocus
                        type='email'
                        name='email'
                        value={this.state.email}
                        onChange={this.handleChange}
                    />
                    <button
                        type='submit'
                    >
                    Sign in
                    </button>
                </form>
            </div>
        )
    }

}

export default SignIn