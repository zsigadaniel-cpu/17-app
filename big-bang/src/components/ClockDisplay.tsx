import { useSelector } from "react-redux";
import { secondIncrement, minuteIncrement, hourIncrement } from "./Actions";
import { clockState } from "./Reducer";
import { clockActions, useActions } from "./use-actions";

export const useClockDisplay = () => {
    const clockDisplay = useSelector((state: clockState) => state);
    const actions = useActions({ secondIncrement, minuteIncrement, hourIncrement }) as clockActions;
    const { clock } = clockDisplay
    return { clock, ...actions };
}
