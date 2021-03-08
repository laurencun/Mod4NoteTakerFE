import API_ROOT from '../apiRoot.js'
import login_success from './auth.js'
const USER_URL = `${API_ROOT}/users`
const NEW_USER = 'NEW_USER'

export const createUser = (user) => dispatch =>  {
    fetch(USER_URL,{
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(user)
    })
    .then(res => res.json())
    .then(user => dispatch({
        type: NEW_USER,
        user
    })
    )
    .then(fetch(`${API_ROOT}/auth`, reqObj)
    .then(resp => resp.json())
    .then(data => {
      if (data.error) {
        this.setState({
          error: data.error
        })
      } 
      else{
        login_success(data)
        localStorage.setItem('my_app_token', data.token)
      }
      this.props.history.push('/')
    })
    )
}