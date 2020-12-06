import {Component} from 'react'
import {connect} from 'react-redux'

import {getTodo} from '../actions/todoToShowAction'
import {editTodo} from '../actions/todoToEditAction.js'
import {deleteTodo, markComplete} from '../actions/todoActions'

class ShowTodo extends Component {


    componentDidMount() {
        getTodo(window.location.href.split('/')[3])
    }

    render() {

        const todoToShow = {
            id: 1,
            title: 'first todo title',
            content: 'todo content',
            completed: false
        }

        const handleDelete = () => {
            deleteTodo(todoToShow.id)
        }
    
        const handleComplete = () => {
            markComplete(todoToShow)
        }
    
        const handleEdit = (todo) => {
            window.history.push(`/edit/${todoToShow.id}`)
            editTodo(todoToShow)
        }

    return (
        <div>
            <div>
                <h3>'hi'</h3>
                
                <p style={{textDecoration: todoToShow.completed ? 
                'line-through' : 'none'}}>{todoToShow.content}</p>

                {todoToShow.title ?
                <div>
                    {todoToShow.completed === false ?
                <div>
                <button onClick={handleComplete}>Mark As Complete</button>
                <button onClick={() => handleEdit(todoToShow)}>Edit</button>
                </div>
                :null}
                <button onClick={handleDelete}>Delete</button>
                </div>
                : null}
            </div>
        </div>
    )
}
}

const mapStateToProps = state => ({
    todoToShow: state.todoToShow
})

export default connect(mapStateToProps, {deleteTodo, editTodo, markComplete})(ShowTodo)