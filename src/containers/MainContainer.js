import React, { Component } from 'react'
import {connect} from 'react-redux'
import {currentUser} from '../actions/auth'
import {fetchTodos, fetchCompleted} from '../actions/todoActions'
import TodoIndex from '../components/TodoIndex.js'
import Button from '@material-ui/core/Button'
import API_ROOT from '../apiRoot.js'


let toggle = true

class MainContainer extends Component {

    componentDidMount() {
        const token = localStorage.getItem('my_app_token')
        if(!token){
        this.props.history.push('/login')
        }
        else{
            //get back user associated with token
            const reqObj = {
                method: 'GET', 
                headers: {
                    Authorization: `Bearer ${token}`
                }
            }
            fetch(`${API_ROOT}/current_user`, reqObj)
            .then(res => res.json())
            .then((data) => {
                this.props.currentUser(data.user)
            })
        this.props.fetchTodos()
        }
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
                <Button style={{margin:10}} variant="outlined" size='small' onClick={this.showCompleted}>Show Completed</Button>
                :<Button style={{margin:10}} variant="outlined" size='small' onClick={this.showCompleted}>Show All</Button>
                }
                <TodoIndex todos={this.props.todos} handleEdit={this.handleEdit}/>
            </div>
        )
    
    }
}

const mapStateToProps = state => ({
    todos: state.todos,
    auth: state.auth
})

export default connect(mapStateToProps, {fetchTodos, fetchCompleted, currentUser})(MainContainer)