import React from 'react'
import {connect} from 'react-redux'
// import {Link} from 'react-router-dom'
import {editTodo} from '/Users/lauren/Flatiron/note-taker-fe/src/actions/todoToEditAction.js'
import {deleteTodo, markComplete} from '../actions/todoActions'

const Todo = ({todo, deleteTodo, editTodo, markComplete}) => {
    
    const handleDelete = () => {
        deleteTodo(todo.id)
    }

    const handleComplete = () => {
        markComplete(todo)
    }

    return (
        <div>
            <div>
                <h3>{todo.title}</h3>
                
                <p style={{textDecoration: todo.completed ? 
                'line-through' : 'none'}}>{todo.content}</p>

                {todo.title ?
                <div>
                    {todo.completed === false ?
                <div>
                <button onClick={handleComplete}>Mark As Complete</button>
                <button onClick={() => editTodo(todo)}>Edit</button>
                </div>
                :null}
                <button onClick={handleDelete}>Delete</button>
                </div>
                : null}
            </div>
        </div>
    )
}

export default connect(null, {deleteTodo, editTodo, markComplete})(Todo)