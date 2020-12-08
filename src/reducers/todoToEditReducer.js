export default function todoToEditReducer(state = null, action) {

    switch (action.type) {
        case "EDIT_TODO":
          return action.todoToEdit
        case "REVERT_TODO":
          return null
      default:
        return state
      }
  }