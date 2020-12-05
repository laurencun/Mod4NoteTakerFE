const EDIT_TODO = 'EDIT_TODO'
const REVERT_TODO = 'REVERT_TODO'

export const editTodo = (todoToEdit) => {
    return {
        type: EDIT_TODO,
        todoToEdit
    }
}

export const revertTodoToEdit = (todoToRevert) => {
    return {
        type: REVERT_TODO,
        todoToRevert
    }
}