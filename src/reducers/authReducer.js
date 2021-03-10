export default function authReducer(state=null, action) {
    switch(action.type){
        case 'SIGNUP_SUCCESS':
            return action.user
        case 'LOGIN_SUCCESS':
            return action.user
        case 'CURRENT_USER':
            return action.user
        default:
            return state
    }
}