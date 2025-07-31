import { Container, Card, Image, Row, Col } from "react-bootstrap"
import { useLocation } from 'react-router-dom'
import RuneCard from '../components/RuneCard'

export default function ChampionGuide() {
    const { state: guide } = useLocation();

    console.log(guide);

    return (
        <Container style={{marginTop: "16px", width: "fit-content"}}>
            <Row>
                <Col xs="auto">
                    <Image src={`/p31/champ_icons/${guide.champion}.png`} alt={guide.champion}/>     
                </Col>
                <Col>
                    <h1>{guide.title}</h1> 
                    <h5>By {guide.author}</h5>
                    <p style={{ color: '#AEB1B5' }}>Created on: {guide.date}</p>
                </Col>
            </Row>
            <RuneCard 
            primaryTree={guide.primaryTree}
            secondaryTree={guide.secondaryTree}
            keystone={guide.keystone}
            primaryRunes={guide.primaryRunes}
            secondaryRunes={guide.secondaryRunes}
            shards={guide.shards}
            />
            <Card style={{marginTop: '16px', backgroundColor: '#212529', color: 'white'}}>
                <Card.Body>
                    {guide.body}
                </Card.Body>
            </Card>
        </Container>
    )
}
