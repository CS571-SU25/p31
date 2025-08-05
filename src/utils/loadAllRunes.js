import domKeystones from "../data/runes/domination/keystones.json";
import domRunes from "../data/runes/domination/runes.json";
import insKeystones from "../data/runes/inspiration/keystones.json";
import insRunes from "../data/runes/inspiration/runes.json";
import preKeystones from "../data/runes/precision/keystones.json";
import preRunes from "../data/runes/precision/runes.json";
import resKeystones from "../data/runes/resolve/keystones.json";
import resRunes from "../data/runes/resolve/runes.json";
import sorKeystones from "../data/runes/sorcery/keystones.json";
import sorRunes from "../data/runes/sorcery/runes.json";

const runeTrees = {
    Domination: {
        keystones: domKeystones,
        runes: domRunes
    },
    Inspiration: {
        keystones: insKeystones,
        runes: insRunes
    },
    Precision: {
        keystones: preKeystones,
        runes: preRunes
    },
    Resolve: {
        keystones: resKeystones,
        runes: resRunes
    },
    Sorcery: {
        keystones: sorKeystones,
        runes: sorRunes
    },
};

export default runeTrees;