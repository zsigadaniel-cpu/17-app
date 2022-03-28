import { useCallback, useEffect, createContext, useContext } from "react";
import { createGlobalState } from "react-use";

interface Todo {
    id: number,
    done: boolean,
    text: string
}


type UseTodosManagerResult = ReturnType<typeof useTodosManager>

const useGlobalTodos = createGlobalState<Todo[]>([]);

const TodoContext = createContext<UseTodosManagerResult>({
    todos: [],
    addTodo: () => { },
    removeTodo: () => { },
});

function useTodosManager(initialTodos: Todo[]): {
    todos: Todo[];
    addTodo: (text: string) => void;
    removeTodo: (id: number) => void;
} {
    const [todos, setTodos] = useGlobalTodos();

    useEffect(() => {
        setTodos(initialTodos);
    }, [initialTodos, setTodos]);

    const addTodo = useCallback((text: string) => {
        setTodos([
            ...todos,
            {
                id: todos.length,
                text: text,
                done: false,
            }
        ])
    }, [todos, setTodos]);

    const removeTodo = useCallback((removeId: number) => {
        setTodos(todos.filter(({ id }) => id !== removeId))
    }, [todos, setTodos]);

    return { todos, addTodo, removeTodo };
}

export const TodosProvider: React.FunctionComponent<{
    initialTodos: Todo[];
}> = ({ initialTodos, children }) => (
    <TodoContext.Provider value={useTodosManager(initialTodos)}>
        {children}
    </TodoContext.Provider >
)

export const useTodos = (): Todo[] => {
    const { todos } = useContext(TodoContext);
    return todos
}

export const useAddTodo = (): UseTodosManagerResult["addTodo"] => {
    const { addTodo } = useContext(TodoContext);
    return addTodo;
}

export const useRemoveTodo = (): UseTodosManagerResult["removeTodo"] => {
    const { removeTodo } = useContext(TodoContext);
    return removeTodo;
}