import API_ROOT from '../apiRoot.js'
const USER_URL = `${API_ROOT}/users`
const NEW_USER = 'NEW_USER'

export const createUser = (user) => dispatch =>  {
    const reqObj =       
        {method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(user)}
    fetch(USER_URL, reqObj)
    .then(res => res.json())
    .then(user =>  dispatch({
        type: NEW_USER,
        user
    }))
}