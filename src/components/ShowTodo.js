import {Component} from 'react'
import {connect} from 'react-redux'

import Button from '@material-ui/core/Button';
import DoneIcon from '@material-ui/icons/Done'
import EditIcon from '@material-ui/icons/Edit'
import DeleteIcon from '@material-ui/icons/Delete'

import {fetchTodoToShow} from '../actions/todoToShowAction'
import {editTodo} from '../actions/todoToEditAction.js'
import {deleteTodo, markComplete} from '../actions/todoActions'


class ShowTodo extends Component {

    componentDidMount() {
        this.props.fetchTodoToShow(window.location.href.split('/')[4])
     }

    render() {

        const handleDelete = (id) => {
            deleteTodo(id)
        }
    
        const handleComplete = () => {
            markComplete(this.props.todoToShow)
        }
    
        const handleEdit = (todo) => {
            this.props.history.push(`/edit/${this.props.todoToShow.id}`)
            editTodo(todo)
        }

        const handleBack = () => {
            this.props.history.push('/')
        }

    return (

         <div>
                {this.props.todoToShow != null ?
                 <div>
                       <h3>{this.props.todoToShow.title}</h3>          
                       <p style={{textDecoration: this.props.todoToShow.completed ? 
                       'line-through' : 'none'}}>{this.props.todoToShow.content}</p>
       
                       {this.props.todoToShow.title ?
                       <div>
                           {this.props.todoToShow.completed === false ?
                       <div>
                       <Button style={{margin:10}} variant="outlined" size='smaller' onClick={handleComplete}><DoneIcon /></Button>
                       <Button style={{margin:10}} variant="outlined" size='smaller' onClick={() => handleEdit(this.props.todoToShow)}><EditIcon /></Button>
                       <Button style={{margin:10}} variant="outlined" size='smaller' onClick={handleDelete}><DeleteIcon /></Button>
                       </div>
                       :<Button style={{margin:10}} variant="outlined" size='smaller' onClick={() => deleteTodo(this.props.todoToShow.id)}><DeleteIcon /></Button>}
                       </div>
                       : null}
                </div>
                :
                <h2>sorry, couldn't find todo</h2>
                }
                <Button style={{margin:10}} variant="outlined" size='smaller' onClick={handleBack}>Back To All Notes</Button>
        </div>
    )
    }
}


const mapStateToProps = state => {
    return {todoToShow: state.todoToShow}
}

export default connect(mapStateToProps, {deleteTodo, editTodo, fetchTodoToShow, markComplete})(ShowTodo)