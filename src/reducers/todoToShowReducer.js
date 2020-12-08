export default function todoToShowReducer(state = null, action) {
  
      switch (action.type) {
          case 'GET_TODO':
            return action.todoToShow
          default:
            return state
      }
    }