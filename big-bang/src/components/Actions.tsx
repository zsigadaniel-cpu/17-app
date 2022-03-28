export const INCREMENT = "INCREMENT";
export const DECREMENT = "DECREMENT";
export const SET = "SET";
export const SECOND_INCREMENT = "SECOND INCREMENT"
export const MINUTE_INCREMENT = "MINUTE INCREMENT"
export const HOUR_INCREMENT = "HOUR INCREMENT"
export const CHANGE = "CHANGE"


export const increment = () => ({ type: INCREMENT });
export const decrement = () => ({ type: DECREMENT });
export const set = (value: number) => ({ type: SET, payload: value });

export type Action = {
    type: string,
    payload: string
}

export type ClockAction = {
    type?: string,
    payload: { number: number[], position: string };
}


export const secondIncrement = (value: { number: number[], position: string }) => ({ type: SECOND_INCREMENT, payload: value });
export const minuteIncrement = (value: { number: number[], position: string }) => ({ type: MINUTE_INCREMENT, payload: value });
export const hourIncrement = (value: { number: number[], position: string }) => ({ type: HOUR_INCREMENT, payload: value });


export const chartTypeChange = (value: { chartType: string, toChange: string }) => ({ type: CHANGE, payload: value })