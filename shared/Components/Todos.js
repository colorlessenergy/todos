import { useTodosContext } from '../Context/TodoContext';

const Todos = () => {
    const { todos, setTodos } = useTodosContext();
    const setTodoDone = index => {
        const cloneTodos = JSON.parse(JSON.stringify(todos));
        let todo = cloneTodos[index];
        todo.isDone = !todo.isDone;
        cloneTodos[index] = todo;
        setTodos(cloneTodos);
    };

    const removeTodo = index => {
        const cloneTodos = JSON.parse(JSON.stringify(todos));
        cloneTodos.splice(index, 1);
        setTodos(cloneTodos);
    };

    return todos.map((todo, index) => {
        return (
            <div
                className={`todo ${todo.isDone ? 'todo--done' : ''}`}
                key={todo.id}
            >
                {todo.todo}
                <div className="todo-buttons">
                    <button className="mr-1" onClick={() => setTodoDone(index)}>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            width="24"
                            height="24"
                        >
                            <path d="M9 4h5.446a1 1 0 0 1 .848.47L18.75 10h4.408a.5.5 0 0 1 .439.74L19.637 18H19a6.01 6.01 0 0 1-1.535-.198L20.63 12H3.4l1.048 5.824A6.013 6.013 0 0 1 3 18h-.545l-1.24-6.821A1 1 0 0 1 2.197 10H3V5a1 1 0 0 1 1-1h1V1h4v3zm-4 6h11.392l-2.5-4H5v4zM3 20a5.978 5.978 0 0 0 4-1.528A5.978 5.978 0 0 0 11 20a5.978 5.978 0 0 0 4-1.528A5.978 5.978 0 0 0 19 20h2v2h-2a7.963 7.963 0 0 1-4-1.07A7.963 7.963 0 0 1 11 22a7.963 7.963 0 0 1-4-1.07A7.963 7.963 0 0 1 3 22H1v-2h2z" />
                        </svg>
                    </button>
                    <button onClick={() => removeTodo(index)}>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            width="24"
                            height="24"
                        >
                            <path d="M17 6h5v2h-2v13a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V8H2V6h5V3a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v3zm1 2H6v12h12V8zm-9 3h2v6H9v-6zm4 0h2v6h-2v-6zM9 4v2h6V4H9z" />
                        </svg>
                    </button>
                </div>
            </div>
        );
    });
};

export default Todos;
