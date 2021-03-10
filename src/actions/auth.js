const LOGIN_SUCCESS = 'LOGIN_SUCCESS'
const CURRENT_USER = 'CURRENT_USER'
const SIGNUP_SUCCESS = "SIGNUP_SUCCESS"

export const signup_success = (user) => {
    return ({
    type: SIGNUP_SUCCESS,
    user
})
}

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