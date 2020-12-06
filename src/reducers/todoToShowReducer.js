export default function todoToShowReducer(state = null, action) {

    let todoToshow;
  
      switch (action.type) {
          case "GET_TODO":
              console.log(action.todoToShow)
            todoToShow = action.todoToShow
            return todoToShow
          default:
                return state
      }
    }