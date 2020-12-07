import React, { Component } from 'react'
import {connect} from 'react-redux'
import {revertTodoToEdit} from '../actions/todoToEditAction.js'
import {updateTodo} from '../actions/todoActions'
import { Button } from '@material-ui/core';
import ChangeIcon from '@material-ui/icons/CompareArrows'
import Box from '@material-ui/core/Box';

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

        console.log(this.state)

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
            <div style={{margin: '10vh'}}>
            <Box component="form" style={{backgroundColor: '#E0AB78', border: "1px solid black"}}>
              <form style={{padding:50, align: 'center'}}>
                <h2>Edit Note</h2>
                    <label>Title</label><br/>
                    <input onChange={this.handleChange} type="text" name="title" value={this.state.title}/><br/><br/>
                    <label>Content</label><br/>
                    <input onChange={this.handleChange} type="text" name="content" value={this.state.content}/><br/><br/>
                    <Button onClick={this.handleSubmit} style={{margin:10}} variant="outlined" size='small'><ChangeIcon /></Button>
                </form>
            </Box>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {todoToEdit: state.todoToEdit}
}

export default connect(mapStateToProps, {updateTodo, revertTodoToEdit})(EditTodoForm)