const GET_TODO = 'GET_TODO'

export const fetchTodoToShow = (todoId) => dispatch => {
    
    fetch(`http://localhost:3000/todos/${todoId}`)
    .then(res => res.json())
    .then(todoToShow => 
        dispatch({
            type: GET_TODO,
            todoToShow
        }))
}