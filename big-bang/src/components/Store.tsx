import { combineReducers, createStore } from "redux";
import { reducer, clockReducer, chartReducer } from "./Reducer";

import { composeWithDevTools } from 'redux-devtools-extension';

const combinedReducer = combineReducers({ incident: reducer, clock: clockReducer, chart: chartReducer })

export const store = createStore(combinedReducer, composeWithDevTools());
