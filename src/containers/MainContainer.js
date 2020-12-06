import React, { Component } from 'react'
import {connect} from 'react-redux'
import {fetchTodos} from '../actions/todoActions'
import TodoIndex from '/Users/lauren/Flatiron/note-taker-fe/src/components/TodoIndex.js'


class MainContainer extends Component {

    componentDidMount() {
        this.props.fetchTodos()
    }

    render() {

        return (
            <div>
                <TodoIndex todos={this.props.todos} handleEdit={this.handleEdit}/>
            </div>
        )
    
    }
}

const mapStateToProps = state => ({
    todos: state.todos
})

export default connect(mapStateToProps, {fetchTodos})(MainContainer)