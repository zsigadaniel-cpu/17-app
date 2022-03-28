import { useEffect } from "react"

const GameBoard = ({ width, candyColors, setCurrentColorArrangement }: { width: number, candyColors: string[], setCurrentColorArrangement: (...args: any[]) => void }) => {
   
    useEffect(() => {
        createBoard()
    }, []);

    const createBoard = () => {
        const randomColorArrangement: string[] = [];
        for (let i = 0; i < width * width; i++) {
            const randomColor: string = candyColors[Math.floor(Math.random() * candyColors.length)];
            randomColorArrangement.push(randomColor);
        }
        setCurrentColorArrangement(randomColorArrangement);
    };
};

export default GameBoard;