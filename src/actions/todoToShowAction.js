const GET_TODO = 'GET_TODO'
const BASE_URL = 'http://localhost:3000'
const TODOS_URL = `${BASE_URL}/todos`

export const getTodo = (todoId) => dispatch =>  {
        fetch(TODOS_URL/`${todoId}`)
        .then(res => res.json())
        .then(todo => 
            dispatch({
            type: GET_TODO,
            todo
        })
    )
}