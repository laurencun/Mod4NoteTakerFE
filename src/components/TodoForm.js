import React, { Component } from 'react'
import {connect} from 'react-redux'
import {createTodo} from '../actions/todoActions'
import Add from '@material-ui/icons/Add'
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

class TodoForm extends Component {

    state = {
        title: '',
        content: ''
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault()
        const todo = {
            title: this.state.title,
            content: this.state.content,
            completed: false,
            user_id: 1
        }
        this.setState({
            title: '',
            content: ''
        })
        this.props.createTodo(todo)

        this.props.history.push('/')
    }


    render() {

        return (
            <div>
            <React.Fragment>
            <CssBaseline />
            <Container maxWidth="sm">
              <Typography component="div" style={{ backgroundColor: '#E0AB78', border: "1px solid black", height: '90vh' }} >
                <form onSubmit={this.handleSubmit} style={{padding:200, align: 'center'}}>
                <h2>Add Note</h2>
                    <label>Title</label><br/>
                    <input onChange={this.handleChange} type="text" name="title" value={this.state.title}/><br/><br/>
                    <label>Content</label><br/>
                    <input onChange={this.handleChange} type="textarea" name="content" value={this.state.content}/><br/>
                    <br/><button><Add /></button>
                </form>
                </Typography>
            </Container>
          </React.Fragment>
            </div>
        )
    }
}

export default connect(null, {createTodo})(TodoForm)