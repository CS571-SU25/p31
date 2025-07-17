import { Row, Col, Card } from "react-bootstrap";


export default function Profile(props) {
    return (
        <Container fluid className="mt-4">
            <Row>
                <Col xs={3} style={{ backgroundColor: '#00008B' }}>
                    <Card style={{ width: '100%', height: '100px', backgroundColor: '#89CFF0' }}>
                        <Card.Body>
                            This is a profile summary card
                        </Card.Body>
                    </Card>
                </Col>
                <Col xs={9} style={{ backgroundColor: '#8B0000' }}>
                    <Card style={{ width: '100%', height: '300px', backgroundColor: '#F88379' }}>
                        <Card.Body>
                            This is a match history card
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    )
}
