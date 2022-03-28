import { useSelector } from "react-redux"
import { incidentState } from "./Reducer";
import { actionsFunctions, useActions } from "./use-actions";
import { increment, decrement, set } from './Actions'


export const useCounter = () => {
    const count = useSelector((state: incidentState) => state.incident.count);
    const actions = useActions({ increment, decrement, set }) as actionsFunctions;
    return { count, ...actions }
}