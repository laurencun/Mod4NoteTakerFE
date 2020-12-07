export default function todoToShowReducer(state = null, action) {
      switch (action.type) {
          case 'GET_TODO':
            console.log(action.todoToShow)
            return action.todoToShow
          default:
            return state
      }
    }