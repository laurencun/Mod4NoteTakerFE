import React, { Component } from 'react'
import {connect} from 'react-redux'
import {createTodo} from '../actions/todoActions'
import Add from '@material-ui/icons/Add'
import Box from '@material-ui/core/Box';

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
            user_id: null
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
            <div style={{margin: '10vh'}}>
            <Box component="form" style={{backgroundColor: '#E0AB78', border: "1px solid black"}}>
                <form style={{padding:50, align: 'center'}}>
                <h2>Add Note</h2>
                    <label>Title</label><br/>
                    <input onChange={this.handleChange} type="text" name="title" value={this.state.title}/><br/><br/>
                    <label>Content</label><br/>
                    <input onChange={this.handleChange} type="textarea" name="content" value={this.state.content}/><br/>
                    <br/><button onClick={this.handleSubmit}><Add /></button>
                </form>
            </Box>
            </div>
        )
    }
}

export default connect(null, {createTodo})(TodoForm)