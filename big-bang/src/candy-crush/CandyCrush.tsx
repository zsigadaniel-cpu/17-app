import { useEffect, useState } from 'react';
import { crushSettings } from './CandyCrushSettings';
import ScoreBoard from './ScoreBoard';
import CheckDirections from './CheckDirections';
import GameBoard from './GameBoard';
import DragInputs from './DragInputs'

const { width, candyColors } = crushSettings;

export const CandyCrush = () => {
    const [currentColorArrangement, setCurrentColorArrangement] = useState<string[]>([]);

    GameBoard({ width, candyColors, setCurrentColorArrangement });

    const { checkForColumnOfThree,
        checkForColumnOfFour,
        checkForRowOfFour,
        checkForRowOfThree, checkMoves, moveIntoSquareBelow, scoreDisplay, } = CheckDirections({ currentColorArrangement, width, candyColors });

    const { dragStart,
        dragDrop,
        dragEnd, } = DragInputs({ currentColorArrangement, setCurrentColorArrangement, checkMoves, width })

    useEffect(() => {
        const timer = setInterval(() => {
            checkForColumnOfFour();
            checkForRowOfFour();
            checkForColumnOfThree();
            checkForRowOfThree();
            moveIntoSquareBelow();
            setCurrentColorArrangement([...currentColorArrangement]);
        }, 100)
        return () => clearInterval(timer);
    }, [checkForColumnOfThree, checkForColumnOfFour, checkForRowOfThree, checkForRowOfFour, currentColorArrangement]);

    return (
        <div className="candy-crush-app">
            <div className="game">
                {currentColorArrangement.map((candyColor: string, index: number) => (
                    <img key={index} src={candyColor} alt={candyColor} data-id={index} draggable={true}
                        onDragStart={dragStart}
                        onDragOver={e => e.preventDefault()}
                        onDragEnter={e => e.preventDefault()}
                        onDragLeave={e => e.preventDefault()}
                        onDrop={dragDrop}
                        onDragEnd={dragEnd} />
                ))}
            </div>
            <ScoreBoard score={scoreDisplay} />
        </div>
    );
};