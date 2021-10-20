import { useAnimation } from "framer-motion";
import { useState } from "react";

type borderObjectContainer = [
    {
        position: number,
        borderRadiusPosition: string,
    },
    {
        position: number,
        borderRadiusPosition: string,
    }
]

export const borderPositions: borderObjectContainer[] = [
    [
        {
            position: 0,
            borderRadiusPosition: 'borderTopLeftRadius'
        },
        {
            position: 1,
            borderRadiusPosition: 'borderTopRightRadius'
        }
    ],
    [
        {
            position: 3,
            borderRadiusPosition: 'borderBottomLeftRadius'
        },
        {
            position: 2,
            borderRadiusPosition: 'borderBottomRightRadius'
        }
    ]
]

const borderRadiusValues: (string | number)[] = [0, 0, 0, 0];

export const useBorderRadiusLogic = () => {
    const control = useAnimation();
    const [borderRadius, setBorderRadius] = useState<(string | number)[]>(borderRadiusValues);
    const [buttonMessage, setButtonMessage] = useState("");

    function copyToClipboard() {
        const copyText = document.querySelector(".border-css-values");
        const textCopy = (node: HTMLElement) => node.innerText
        navigator.clipboard.writeText(textCopy(copyText as HTMLElement));
        setButtonMessage("Value copied!");
        setTimeout(() => {
            setButtonMessage("");
        }, 1000);
    }

    const borderRadiusInputHandler = (target: HTMLInputElement, position: number, borderRadiusPosition: string) => {
        borderRadiusValues[position] = target.value ? target.value : 0;
        setBorderRadius([...borderRadiusValues]);
        control.start({
            [borderRadiusPosition]: target.value
                ? target.value + "%"
                : 0 + "%",
        });
    }

    return {
        borderRadius,
        buttonMessage,
        copyToClipboard,
        borderRadiusInputHandler,
        control
    }
}


