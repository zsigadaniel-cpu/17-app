import earth from "../resources/candyImages/earth.png";
import magic from "../resources/candyImages/magic.png";
import hades from "../resources/candyImages/hades.png";
import partialhades from "../resources/candyImages/partialhades.png";
import pluto from "../resources/candyImages/pluto.png";
import outofplace from "../resources/candyImages/outofplace.png";

export type candyCrushSettings = {
    width: number,
    candyColors: string[]
};

export const crushSettings: candyCrushSettings = {
    width: 8,
    candyColors: [earth, magic, hades, partialhades, pluto, outofplace]
};