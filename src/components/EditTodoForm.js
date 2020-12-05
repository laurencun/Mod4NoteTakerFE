import React, { Component } from 'react'
import {connect} from 'react-redux'
import {revertTodoToEdit} from '../actions/todoToEditAction.js'
import {updateTodo} from '../actions/todoActions'

class EditTodoForm extends Component {
    constructor(props){
        super(props)
        this.state = {
            id: '',
            title: '',
            content: ''
        }
    }

    componentDidUpdate(prevProps, prevState){
        if (this.props.todoToEdit && prevState.title === '') {
            this.setState({
                id: this.props.todoToEdit.id,
                title: this.props.todoToEdit.title,
                content: this.props.todoToEdit.content
            })
        }
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault()

        this.props.updateTodo(this.state)
        this.props.revertTodoToEdit(this.state)
        
        this.setState({
            title: '',
            content: ''
        })

        this.props.history.push('/')
    }


    render() {


        return (
            <div>
                <h3>Edit Note</h3>
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

const mapStateToProps = state => {
    return {todoToEdit: state.todoToEdit}
}

export default connect(mapStateToProps, {updateTodo, revertTodoToEdit})(EditTodoForm)