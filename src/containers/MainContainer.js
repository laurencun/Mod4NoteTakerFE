import React, { Component } from 'react'
import {connect} from 'react-redux'
import {fetchTodos, fetchCompleted} from '../actions/todoActions'
import TodoIndex from '/Users/lauren/Flatiron/note-taker-fe/src/components/TodoIndex.js'
import Button from '@material-ui/core/Button'

let toggle = true

class MainContainer extends Component {

    componentDidMount() {
        this.props.fetchTodos()
    }

    showCompleted = () => {
        toggle = !toggle
        if (toggle === false){
        this.props.fetchCompleted()
        }
        else {
            this.props.fetchTodos()
        }
    }

    render() {

        return (
            <div >
                {toggle === true ?
                <Button style={{margin:10}} variant="outlined" size='smaller' onClick={this.showCompleted}>Show Completed</Button>
                :<Button style={{margin:10}} variant="outlined" size='smaller' onClick={this.showCompleted}>Show All</Button>
                }
                <TodoIndex todos={this.props.todos} handleEdit={this.handleEdit}/>
            </div>
        )
    
    }
}

const mapStateToProps = state => ({
    todos: state.todos
})

export default connect(mapStateToProps, {fetchTodos, fetchCompleted})(MainContainer)