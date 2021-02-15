import {combineReducers} from 'redux'
import authReducer from './authReducer'
import todosReducer from './todosReducer'
import todoToEditReducer from './todoToEditReducer'
import usersReducer from './usersReducer'

const rootReducer = combineReducers({
  todos: todosReducer,
  auth: authReducer,
  users: usersReducer,
  todoToEdit: todoToEditReducer
})

export default rootReducer