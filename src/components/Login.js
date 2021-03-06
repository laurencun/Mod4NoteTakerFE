import React, { Component } from 'react'
import { Button, Box } from '@material-ui/core';
import {login_success, signup_success} from '../actions/auth';
import {createUser} from '../actions/userAction';
import { connect } from 'react-redux';
import API_ROOT from '../apiRoot.js'


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

    login = (e) => {
      e.preventDefault()  
      const reqObj = {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(this.state)
          }
      
          fetch(`${API_ROOT}/auth`, reqObj)
          .then(resp => resp.json())
          .then(data => {
            if (data.error) {
              this.setState({
                error: data.error
              })
            } 
            else{
              this.props.login_success(data)
              localStorage.setItem('my_app_token', data.token)
            }
            this.props.history.push('/')
          })
    }

    signup = e => {
      e.preventDefault()
      //create a new user with password
      const reqObj = {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(this.state)
        }

        console.log(this.state)
    
        fetch(`${API_ROOT}/users`, reqObj)
        .then(resp => resp.json())
        .then(data => {
          if (data.error) {
            this.setState({
              error: data.error
            })
          } else {
            this.props.signup_success(data)
            //set the JWT
            localStorage.setItem('my_app_token', data.token)
            //redirect after login
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
                    <input style={{padding:5}} onChange={this.handleChange} name='password' type='password' placeholder="Password" value={this.state.password}/><br/>
                    <Button style={{margin:10}} variant="outlined" size='small' onClick={this.login}>Login</Button>
                    <Button style={{margin:10}} variant="outlined" size='small' onClick={this.signup}>Create Account</Button>
                </form>
            </div>
            </Box>
            </div>
        )
    }
}

const mapDispatchToProps = {
    signup_success,
    login_success,
    createUser
}

const mapStateToProps = state => ({
  auth: state.auth
})

export default connect(mapStateToProps, mapDispatchToProps)(Login)