import {Component} from 'react'
import { connect } from 'react-redux'
import Todo from '../components/Todo.js'



class TodoIndex extends Component {

    render() {

    const filterCompletedTodos = this.props.todos.sort((a, b) => a.completed - b.completed)
    const sortedByStarTodos = filterCompletedTodos.sort((b, a) => a.starred - b.starred)


    return (
        <div>
            
            {sortedByStarTodos.map(todo => 
                <Todo key={todo.id} todo={todo} />
            )}
        </div>
    )
    }
}

export default connect()(TodoIndex)
