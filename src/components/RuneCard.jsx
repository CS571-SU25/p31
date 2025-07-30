import { Card, Col, Container, Row } from "react-bootstrap"
import { useEffect, useState } from "react";
import { loadRunes, loadKeystones, loadShards } from "../utils/loadRuneData";

export default function Runecard(props) {
    const [keystoneData, setKeystoneData] = useState(null); // Keystone object
    const [primaryData, setPrimaryData] = useState([]); // List of primary runes for this particular page
    const [secondaryData, setSecondaryData] = useState([]); // List of secondary runes for this particular page 
    const [shardData, setShardData] = useState([]); // List of shards for this page


    // Data for fetching jsons
    const primaryTree = props.primaryTree;
    const secondaryTree = props.secondaryTree;

    // Guide specific Data
    const keystone = props.keystone;
    const primaryRunes = props.primaryRunes;
    const secondaryRunes = props.secondaryRunes;
    const shards = props.shards;

    useEffect(() => {
        console.log("Runecard Props:", props);
    }, [])

    // Load required objects
    useEffect(() => {
        const loadAll = async () => {
            const [keystoneList, primaryList, secondaryList, shardList] = await Promise.all([
                loadKeystones(primaryTree),
                loadRunes(primaryTree),
                loadRunes(secondaryTree),
                loadShards()
            ]);

            setKeystoneData(keystoneList.find(k => k.id === keystone));
            console.log("Set Keystone Data");
            setPrimaryData(primaryRunes.map(id => primaryList.find(r => r.id === id)));
            console.log("Set Primary Data");
            setSecondaryData(secondaryRunes.map(id =>secondaryList.find(r => r.id === id)));
            console.log("Set Secondary Data");
            setShardData(shards.map(id => shardList.find(s => s.id === id)));
            console.log("Set Shard Data");
        };

        loadAll();
    }, [primaryTree, secondaryTree, keystone, primaryRunes, secondaryRunes]);


    const renderKeystoneCard = (keystone) => {
        console.log("Rendering keystone:", keystone);

        return (
            <Col xs="auto" key={keystone.id}>
                <Card className="text-center p-2" style={{ width: '70px'}}>
                    <Card.Img
                        variant="top"
                        src={`../../public/rune_icons/${keystone.icon}`}
                        alt={keystone.name}
                        style={{ width: '40px', height: '40px', objectFit: 'contain', margin: '0 auto' }}
                    />
                    <Card.Body className="p-1">
                        <Card.Text style={{ fontSize: '0.75rem' }}>{keystone.name}</Card.Text>
                    </Card.Body>
                </Card>
            </Col>
        )
    };

    const renderRuneCard = (rune) => {
        console.log("Rendering rune:", rune);

        return (
            <Col xs="auto" key={rune.id}>
                <Card className="text-center p-2" style={{ width: '70px'}}>
                    <Card.Img
                        variant="top"
                        src={`../../public/rune_icons/${rune.icon}`}
                        alt={rune.name}
                        style={{ width: '40px', height: '40px', objectFit: 'contain', margin: '0 auto' }}
                    />
                    <Card.Body className="p-1">
                        <Card.Text style={{ fontSize: '0.75rem' }}>{rune.name}</Card.Text>
                    </Card.Body>
                </Card>
            </Col>
        )
    };

    const renderShardCard = (shard) => (
        <Col xs="auto" key={shard.id}>
            <Card className="text-center p-2" style={{ width: '70px'}}>
                <Card.Img
                    variant="top"
                    src={`../../public/rune_icons/${shard.icon}`}
                    alt={shard.name}
                    style={{ width: '40px', height: '40px', objectFit: 'contain', margin: '0 auto' }}
                />
                <Card.Body className="p-1">
                    <Card.Text style={{ fontSize: '0.75rem' }}>{shard.name}</Card.Text>
                </Card.Body>
            </Card>
        </Col>
    );

    if(shardData.length === 0) {
        return <p>Loading rune page...</p>
    }

    return(
        <Container>
            <Row className="g-2 justify-content-start">
                {keystoneData && renderKeystoneCard(keystoneData)}
                {primaryData.map(r => r && renderRuneCard(r))}
                {secondaryData.map(r => r && renderRuneCard(r))}
                {shardData.map(s => s && renderShardCard(s))}
            </Row>
        </Container>
    )
}