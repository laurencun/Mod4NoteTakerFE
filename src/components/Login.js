import React, { Component } from 'react'
import { Button, Box } from '@material-ui/core';


export default class Login extends Component {
    render() {

        const login = () => {
            this.props.history.push('/')
        }

        return (
            <div style={{margin: '10vh'}}>
            <Box style={{backgroundColor: '#E0AB78', border: "1px solid black"}}>
            <div style={{padding:50, align: 'center'}}>
                <h2>Welcome</h2>
                <form>
                    <input name='username' type='text' placeholder="Enter Username"/>
                    <Button style={{margin:10}} variant="outlined" size='small' onClick={login}>Login</Button>
                </form>
            </div>
            </Box>
            </div>
        )
    }
}
