import {Component} from 'react'
import { connect } from 'react-redux'
import Todo from '../components/Todo.js'



class TodoIndex extends Component {

    render() {

    const sortById = this.props.todos.sort((a, b) => b.id - a.id)
    const sortedByStarTodos = sortById.sort((b, a) => a.starred - b.starred)
    const filterCompletedTodos = sortedByStarTodos.sort((a, b) => a.completed - b.completed)

    return (
        <div>
            
            {filterCompletedTodos.map(todo => 
                <Todo key={todo.id} todo={todo} />
            )}
        </div>
    )
    }
}


export default connect()(TodoIndex)