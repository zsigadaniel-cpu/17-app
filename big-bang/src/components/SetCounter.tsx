import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { incidentState } from "./Reducer";
import { set } from "./Actions";

const SetCounter = () => {
    const countFromStore = useSelector((state: incidentState) => state.incident.count);
    const [count, setCount] = useState(countFromStore);
    const dispatch = useDispatch();

    useEffect(() => {
        setCount(countFromStore);
    }, [countFromStore]);


    return (
        <section className="controls">
            <form onSubmit={(event) => {
                event.preventDefault();
                dispatch(set(count));
            }}>
                <label htmlFor="set-to">Set Count</label>
                <input id="set-to" type="number" value={count} onChange={(event) => setCount(parseInt(event.target.value))} />
                <input type="submit" />
            </form>
        </section>
    );
}

export default SetCounter;