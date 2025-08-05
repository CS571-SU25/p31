import { useState, useEffect } from "react";
import { Card, Row, Col } from "react-bootstrap";
import { components} from "react-select";
import Select from "react-select";

import {Tooltip} from "react-tooltip";

import CustomRuneOption from "../utils/CustomRuneOption"
import selectStyles from "../styles/selectStyles"
import runeTrees from "../utils/loadAllRunes";
import {loadShards} from "../utils/loadRuneData";

export default function RuneCardCreator(props) {

    //
    const runeTreeList = [
        "Domination",
        "Inspiration",
        "Precision",
        "Resolve",
        "Sorcery"
    ]
    
    const [primaryTree, setPrimaryTree] = useState("Domination");
    const [secondaryTree, setSecondaryTree] = useState("Inspiration");
    const [shards, setShards] = useState(null);

    // Data for json creation
    const [selectedKeystone, setSelectedKeystone] = useState(null);
    const [selectedPrimaryRunes, setSelectedPrimaryRunes] = useState(["","",""]);
    const [selectedSecondaryRunes, setSelectedSecondaryRunes] = useState(["",""]);
    const [selectedShards, setSelectedShards] = useState(["","",""]);

    const {keystones: primaryKeystones, runes: primaryRunes} = runeTrees[primaryTree]
    const {keystones: secondaryKeystones, runes: secondaryRunes} = runeTrees[secondaryTree]
    const [shardGroups, setShardGroups] = useState([]);

    // Load Shards
    useEffect(() => {
        loadShards().then(data => {
            setShards(data);
            const grouped = [
                data.slice(0,3),
                data.slice(3,6),
                data.slice(6,9)
            ]
            setShardGroups(grouped);
        })
    
    }, [])

    // Default Tree Data for state
    useEffect(() => {
        props.setRunePage((prev) => ({...prev, primaryTree: "domination"}))
    }, [])
    // Reset Keystone + Primary runes on Tree Change
    useEffect(() => {
        setSelectedKeystone({
            value: primaryKeystones[0].name,
            label: primaryKeystones[0].name,
        });
    }, [primaryTree, primaryKeystones])

    console.log(secondaryRunes);

    return (
        <div>
            <h1>Set Runepage</h1>
            <Row>
                <Col xs={12} md={6}>
                    <h2>Primary Tree</h2>
                    ////////////////////////////////
                    <Select 
                    options={runeTreeList.filter(tree => tree !== secondaryTree).map(tree => ({
                        value: tree,
                        label: tree
                    }))}
                    defaultValue={{label: "Domination", value: "domination"}}
                    onChange={(selectedOption) => {
                        props.setRunePage(prev => ({
                            ...prev,
                            primaryTree: selectedOption.value.toLowerCase()
                        }))
                        setPrimaryTree(selectedOption.value);
                    }}
                    styles={selectStyles}
                    placeholder="Set Primary Path"
                    />
                    <p></p>


                    <h3>Keystone</h3>
                    ////////////////////////////////
                    <Select 
                    options={primaryKeystones.map(keystone => ({
                        value: keystone.name,
                        label: keystone.name,
                        description: keystone.desc,
                        id: keystone.id
                    }))}
                    value={selectedKeystone}
                    onChange={(selectedOption) => {
                        props.setRunePage(prev => ({
                            ...prev,
                            keystone: selectedOption.id
                        }))
                        setSelectedKeystone(selectedOption);
                    }}
                    styles={{...selectStyles, menuPortal: base => ({...base, zIndex: 9999})}}
                    placeholder="Set Keystone"
                    components={{ Option: CustomRuneOption }}
                    />

                    <p></p>
                    <h3>Primary Runes</h3>
                    ////////////////////////////////
                    <Select
                    styles={{...selectStyles, menuPortal: base => ({...base, zIndex: 9999})}}
                    options={primaryRunes.filter(rune => rune.slot === 0).map(
                        rune => ({
                            value: rune.id,
                            label: rune.name,
                            description: rune.desc,
                            id: rune.id
                        })
                    )}
                    onChange={(selectedOption) => {
                        const updated = [...selectedPrimaryRunes];
                        updated[0] = selectedOption.value;
                        setSelectedPrimaryRunes(updated);
                        props.setRunePage(prev => ({
                            ...prev,
                            primaryRunes: updated
                        }))
                    }}
                    components={{ Option: CustomRuneOption }}
                    placeholder="Slot 1"
                    />
                    
                    <Select
                    styles={selectStyles}
                    options={primaryRunes.filter(rune => rune.slot === 1).map(
                        rune => ({
                            value: rune.id,
                            label: rune.name,
                            description: rune.desc,
                            id: rune.id
                        })
                    )}
                    onChange={(selectedOption) => {
                        const updated = [...selectedPrimaryRunes];
                        updated[1] = selectedOption.value;
                        setSelectedPrimaryRunes(updated);
                        props.setRunePage(prev => ({
                            ...prev,
                            primaryRunes: updated
                        }))
                    }}
                    components={{ Option: CustomRuneOption }}
                    placeholder="Slot 2"
                    />

                    <Select 
                    styles={selectStyles}
                    options={primaryRunes.filter(rune => rune.slot === 2).map(
                        rune => ({
                            value: rune.id,
                            label: rune.name,
                            description: rune.desc,
                            id: rune.id
                        })
                    )}
                    onChange={(selectedOption) => {
                        const updated = [...selectedPrimaryRunes];
                        updated[2] = selectedOption.value;
                        setSelectedPrimaryRunes(updated);
                        props.setRunePage(prev => ({
                            ...prev,
                            primaryRunes: updated
                        }))
                    }}
                    components={{ Option: CustomRuneOption }}
                    placeholder="Slot 3"
                    />
                </Col>




                <Col xs={12} md={6}>
                <h2>Secondary Tree</h2>
                ////////////////////////////////
                <Select 
                    options={runeTreeList.filter(tree => tree !== primaryTree).map(tree => ({
                        value: tree,
                        label: tree
                    }))}
                    defaultValue={{label: "Inspiration", value: "Inspiration"}}
                    onChange={(selectedOption) => {
                        props.setRunePage(prev => ({
                            ...prev,
                            secondaryTree: selectedOption.value.toLowerCase()
                        }))
                        setSecondaryTree(selectedOption.value);
                    }}
                    styles={selectStyles}
                    placeholder="Set Secondary Path"
                    />
                    <p></p>
                    {/** Can rewrite to follow client logic. Top select only picks from top 2 rows, bottom from bottom 2. Select should show all runes of a slot if that slot is selected, but not for the other */}
                    <h3>Minor Runes</h3>
                    ////////////////////////////////
                    <Select
                    options={
                        secondaryRunes.filter((rune) => 
                            !props.runePage.secondaryRunes.includes(rune.id) &&
                            !props.runePage.secondaryRunes.map(id => secondaryRunes.find(r => r.id === id)?.slot).includes(rune.slot)
                    
                    ).map(rune => ({
                            value: rune.id,
                            label: rune.name,
                            description: rune.desc
                        }))
                    }
                    onChange={(selectedOption) => {
                        const updated1 = [...selectedSecondaryRunes];
                        console.log("updated1", updated1)
                        updated1[0] = selectedOption.value;
                        setSelectedSecondaryRunes(updated1);
                        props.setRunePage(prev => ({
                            ...prev,
                            secondaryRunes: updated1
                        }))
                    }}
                    components={{ Option: CustomRuneOption }}
                    styles={selectStyles}
                    />
                    <Select 
                    options={
                        secondaryRunes.filter((rune) => 
                            !props.runePage.secondaryRunes.includes(rune.id) &&
                            !props.runePage.secondaryRunes.map(id=> secondaryRunes.find(r => r.id === id)?.slot).includes(rune.slot)
                    ).map(rune => ({
                            value: rune.id,
                            label: rune.name,
                            description: rune.desc
                        }))
                    }
                    onChange={(selectedOption) => {
                        const updated1 = [...selectedSecondaryRunes];
                        updated1[1] = selectedOption.value;
                        setSelectedSecondaryRunes(updated1);
                        props.setRunePage(prev => ({
                            ...prev,
                            secondaryRunes: updated1
                        }))
                    }}
                    components={{ Option: CustomRuneOption }}
                    styles={selectStyles}
                    />

                    <h3>Shards</h3>
                    ////////////////////////////////
                    {
                        shardGroups.map((group, i) => (
                            <Select 
                            key={i}
                            styles={selectStyles}
                            options={group.map(shard => ({
                                value: shard.id,
                                label: shard.name,
                                description: shard.desc
                            }))}
                            placeholder={`Shard Level: ${i + 1}`}
                            onChange={(selectedOption) => {
                                const updated2 = [...selectedShards];
                                updated2[i] = selectedOption.value;
                                setSelectedShards(updated2);
                                props.setRunePage(prev => ({
                                    ...prev,
                                    shards: updated2
                                }))
                            }}
                            />
                        ))
                    }

                </Col>
            </Row>
            <Tooltip
                id="runes-tooltip"
                place="right"
                style={{
                    maxWidth: "400px",
                    whiteSpace: "pre-wrap",
                    zIndex: 9999,
                    backgroundColor: "#333",
                    color: "#fff",
                    fontSize: "0.9rem",
                }}
            />
            <button onClick={() => console.log(props.runePage)}>Press</button>
        </div>
    )
}