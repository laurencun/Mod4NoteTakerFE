export default function usersReducer(state = [], action) {

    switch (action.type) {
      case "NEW_USER":
        console.log(action.user)
        return action.user
      default:
        return state
      }
  }