import React from 'react'
import {connect} from 'react-redux'
// import {Link} from 'react-router-dom'
import {editTodo} from '../actions/todoToEditAction.js'
import {deleteTodo, markComplete} from '../actions/todoActions'
import {useHistory} from 'react-router'

import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import DoneIcon from '@material-ui/icons/Done'
import EditIcon from '@material-ui/icons/Edit'
import DeleteIcon from '@material-ui/icons/Delete'

const Todo = ({todo, deleteTodo, editTodo, markComplete}) => {

    const history = useHistory()

    const handleDelete = () => {
        deleteTodo(todo.id)
    }

    const handleComplete = () => {
        markComplete(todo)
    }

    const handleEdit = (todo) => {
        history.push(`/edit/${todo.id}`)
        editTodo(todo)
    }

    const useStyles = makeStyles((theme) => ({
        root: {
          display: 'flex',
          '& > *': {
            margin: theme.spacing(1),
            width: theme.spacing(16),
            height: theme.spacing(16)
          },
        },
      }));

      function PaperStyled() {
          const classes = useStyles();
          return <Paper classname={classes.root}>
                <h3>{todo.title}</h3>
                
                <p style={{textDecoration: todo.completed ? 
                'line-through' : 'none'}}>{todo.content}</p>

                {todo.title ?
                <div>
                    {todo.completed === false ?
                <div>
                <Button style={{margin:10}} variant="outlined" size='smaller' onClick={handleComplete}><DoneIcon /></Button>
                <Button style={{margin:10}} variant="outlined" size='smaller' onClick={() => handleEdit(todo)}><EditIcon /></Button>
                <Button style={{margin:10}} variant="outlined" size='smaller' onClick={handleDelete}><DeleteIcon /></Button>
                </div>
                :<Button style={{margin:10}} variant="outlined" size='smaller' onClick={handleDelete}><DeleteIcon /></Button>}
                </div>
                : null}
          </Paper>
      }



    return (
        <div>
            <PaperStyled />
        </div>
    )
}

export default connect(null, {deleteTodo, editTodo, markComplete})(Todo)