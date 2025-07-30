## Below is how each json object mocked is formatted. You will find the structure and fields below in a tree

### guides.json

id: fake id for keying
title: the title of the guide
champion: champion the guide is for
items: a simple full build path (an array of item names)
runePages: array of runePages. A guide can have multiple.
[
    runePage: {
        note: note indicating some info about tree. Such "Main page"
        primaryTree: what path (domination, precision, etc) for primary tree
        keystone: keystone for runePage
        primaryRunes: which runes of the primary tree are highlighted (not perfect, issues can occur with updates of trees in game)
        secondaryTree: what path second tree is. 
        secondaryRunes: which runes of secondary tree are highlighted. A value of -1 indicates no rune chosen for this layer. Suffers from possible issues mentioned in primary runes.
        shards: array indicating which stat shard is selected.
        summonerSpells: [spell 1, spell 2]
    }, multiple rune pages can follow.
]
skillOrder: 18 item array, each letter being an indication of what spell is leveled up

