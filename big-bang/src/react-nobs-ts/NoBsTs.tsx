import { render } from "@testing-library/react";
import { useCallback, useRef } from "react";
import { useTodos, useAddTodo, useRemoveTodo, TodosProvider } from "./useTodos"

// interface Payload {
//     test: string
// }

// const useNumber = (initialValue: number) => useState<number>(initialValue);

// type UseNumberValue = ReturnType<typeof useNumber>[0];
// type UseNumberSetValue = ReturnType<typeof useNumber>[1];

function UL<T>({ items, render, itemClick }: React.DetailedHTMLProps<React.HTMLAttributes<HTMLUListElement>, HTMLUListElement> & { items: T[], render: (item: T) => React.ReactNode, itemClick: (item: T) => void }) {
    return (
        <ul>
            {items.map((item, index) => (
                <li onClick={() => itemClick(item)} key={index}>{render(item)}</li>
            ))}
        </ul>
    )
}

function NoBsTs() {
    const todos = useTodos();
    const addTodo = useAddTodo();
    const removeTodo = useRemoveTodo();
    // const { todos, addTodo, removeTodo } = useTodos([
    //     { id: 0, text: "Bang bang bing", done: false }
    // ]);
    // const [payload, setPayload] = useState<Payload | null>(null);
    // const [value, setValue] = useNumber(0)

    const Button: React.FunctionComponent<React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>> & { title?: string } = ({ title, children, style, ...rest }) => (
        <button {...rest} style={{ ...style, backgroundColor: "black", color: 'white', fontSize: "15px", border: "none", padding: "5px" }}>{title ?? children}</button>
    )

    // useEffect(() => {
    //     fetch("/data.json").then(resp => resp.json()).then(data => {
    //         setPayload(data)
    //     })
    // }, [])

    // const onListClick = useCallback((item: string) => {
    //     alert(item)
    // }, [])

    // const Incrementor: React.FunctionComponent<{
    //     value: UseNumberValue;
    //     setValue: UseNumberSetValue;
    // }> = ({ value, setValue }) => (
    //     <Button onClick={() => setValue(value + 1)} title={`Add - ${value}`} />
    // )

    const Box: React.FunctionComponent = ({ children }) => (
        <div
            style={{
                padding: "1rem",
                color: "coral",
                fontWeight: "bold"
            }}
        >
            <h1>{children}</h1>
        </div>
    )

    // const List: React.FunctionComponent<{ items: string[]; onClick?: (item: string) => void }> = ({ items, onClick }) => (
    //     <ul>
    //         {items.map((item, index) => (
    //             <li key={index} onClick={() => onClick?.(item)}>{item}</li>
    //         ))}
    //     </ul>
    // )

    const newTodoRef = useRef<HTMLInputElement>(null);

    const onAddTodo = useCallback(() => {
        if (newTodoRef.current) {
            addTodo(newTodoRef.current.value);
            newTodoRef.current.value = "";
        }
    }, [addTodo])

    return (
        <div>
            <Box>No bs ts</Box>
            {/* <List items={["one", "two", "three"]} onClick={onListClick} /> */}
            {/* <Box>{JSON.stringify(payload)}</Box> */}
            <h1>Todos</h1>
            <UL
                items={todos}
                itemClick={(item) => alert(item.id)}
                render={(todo) => (
                    <>
                        {todo.text}
                        <button onClick={() => removeTodo(todo.id)}>Remove</button>
                    </>
                )}
            />
            {/* {todos.map(todo => (
                <div key={todo.id}>
                    {todo.text}
                    <button onClick={() => removeTodo(todo.id)}>Remove</button>
                </div>
            ))} */}
            <div>
                <input type="text" ref={newTodoRef} />
                <Button onClick={onAddTodo}>Add Todo</Button>
            </div>
            {/* <Incrementor value={value} setValue={setValue} /> */}
        </div>
    )
}

const JustShowTodos = () => {
    const todos = useTodos();
    return (
        <UL
            items={todos}
            itemClick={() => { }}
            render={(todo) => (
                <>
                    {todo.text}
                </>
            )}
        />
    )
}

const AppWrapper = () => (
    <TodosProvider initialTodos={[
        { id: 0, text: "Cats are here!", done: false }
    ]}>
        <div style={{
            display: "grid",
            gridTemplateColumns: "50% 50%"
        }}>
            <NoBsTs></NoBsTs>
            <JustShowTodos />
        </div>
    </TodosProvider>
);


export default AppWrapper