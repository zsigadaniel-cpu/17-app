import { createStore, compose, applyMiddleware, bindActionCreators, combineReducers } from "redux";

const Reduxing = () => {

    // const makeLouder = (string: string) => string.toUpperCase();
    // const repeatThreeTimes = (string: string) => string.repeat(3);
    // const embolden = (string: string) => string.bold();

    // const makeLouderRepeatThreeTimesEmbloden = compose(makeLouder, repeatThreeTimes, embolden);

    // console.log(makeLouderRepeatThreeTimesEmbloden('party'));

    // const initialState = { value: 0 };

    // const secondInitialState = {
    //     users: [
    //         { id: 1, name: "Daniel" },
    //         { id: 2, name: "Amara" }
    //     ],
    //     tasks: [
    //         { title: "Pet the cat" },
    //         { title: "Learn about more stuff" }
    //     ]
    // };


    // const INCREMENT = "INCREMENT";
    // const ADD = "ADD";

    // type Action = { type: string, payload: number };

    // const incrementAction = { type: INCREMENT };

    // const increment = () => ({ type: INCREMENT });
    // const add = (amount: number) => ({ type: ADD, payload: amount });


    // const reducer = (state = initialState, action: Action) => {
    //     if (action.type === INCREMENT) {
    //         return { value: state.value + 1 };
    //     };
    //     if (action.type === ADD) {
    //         return { value: state.value + action.payload };
    //     };
    //     return state;
    // };


    // const subscriber = () => console.log('SUBSCRIBER', store.getState());

    // store.subscribe(subscriber);

    // const actions = bindActionCreators({ increment, add }, store.dispatch);
    // const [dispatchIncrement, dispatchAdd] = [increment, add].map((fn) => compose(store.dispatch, fn));

    // actions.increment();
    // actions.add(100);

    // console.log(store.getState());

    // const ADD_TASK = "ADD TASK";
    // const ADD_USER = "ADD USER";

    // type SecondAction = {
    //     type: string,
    //     payload: string
    // };

    // const addTask = (title: string) => ({ type: ADD_TASK, payload: title });
    // const addUser = (name: string) => ({ type: ADD_USER, payload: name });

    // const userReducer = (users = secondInitialState.users, action: SecondAction) => {
    //     if (action.type === ADD_USER) {
    //         return [...users, action.payload];
    //     };
    //     return users;
    // }

    // const taskReducer = (tasks = secondInitialState.tasks, action: SecondAction) => {
    //     if (action.type === ADD_TASK) {
    //         return [...tasks, action.payload];
    //     };
    //     return tasks;
    // }

    // const secondReducer = (state = secondInitialState, action: SecondAction) => {
    //     if (action.type === ADD_USER) {
    //         return {
    //             ...state,
    //             users: [...state.users, action.payload],
    //         };
    //     };

    //     if (action.type === ADD_TASK) {
    //         return {
    //             ...state,
    //             tasks: [...state.tasks, action.payload],
    //         };
    //     };
    // }

    // const secondReducer = combineReducers({ users: userReducer, tasks: taskReducer });

    // const store = createStore(secondReducer as any);


    const reducer = (state: string) => state;

    // const monitorEnhancer = (createStore: (...args: any[]) => void) => 
    //  (reducer: (...args: any[]) => void, initialState: string, enhancer: (...args: any[]) => void) => {
    //     const monitoredReducer = (state: string, action: string) => {
    //         const start = performance.now();
    //         const newState = reducer(state, action);
    //         const end = performance.now();
    //         const diff = end - start;
    //         console.log(diff);
    //         return newState;
    //     };
    //     return createStore(monitoredReducer, initialState, enhancer)
    // };

    const loginMiddleware = (store: any) => (next: (...args: any[]) => void) => (action: string) => {
        console.log("old state", store.getState(), action);
        next(action);
        console.log("new state", store.getState(), action);
    }

    const store = createStore(reducer as any, applyMiddleware(loginMiddleware));

    store.dispatch({ type: "Hello" });

    return (
        <h1>reduxing stuff</h1>
    );
}

export default Reduxing;