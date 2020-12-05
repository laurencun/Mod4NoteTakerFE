import {combineReducers} from 'redux'
import todosReducer from './todosReducer'
import todoToEditReducer from './todoToEditReducer'
import usersReducer from './usersReducer'

const rootReducer = combineReducers({
  todos: todosReducer,
  users: usersReducer,
  todoToEdit: todoToEditReducer
})

export default rootReducer