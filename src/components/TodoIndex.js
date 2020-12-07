import {Component} from 'react'
import { connect } from 'react-redux'
import Todo from '../components/Todo.js'
// import ShowTodo from '../components/ShowTodo.js'
// import {getTodo} from '../actions/todoToShowAction'


class TodoIndex extends Component {

    render() {

    const sortedTodos = this.props.todos.sort((a, b) => a.completed - b.completed)

    // const findTodo = () => {
    //     getTodo(window.location.href.split('/')[3])
    // }

    return (
        <div>
            {/* <ShowTodo todoToShow={this.findTodo}/> */}
            {sortedTodos.map(todo => 
                <Todo key={todo.id} todo={todo} />
            )}
        </div>
    )
    }
}

export default connect()(TodoIndex)
