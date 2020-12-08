import {combineReducers} from 'redux'
// import authReducer from './authReducer'
import todosReducer from './todosReducer'
import todoToEditReducer from './todoToEditReducer'
import todoToShowReducer from './todoToShowReducer'
import usersReducer from './usersReducer'

const rootReducer = combineReducers({
  todos: todosReducer,
  // auth: authReducer,
  users: usersReducer,
  todoToEdit: todoToEditReducer,
  todoToShow: todoToShowReducer
})

export default rootReducer