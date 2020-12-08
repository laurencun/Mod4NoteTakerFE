const BASE_URL = 'http://localhost:3000'
const TODOS_URL = `${BASE_URL}/todos`
const LOGIN_SUCCESS = 'LOGIN_SUCCESS'

export const login_success = (formData) => dispatch => {
    const reqObj = {
        method: 'POST',
        headers: {
            'content-type': 'application.json'
        },
        body: JSON.stringify(formData)
    }
    fetch(`BASE_URL/auth`, reqObj)
    .then(res => res.json())
    .then((userData) => {console.log(userData)}
    //     dispatch({
    //     type: LOGIN_SUCCESS,
    //     userData
    // })
    )
}