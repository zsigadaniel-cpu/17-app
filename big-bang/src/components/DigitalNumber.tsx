import { ClockNumber } from "./Reducer"

export const DigitalNumber = ({ digitalNumber }: { digitalNumber: ClockNumber }) => {
    return (
        <div className={`${digitalNumber.id} number`}>
            <div className="box-size">
                <div className="top-box">
                    {digitalNumber.tens.map((el, index) => {
                        if (index > 3) {
                            return;
                        } else {
                            return (<div key={index} className={`${digitalNumber.positions[index]} ${el === 0 ? `hide` : null}`}></div>)
                        }
                    })}
                </div>
                <div className="bottom-box">
                    {digitalNumber.tens.map((el, index) => {
                        if (index > 3) {
                            return (<div key={index} className={`${digitalNumber.positions[index]} ${el === 0 ? `hide` : null}`}></div>)
                        }
                    })}
                </div>
            </div>
            <div className="box-size">
                <div className="top-box">
                    {digitalNumber.unit.map((el, index) => {
                        if (index > 3) {
                            return;
                        } else {
                            return (<div key={index} className={`${digitalNumber.positions[index]} ${el === 0 ? `hide` : null}`}></div>)
                        }
                    })}
                </div>
                <div className="bottom-box">
                    {digitalNumber.unit.map((el, index) => {
                        if (index > 3) {
                            return (<div key={index} className={`${digitalNumber.positions[index]} ${el === 0 ? `hide` : null}`}></div>)
                        }
                    })}
                </div>
            </div>
        </div>
    )
}