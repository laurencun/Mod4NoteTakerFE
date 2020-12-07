const GET_TODO = 'GET_TODO'

export const getTodo = (todoToShow) => dispatch =>  { 
        dispatch({
            type: GET_TODO,
            todoToShow
        })
}