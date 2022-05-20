import { createContext, useContext, useState } from 'react';

const TodosContext = createContext({
    todos: [],
    setTodos: () => {},
    id: 1,
    setId: () => {}
});

export const TodosContextProvider = ({ children }) => {
    const [todos, setTodos] = useState([
        { id: 0, todo: 'drink water', isDone: false }
    ]);
    const [id, setId] = useState(1);
    return (
        <TodosContext.Provider value={{ todos, setTodos, id, setId }}>
            {children}
        </TodosContext.Provider>
    );
};

export const useTodosContext = () => useContext(TodosContext);
