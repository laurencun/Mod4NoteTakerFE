import {combineReducers} from 'redux'
import todosReducer from './todosReducer'
import todoToEditReducer from './todoToEditReducer'
import todoToShowReducer from './todoToShowReducer'
import usersReducer from './usersReducer'

const rootReducer = combineReducers({
  todos: todosReducer,
  users: usersReducer,
  todoToEdit: todoToEditReducer,
  todotoShow: todoToShowReducer
})

export default rootReducer