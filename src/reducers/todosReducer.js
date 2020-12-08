export default function todosReducer(state= [], action) {
  let updatedTodos
  switch (action.type) {
      case "FETCH_TODOS":
        return action.todos
      case "FETCH_COMPLETED":
        console.log(action.todos)
        return action.todos
      case "NEW_TODO":
        return [...state, action.todo]
      case "DELETE_TODO":
        updatedTodos = state.filter(t => t.id !== action.todo.id)
        return updatedTodos
      case "COMPLETE_TODO":
        updatedTodos = state.map(t => {
          if(t.id === action.updatedTodo.id){
            return action.updatedTodo
          }
          else{
            return t
          }
        })
        return updatedTodos
      case "STAR_TODO":
          updatedTodos = state.map(t => {
          if(t.id === action.updatedTodo.id){
            return action.updatedTodo
          }
          else{
            return t
          }
        })
        return updatedTodos
      case "UPDATED_TODO":
        updatedTodos = state.map(t => {
          if(t.id === action.updatedTodo.id){
            return action.updatedTodo
          }
          else{
            return t
          }
        })
        return updatedTodos
      default:
        return state
      }
  }