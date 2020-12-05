import React, { Component } from 'react'

export default class Login extends Component {
    render() {

        const loginStyle = {padding:200, align: 'center'}
        const formStyle = {padding:10}

        return (
            <div style={loginStyle}>
                <h2>Welcome</h2>
                <form>
                    <input style={formStyle} name='username' type='text' placeholder="Enter Username"/>
                    <button style={formStyle}>Login</button>
                </form>
            </div>
        )
    }
}
