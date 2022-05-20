import { useState } from 'react';

import { useTodosContext } from '../Context/TodoContext';

const CreateTodo = () => {
    const { setTodos, id, setId } = useTodosContext();

    const [todo, setTodo] = useState('');
    const handleInputChange = event => {
        setTodo(event.currentTarget.value);
    };

    const handleSubmit = event => {
        event.preventDefault();
        if (todo === '') {
            return;
        }

        setTodos(previousTodos => [
            ...previousTodos,
            { id, todo, isDone: false }
        ]);
        setId(previousId => previousId + 1);
        setTodo('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="add-todo">add todo</label>
            <input
                onChange={handleInputChange}
                value={todo}
                type="text"
                id="add-todo"
                className="add-todo-input"
            />
        </form>
    );
};

export default CreateTodo;
