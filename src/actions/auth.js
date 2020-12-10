const LOGIN_SUCCESS = 'LOGIN_SUCCESS'

export const login_success = (user) => {
        return ({
        type: LOGIN_SUCCESS,
        user
    })
}