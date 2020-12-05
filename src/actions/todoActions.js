const BASE_URL = 'http://localhost:3000'
const TODOS_URL = `${BASE_URL}/todos`
const FETCH_TODOS = 'FETCH_TODOS'
const NEW_TODO = 'NEW_TODO'
const DELETE_TODO = 'DELETE_TODO'
const COMPLETE_TODO = 'COMPLETE_TODO'
const UPDATED_TODO = 'UPDATED_TODO'


export const fetchTodos = () => dispatch =>  {
        fetch(TODOS_URL)
        .then(res => res.json())
        .then(todos => 
            dispatch({
            type: FETCH_TODOS,
            todos
        })
    )
}

export const createTodo = (todo) => dispatch =>  {
    fetch(TODOS_URL,{
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(todo)
    })
    .then(res => res.json())
    .then(todo =>   dispatch({
        type: NEW_TODO,
        todo
    }))
}

export const deleteTodo = (id) => dispatch => {
    fetch(`http://localhost:3000/todos/${id}`, {method: 'DELETE'})
    .then(res => res.json())
    .then((todo) =>  dispatch({
        type: DELETE_TODO,
        todo
    }))
}

export const markComplete = (todo) => dispatch => {

    fetch(`http://localhost:3000/todos/${todo.id}`, {
        method: 'PATCH',
        headers: {
            'content-type': 'application/json'
        }, 
        body: JSON.stringify({
            completed: true
        })
    })
    .then(res => res.json())
    .then((updatedTodo) => dispatch({
        type: COMPLETE_TODO,
        updatedTodo
    }))
}

export const updateTodo = (todo) => dispatch => {
    console.log('updateTodo action')

    fetch(`http://localhost:3000/todos/${todo.id}`, {
        method: 'PATCH',
        headers: {
            'content-type': 'application/json'
        }, 
        body: JSON.stringify({
            title: `${todo.title}`,
            content: `${todo.content}`
        })
    })
    .then(res => res.json())
    .then((updatedTodo) => dispatch({
        type: UPDATED_TODO,
        updatedTodo
    }))
}