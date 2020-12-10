const LOGIN_SUCCESS = 'LOGIN_SUCCESS'
const CURRENT_USER = 'CURRENT_USER'

export const login_success = (user) => {
        return ({
        type: LOGIN_SUCCESS,
        user
    })
}

export const currentUser = (user) => {
    return ({
        type: CURRENT_USER,
        user
    })
}