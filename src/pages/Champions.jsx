import { Container, Row, Col, Card, Form} from "react-bootstrap"
import { useState } from "react"

import champions from "../data/champions.json"
export default function Champions(props) {

    const [filter, setFilter] = useState('');
    
    const filteredChampions = champions.filter((champ) => champ.name.toLowerCase().includes(filter));
    console.log(champions);
    console.log(filteredChampions);
    return (
        <Container style={{marginTop: "16px"}}>
            <h1>Click an icon to be directed to that Champion's Wiki Page</h1>
            <Form.Group style={{marginBottom: "16px"}}>
                <Form.Label>Filter By Champions</Form.Label>
                <Form.Control 
                type="text"
                placeholder="Enter Champion Name"
                value={filter}
                onChange={(e) => setFilter(e.target.value)}
                />
            </Form.Group>
            <Row>
                {
                    filteredChampions.map((champ, idx) => (
                        <Col key={idx} xs={6} sm={4} md={3} lg={2}>
                            <a
                            href = {champ.wikiLink}
                            target = "_blank"
                            rel="noopener noreferrer"
                            style={{textDecoration: "none"}}
                            >
                                <Card className="text-center d-flex align-items-center justify-content-center" style={{backgroundColor: "#212529"}}>
                                    <img 
                                    src={`/p31/champ_icons/${champ.icon}`}
                                    alt={champ.name}
                                    style={{ cursor: 'pointer',
                                        width: "160px",
                                        height: "160px",
                                        marginTop: "8px"
                                    }}
                                    />
                                    <u style={{color: "#f8f9fa", marginBottom: "8px"}}>{champ.name}</u>
                                </Card>
                            </a>
                        </Col>
                    ))
                }
            </Row>
        </Container>
    )
}
