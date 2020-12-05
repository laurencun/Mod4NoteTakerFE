import React, { Component } from 'react'
import {connect} from 'react-redux'
import {createTodo} from '../actions/todoActions'

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
    }


    render() {

        return (
            <div>
                <h3>Add Note</h3>
                <form onSubmit={this.handleSubmit}>
                    <label>Title</label>
                    <input onChange={this.handleChange} type="text" name="title" value={this.state.title}/>
                    <label>Content</label>
                    <input onChange={this.handleChange} type="text" name="content" value={this.state.content}/>
                    <button>Submit!</button>
                </form>
            </div>
        )
    }
}

export default connect(null, {createTodo})(TodoForm)