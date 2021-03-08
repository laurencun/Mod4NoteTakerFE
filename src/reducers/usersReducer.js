export default function usersReducer(state = [], action) {

    switch (action.type) {
      case "NEW_USER":
        return action.user
      default:
        return state
      }
  }