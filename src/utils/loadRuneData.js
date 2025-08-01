const runesFiles = import.meta.glob('../data/runes/*/runes.json', {eager: true});
const keystoneFiles = import.meta.glob('../data/runes/*/keystones.json', {eager: true});


export const loadRunes = async (treeName) => {

    for (const key in runesFiles) {
        if(key.includes(`${treeName}/runes.json`)) {
            return Promise.resolve(runesFiles[key]);
        }
    }

    return Promise.reject(new Error(`Unknown rune tree: ${treeName}`));
};

export const loadKeystones = async (treeName) => {

    for (const key in keystoneFiles) {
        if(key.includes(`${treeName}/keystones.json`)) {
            return Promise.resolve(keystoneFiles[key]);
        }
    }
    return Promise.reject(new Error(`Unknown rune tree: ${treeName}`));
}

export const loadShards = async () => {
    const shards = await import('../data/runes/shards.json');
    return shards.default;
}