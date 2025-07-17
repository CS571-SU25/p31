
import {Container, Row, Col} from 'react-bootstrap'

import ProfileCard from '../components/ProfileCard'
export default function Profile(props) {
    return (
        <>
            <Container fluid style={{
                width: "100vw" }}>
                <Row className="justify-content-md-center">
                    <Col md="auto">
                        <ProfileCard />
                    </Col>
                </Row>
            </Container>
        </>
    );
}