import {Component} from 'react'
import {connect} from 'react-redux'

import {getTodo} from '../actions/todoToShowAction'
import {editTodo} from '../actions/todoToEditAction.js'
import {deleteTodo, markComplete} from '../actions/todoActions'


class ShowTodo extends Component {

    componentDidMount() {
        const todoId = (window.location.href.split('/')[4]) 
        fetch(`http://localhost:3000/todos/${todoId}`)
        .then(res => res.json())
        .then(todo => 
            this.props.getTodo(todo)
        )
     }

    render() {

        // const todoToShow = {
        //     id: 1,
        //     title: 'first todo title',
        //     content: 'todo content',
        //     completed: false
        // }

        const handleDelete = () => {
            deleteTodo(this.props.todoToShow.id)
        }
    
        const handleComplete = () => {
            markComplete(this.props.todoToShow)
        }
    
        const handleEdit = (todo) => {
            window.history.push(`/edit/${this.props.todoToShow.id}`)
            editTodo(this.props.todoToShow)
        }

    return (

         <div>
            <div>
                <h3>'hi'</h3>

                
                {/* <p style={{textDecoration: this.props.todoToShow.completed ? 
                'line-through' : 'none'}}>{this.props.todoToShow.content}</p>

                {this.props.todoToShow.title ?
                <div>
                    {this.props.todoToShow.completed === false ?
                <div>
                <button onClick={handleComplete}>Mark As Complete</button>
                <button onClick={() => handleEdit(this.props.todoToShow)}>Edit</button>
                </div>
                :null}
                <button onClick={handleDelete}>Delete</button>
                </div>
                : null} */}
                
                
            </div>
        </div>
    )
    }
}


const mapStateToProps = state => ({
    todoToShow: state.todoToShow
})

export default connect(mapStateToProps, {getTodo, deleteTodo, editTodo, markComplete})(ShowTodo)