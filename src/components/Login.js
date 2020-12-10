import React, { Component } from 'react'
import { Button, Box } from '@material-ui/core';
import {login_success} from '../actions/auth';
import { connect } from 'react-redux';


class Login extends Component {

    state = {
        username: '', 
        password: '',
        error: null
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name] : event.target.value
        })
    }

    login = () => {
        const reqObj = {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(this.state)
          }
      
          fetch('http://localhost:3000/auth', reqObj)
          .then(resp => resp.json())
          .then(data => {
            if (data.error) {
              this.setState({
                error: data.error
              })
            } else {
              this.props.login_success(data)
              this.props.history.push('/')
            }
          })
    }

    render() {

        return (
            <div style={{margin: '10vh'}}>
        {this.state.error ? <h4 style={{color: 'red'}}>{this.state.error}</h4> : null}
            <Box style={{backgroundColor: '#E0AB78', border: "1px solid black"}}>
            <div style={{padding:50, align: 'center'}}>
                <h2>Welcome</h2>
                <form >
                    <input style={{padding:5}} onChange={this.handleChange} name='username' type='text' placeholder="Username" value={this.state.username}/><br/>
                    <input style={{padding:5}} onChange={this.handleChange} name='password' type='text' placeholder="Password" value={this.state.password}/><br/>
                    <Button style={{margin:10}} variant="outlined" size='small' onClick={this.login}>Login</Button>
                </form>
            </div>
            </Box>
            </div>
        )
    }
}

const mapDispatchToProps = {
    login_success
}

export default connect(null, mapDispatchToProps)(Login)