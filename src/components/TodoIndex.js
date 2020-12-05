import Todo from '/Users/lauren/Flatiron/note-taker-fe/src/components/Todo.js'


export default function TodoIndex({todos}) {

    const sortedTodos = todos.sort((a, b) => a.completed - b.completed)

    return (
        <div>
            {sortedTodos.map(todo => 
                <Todo key={todo.id} todo={todo} />
            )}
        </div>
    )
}
