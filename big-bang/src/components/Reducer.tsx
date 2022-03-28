import { Action, ClockAction, DECREMENT, HOUR_INCREMENT, INCREMENT, MINUTE_INCREMENT, SECOND_INCREMENT, SET, CHANGE } from "./Actions";

export type incidentState = {
    incident: {
        count: number
    }
}

export type clockState = {
    clock: {
        hours: ClockNumber,
        minutes: ClockNumber,
        seconds: ClockNumber
    }
}

export type ClockNumber = {
    unit: number[],
    tens: number[],
    positions: string[],
    id: string
}



export const initialState = { count: 300 };

export const clockDisplay = {
    hours: {
        unit: [1, 1, 1, 0, 1, 1, 1],
        tens: [1, 1, 1, 0, 1, 1, 1],
        positions: ['top', 'left', 'right', 'center', 'left', 'right', 'bottom'],
        id: 'hours'
    },
    minutes: {
        unit: [1, 1, 1, 0, 1, 1, 1],
        tens: [1, 1, 1, 0, 1, 1, 1],
        positions: ['top', 'left', 'right', 'center', 'left', 'right', 'bottom'],
        id: 'minutes'
    },
    seconds: {
        unit: [1, 1, 1, 0, 1, 1, 1],
        tens: [1, 1, 1, 0, 1, 1, 1],
        positions: ['top', 'left', 'right', 'center', 'left', 'right', 'bottom'],
        id: 'seconds'
    },
}

export const hourNumbers = [
    [1, 1, 1, 0, 1, 1, 1],
    [0, 0, 1, 0, 0, 1, 0],
    [1, 0, 1, 1, 1, 0, 1],
    [1, 0, 1, 1, 0, 1, 1],
    [0, 1, 1, 1, 0, 1, 0],
    [1, 1, 0, 1, 0, 1, 1],
    [1, 1, 0, 1, 1, 1, 1],
    [1, 0, 1, 0, 0, 1, 0],
    [1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 0, 1, 1],
]

export const types = {
    bar: "bar",
    radar: "radar",
    line: "line",
    pie: "pie"
}

export type chartState = {
    bar: string,
    radar: string,
    line: string,
    pie: string
}

export type ChartAction = {
    type: string,
    payload: {
        chartType: string,
        toChange: string
    }
}

export const chartReducer = (state = types, action: ChartAction) => {
    if (action.type === CHANGE) {
        if (action.payload.chartType === 'bar') {
            return { bar: state.bar = action.payload.toChange }
        }
        if (action.payload.chartType === 'line') {
            return { line: state.line = action.payload.toChange }
        }
        if (action.payload.chartType === 'radar') {
            return { radar: state.radar = action.payload.toChange }
        }
        if (action.payload.chartType === 'pie') {
            return { pie: state.pie = action.payload.toChange }
        }
    }

    return state
}

export const reducer = (state = initialState, action: Action) => {
    if (action.type === INCREMENT) {
        return { count: state.count + 1 };
    };
    if (action.type === DECREMENT) {
        return { count: state.count - 1 };
    };
    if (action.type === SET) {
        return { count: parseInt(action.payload, 10) };
    };
    return state;
}

export const clockReducer = (state = clockDisplay, action: ClockAction) => {
    if (action.type === SECOND_INCREMENT) {
        if (action.payload.position === 'unit') {
            return { ...state, seconds: { ...state.seconds, unit: action.payload.number } }
        } else {
            return { ...state, seconds: { ...state.seconds, tens: action.payload.number } }
        }
    };
    if (action.type === MINUTE_INCREMENT) {
        if (action.payload.position === 'unit') {
            return { ...state, minutes: { ...state.minutes, unit: action.payload.number } }
        } else {
            return { ...state, minutes: { ...state.minutes, tens: action.payload.number } }
        }
    };
    if (action.type === HOUR_INCREMENT) {
        if (action.payload.position === 'unit') {
            return { ...state, hours: { ...state.hours, unit: action.payload.number } }
        } else {
            return { ...state, hours: { ...state.hours, tens: action.payload.number } }
        }
    };
    return state
}


