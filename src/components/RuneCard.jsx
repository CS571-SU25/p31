import { Card, Col, Container, Row } from "react-bootstrap"
import { useEffect, useState } from "react";
import { loadRunes, loadKeystones, loadShards } from "../utils/loadRuneData";
import './RuneCard.css';

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
                <Card className="rune-card text-center p-2" style={{ width: '90px'}}>
                    <div style={{
                        backgroundColor: '#333741',
                        width: '80px',
                        height: '80px',
                        display: 'inline-block',
                        borderRadius: '4px'
                        }}>
                        <Card.Img
                            variant="top"
                            src={`/p31/rune_icons/${keystone.icon}`}
                            alt={keystone.name}
                            style={{ width: '80px', height: '80px', objectFit: 'contain', margin: '0 auto' }}
                        />
                    </div>
                    <Card.Body className="p-1">
                        <Card.Text className="rune-title" style={{ fontSize: '0.75rem' }}>{keystone.name}</Card.Text>
                    </Card.Body>
                </Card>
            </Col>
        )
    };

    const renderRuneCard = (rune) => {
        console.log("Rendering rune:", rune);

        return (
            <Col xs="auto" key={rune.id}>
                <Card className="rune-card text-center p-2" style={{ width: '90px'}}>
                    <div style={{
                        backgroundColor: '#333741',
                        width: '80px',
                        height: '80px',
                        display: 'inline-block',
                        borderRadius: '4px'
                        }}>
                        <Card.Img
                            variant="top"
                            src={`../../public/rune_icons/${rune.icon}`}
                            alt={rune.name}
                            style={{ width: '80px', height: '80px', objectFit: 'contain', margin: '0 auto' }}
                        />
                    </div>

                    <Card.Body className="p-1">
                        <Card.Text className="rune-title" style={{ fontSize: '0.75rem' }}>{rune.name}</Card.Text>
                    </Card.Body>
                </Card>
            </Col>
        )
    };

    const renderShardCard = (shard) => (
        <Col xs="auto" key={shard.id}>
            <Card className="rune-card text-center p-2" style={{ width: '90px'}}>
                <div style={{
                        backgroundColor: '#333741',
                        width: '80px',
                        height: '80px',
                        display: 'inline-block',
                        borderRadius: '4px'
                        }}>
                    <Card.Img
                        variant="top"
                        src={`../../public/rune_icons/${shard.icon}`}
                        alt={shard.name}
                        style={{ width: '80px', height: '80px', objectFit: 'contain', margin: '0 auto' }}
                    />
                </div>
                <Card.Body className="p-1">
                    <Card.Text className="rune-title" style={{ fontSize: '0.75rem' }}>{shard.name}</Card.Text>
                </Card.Body>
            </Card>
        </Col>
    );

    const titleCard = () => (
        <Container className="ox-shadow: 0 4px 12px rgba(0, 0, 0, 0.1)" style={{margin: "0px", padding:"0px"}}>
            <Col xs="auto">
                <Card className="rune-card text-center p-2" style={{ width: '240px', backgroundColor: '#212529', marginTop: '8px'}}>
                    <Card.Body className="p-1">
                        <Card.Text className="page-title">Suggested Runes</Card.Text>
                    </Card.Body>
                </Card>
            </Col>
        </Container>
    );

    if(shardData.length === 0) {
        return <p>Loading rune page...</p>
    }

    return(
        <>
            <Container>
                {titleCard()}
                <Container className="rune-container bg-dark text-light p-3" style={{width: "fit-content"}}>
                    <Row className="g-2 justify-content-between">
                        {keystoneData && renderKeystoneCard(keystoneData)}
                        {primaryData.map(r => r && renderRuneCard(r))}
                        {secondaryData.map(r => r && renderRuneCard(r))}
                        {shardData.map(s => s && renderShardCard(s))}
                    </Row>
                </Container>
            </Container>
        </>

    )
}