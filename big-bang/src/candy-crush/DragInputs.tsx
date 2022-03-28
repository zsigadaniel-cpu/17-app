import { useState } from "react";

const DragInputs = ({ currentColorArrangement, setCurrentColorArrangement, checkMoves, width, }: { currentColorArrangement: string[], width: number, setCurrentColorArrangement: (...arr: any[]) => void, checkMoves: (...arr: any[]) => void }) => {
    const [squareBiengDragged, setSquareBiengDragged] = useState<HTMLElement | null>();
    const [squareBiengReplaced, setSquareBiengReplaced] = useState<HTMLElement | null>();

    const dragStart = (event: React.SyntheticEvent) => {
        setSquareBiengDragged(event.target as HTMLElement);
    };

    const dragDrop = (event: React.SyntheticEvent) => {
        setSquareBiengReplaced(event.target as HTMLElement);
    };

    const dragEnd = () => {

        const squareBeingDraggedId = parseInt(squareBiengDragged?.getAttribute('data-id') as string);
        const squareBeingReplacedId = parseInt(squareBiengReplaced?.getAttribute('data-id') as string);

        currentColorArrangement[squareBeingReplacedId] = squareBiengDragged?.style.backgroundColor as string;
        currentColorArrangement[squareBeingDraggedId] = squareBiengReplaced?.style.backgroundColor as string;

        const validMoves: number[] = [
            squareBeingDraggedId - 1,
            squareBeingDraggedId - width,
            squareBeingDraggedId + 1,
            squareBeingDraggedId + width
        ];

        const isDirection = checkMoves();

        const validMove: boolean = validMoves.includes(squareBeingReplacedId);

        if (squareBeingReplacedId && validMove && isDirection) {
            setSquareBiengDragged(null);
            setSquareBiengReplaced(null);
        } else {
            currentColorArrangement[squareBeingReplacedId] = squareBiengReplaced?.style.backgroundColor as string;
            currentColorArrangement[squareBeingDraggedId] = squareBiengDragged?.style.backgroundColor as string;
            setCurrentColorArrangement([...currentColorArrangement]);
        };
    };

    return {
        dragStart,
        dragDrop,
        dragEnd,
    }
}

export default DragInputs