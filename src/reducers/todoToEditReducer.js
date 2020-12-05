export default function todoToEditReducer(state = null, action) {

  let todoToEdit;

    switch (action.type) {
        case "EDIT_TODO":
          todoToEdit = {
            id: action.todoToEdit.id,
            title: action.todoToEdit.title,
            content: action.todoToEdit.content
          }
          return todoToEdit
        case "REVERT_TODO":
          todoToEdit = null
          return todoToEdit
      default:
        return state
      }
  }