import API_ROOT from '../apiRoot.js'
const TODOS_URL = `${API_ROOT}/todos`
const FETCH_TODOS = 'FETCH_TODOS'
const FETCH_COMPLETED = 'FETCH_COMPLETED'
const NEW_TODO = 'NEW_TODO'
const DELETE_TODO = 'DELETE_TODO'
const COMPLETE_TODO = 'COMPLETE_TODO'
const UPDATED_TODO = 'UPDATED_TODO'
const STAR_TODO = 'STAR_TODO'

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

export const fetchCompleted = () => dispatch =>  {
    fetch(TODOS_URL)
    .then(res => res.json())
    .then(todos =>
        dispatch({
        type: FETCH_COMPLETED,
        todos: todos.filter(t => t.completed === true)
    })
)
}

export const createTodo = (todo) => dispatch =>  {

    const newTodo = {
        title: todo.title,
        content: todo.content,
        completed: false,
        starred: false
    }

    fetch(TODOS_URL,{
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(newTodo)
    })
    .then(res => res.json())
    .then(todo =>   dispatch({
        type: NEW_TODO,
        newTodo
    }))
}

export const deleteTodo = (id) => dispatch => {
    fetch(`${API_ROOT}${id}`, {method: 'DELETE'})
    .then(res => res.json())
    .then((todo) =>  dispatch({
        type: DELETE_TODO,
        todo
    }))
}

export const markComplete = (todo) => dispatch => {
    fetch(`${API_ROOT}${todo.id}`, {
        method: 'PATCH',
        headers: {
            'content-type': 'application/json'
        }, 
        body: JSON.stringify({
            completed: true
        })
    })
    .then(res => res.json())
    .then((updatedTodo) => 
        dispatch({
        type: COMPLETE_TODO,
        updatedTodo
    }))
}

export const markStarred = (todo) => dispatch => {
    fetch(`${API_ROOT}${todo.id}`, {
        method: 'PATCH',
        headers: {
            'content-type': 'application/json'
        }, 
        body: JSON.stringify({
            starred: true
        })
    })
    .then(res => res.json())
    .then((updatedTodo) => {
        dispatch({
            type: STAR_TODO,
            updatedTodo
        })
    }
    )
}

export const markUnstarred = (todo) => dispatch => {
    fetch(`${API_ROOT}${todo.id}`, {
        method: 'PATCH',
        headers: {
            'content-type': 'application/json'
        }, 
        body: JSON.stringify({
            starred: false
        })
    })
    .then(res => res.json())
    .then((updatedTodo) => {
        dispatch({
            type: STAR_TODO,
            updatedTodo
        })
    }
    )
}

export const updateTodo = (todo) => dispatch => {

    fetch(`${API_ROOT}${todo.id}`, {
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