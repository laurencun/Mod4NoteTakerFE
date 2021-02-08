import API_ROOT from '../apiRoot.js'
const GET_TODO = 'GET_TODO'

export const fetchTodoToShow = (todoId) => dispatch => {
    
    fetch(`${API_ROOT}${todoId}`)
    .then(res => res.json())
    .then(todoToShow => 
        dispatch({
            type: GET_TODO,
            todoToShow
        }))
}