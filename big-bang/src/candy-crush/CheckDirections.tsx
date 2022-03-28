import { useState } from "react";

const CheckDirections = ({ currentColorArrangement, width, candyColors }: { currentColorArrangement: string[], width: number, candyColors: string[] }) => {
    const [scoreDisplay, setScoreDisplay] = useState(0);


    const checkForColumnOfThree = () => {
        for (let i = 0; i <= 47; i++) {
            const columnOfThree: number[] = [i, i + width, i + width * 2];
            const decidedColor: string = currentColorArrangement[i];
            const isBlank = currentColorArrangement[i] === '';

            if (columnOfThree.every(square => currentColorArrangement[square] === decidedColor && !isBlank)) {
                setScoreDisplay((score) => score + 3);
                columnOfThree.forEach(square => currentColorArrangement[square] = '');
                return true;
            };
        };
    };

    const checkForColumnOfFour = () => {
        for (let i = 0; i <= 39; i++) {
            const columnOfFour: number[] = [i, i + width, i + width * 2, i + width * 3];
            const decidedColor: string = currentColorArrangement[i];
            const isBlank = currentColorArrangement[i] === '';

            if (columnOfFour.every(square => currentColorArrangement[square] === decidedColor && !isBlank)) {
                setScoreDisplay((score) => score + 4);
                columnOfFour.forEach(square => currentColorArrangement[square] = '');
                return true;
            };
        };
    };


    const checkForRowOfFour = () => {
        for (let i = 0; i < 64; i++) {
            const rowOfFour: number[] = [i, i + 1, i + 2, i + 3];
            const decidedColor: string = currentColorArrangement[i];
            const notValid = [5, 6, 7, 13, 14, 15, 21, 22, 23, 29, 30, 31, 37, 38, 39, 45, 46, 47, 54, 53, 55, 62, 63, 64];
            const isBlank = currentColorArrangement[i] === '';

            if (notValid.includes(i)) continue;

            if (rowOfFour.every(square => currentColorArrangement[square] === decidedColor && !isBlank)) {
                setScoreDisplay((score) => score + 4);
                rowOfFour.forEach(square => currentColorArrangement[square] = '');
                return true;
            };
        };
    };

    const checkForRowOfThree = () => {
        for (let i = 0; i <= 64; i++) {
            const rowOfThree: number[] = [i, i + 1, i + 2];
            const decidedColor: string = currentColorArrangement[i];
            const notValid = [6, 7, 14, 15, 22, 23, 30, 31, 38, 39, 46, 47, 54, 55, 63, 64];
            const isBlank = currentColorArrangement[i] === '';

            if (notValid.includes(i)) continue;

            if (rowOfThree.every(square => currentColorArrangement[square] === decidedColor && !isBlank)) {
                setScoreDisplay((score) => score + 3);
                rowOfThree.forEach(square => currentColorArrangement[square] = '');
                return true;
            };
        };
    };

    const moveIntoSquareBelow = () => {
        for (let i = 0; i <= 55; i++) {
            const firstRow = [0, 1, 2, 3, 4, 5, 6, 7];
            const isFirstRow: boolean = firstRow.includes(i);

            if (isFirstRow && currentColorArrangement[i] === '') {
                let randomNumber: number = Math.floor(Math.random() * candyColors.length);
                currentColorArrangement[i] = candyColors[randomNumber]
            }

            if (currentColorArrangement[i + width] === '') {
                currentColorArrangement[i + width] = currentColorArrangement[i];
                currentColorArrangement[i] = '';
            }
        }
    }

    const checkMoves = () => {
        for (let i = 0; i <= 47; i++) {
            const columnOfThree: number[] = [i, i + width, i + width * 2];
            const decidedColor: string = currentColorArrangement[i];

            if (columnOfThree.every(square => currentColorArrangement[square] === decidedColor)) {
                return true;
            };
        };

        for (let i = 0; i <= 40; i++) {
            const columnOfFour: number[] = [i, i + width, i + width * 2, i + width * 3];
            const decidedColor: string = currentColorArrangement[i];

            if (columnOfFour.every(square => currentColorArrangement[square] === decidedColor)) {
                return true;
            };
        };

        for (let i = 0; i <= 64; i++) {
            const rowOfFour: number[] = [i, i + 1, i + 2, i + 3];
            const decidedColor: string = currentColorArrangement[i];
            const notValid = [5, 6, 7, 13, 14, 15, 21, 22, 23, 29, 30, 31, 37, 38, 39, 45, 46, 47, 54, 53, 55, 62, 63, 64];

            if (notValid.includes(i)) continue;

            if (rowOfFour.every(square => currentColorArrangement[square] === decidedColor)) {
                return true;
            };
        };

        for (let i = 0; i <= 64; i++) {
            const rowOfThree: number[] = [i, i + 1, i + 2];
            const decidedColor: string = currentColorArrangement[i];
            const notValid = [6, 7, 14, 15, 22, 23, 30, 31, 38, 39, 46, 47, 54, 55, 63, 64];

            if (notValid.includes(i)) continue;

            if (rowOfThree.every(square => currentColorArrangement[square] === decidedColor)) {
                return true;
            };
        };
    }

    return {
        checkForColumnOfFour,
        checkForRowOfFour,
        checkForColumnOfThree,
        checkForRowOfThree,
        checkMoves,
        moveIntoSquareBelow,
        scoreDisplay,
    };
};

export default CheckDirections;