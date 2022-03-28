import { useMemo } from "react";
import { useDispatch } from "react-redux"
import { bindActionCreators } from "redux";

export type actionsFunctions = {
    increment: () => void;
    decrement: () => void;
    set: (value: number) => void;
}

export type clockActions = {
    secondIncrement: (value: { number: number[], position: string }) => void;
    minuteIncrement: (value: { number: number[], position: string }) => void;
    hourIncrement: (value: { number: number[], position: string }) => void;
}

export type chartActions = {
    chartTypeChange: (value: { chartType: string, toChange: string }) => void;
}

export const useActions = (actions: actionsFunctions | clockActions | chartActions) => {
    const dispatch = useDispatch();
    return useMemo(() => bindActionCreators(actions, dispatch), [actions, dispatch]);
};
