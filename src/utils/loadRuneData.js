export const loadRunes = async (treeName) => {
    const runes = await import(`../data/runes/${treeName}/runes.json`);
    return runes.default;
};

export const loadKeystones = async (treeName) => {
    const keystone = await import(`../data/runes/${treeName}/keystones.json`);
    return keystone.default;
}

export const loadShards = async () => {
    const shards = await import('../data/runes/shards.json');
    return shards.default;
}