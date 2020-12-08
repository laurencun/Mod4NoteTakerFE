import React, { Component } from 'react'
import { Button, Box } from '@material-ui/core';
import {login_success} from '../actions/auth'


export default class Login extends Component {

    state = {
        username: '', 
        password: ''
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name] : event.target.value
        })
    }

    login = () => {
        this.props.history.push('/')
        login_success(this.state)
    }

    render() {

        return (
            <div style={{margin: '10vh'}}>
            <Box style={{backgroundColor: '#E0AB78', border: "1px solid black"}}>
            <div style={{padding:50, align: 'center'}}>
                <h2>Welcome</h2>
                <form >
                    <input onChange={this.handleChange} name='username' type='text' placeholder="Username" value={this.state.username}/>
                    <input onChange={this.handleChange} name='password' type='text' placeholder="Password" value={this.state.password}/><br/>
                    <Button style={{margin:10}} variant="outlined" size='small' onClick={this.login}>Login</Button>
                </form>
            </div>
            </Box>
            </div>
        )
    }
}
