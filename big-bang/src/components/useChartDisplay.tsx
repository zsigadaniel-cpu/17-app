import { useSelector } from "react-redux";
import { chartTypeChange } from "./Actions";
import { chartState } from "./Reducer";
import { chartActions, useActions } from "./use-actions";
export const useChartDisplay = () => {
    const chartDysplay = useSelector((state: chartState) => state);
    const actions = useActions({ chartTypeChange }) as chartActions;
    return { chartDysplay, ...actions };
}
