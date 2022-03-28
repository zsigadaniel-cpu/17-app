import { useEffect } from "react";
import { useClockDisplay } from "./ClockDisplay"
import { DigitalNumber } from "./DigitalNumber";
import { hourNumbers } from "./Reducer";
export const DigitalClock = () => {
    const { clock, secondIncrement, minuteIncrement, hourIncrement } = useClockDisplay();

    const clockStarter = (time: string[], timeFunction: (value: { number: number[], position: string }) => void) => {
        if (time.length < 2) {
            timeFunction({ number: hourNumbers[parseInt(time[0])], position: 'unit' });
            timeFunction({ number: hourNumbers[0], position: 'tens' });
        } else {
            timeFunction({ number: hourNumbers[parseInt(time[1])], position: 'unit' });
            timeFunction({ number: hourNumbers[parseInt(time[0])], position: 'tens' });
        }
    }

    const init = () => {
        const date = new Date();
        const hourArray = date.getHours().toString().split('');
        const minuteArray = date.getMinutes().toString().split('');
        const secondArray = date.getSeconds().toString().split('');
        clockStarter(secondArray, secondIncrement);
        clockStarter(minuteArray, minuteIncrement);
        clockStarter(hourArray, hourIncrement);
    }
    
    useEffect(() => {
        const secondInterval = setInterval(() => {
            init();
        }, 1000);
        return () => {
            clearInterval(secondInterval);
        }
    }, [secondIncrement, minuteIncrement, hourIncrement])

    return (
        <div className="digital-clock">
            <DigitalNumber key={clock.hours.id} digitalNumber={clock.hours} />
            <DigitalNumber key={clock.minutes.id} digitalNumber={clock.minutes} />
            <DigitalNumber key={clock.seconds.id} digitalNumber={clock.seconds} />
        </div>
    )
}