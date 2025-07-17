
import {Container, Row, Col} from 'react-bootstrap'

import ProfileCard from '../components/ProfileCard'
export default function Profile(props) {

    const mock = { /* Mock Data for a User */
        summonerName : "player",
        summonerTag : "0000",
        region : "NA",
        rank : "Platinum 4",
        matchHistory: [
            {
                id: 0,
                result: "win",
                kills: 7,
                deaths: 3,
                assits: 10,
                creepScore: 252,
                visonScore: 48,
                gameDuration: 2128 //seconds
            },
            {
                id: 1,
                result: "win",
                kills: 11,
                deaths: 4,
                assits: 7,
                creepScore: 190,
                visonScore: 24,
                gameDuration: 1231 //seconds
            },
            {
                id: 2,
                result: "loss",
                kills: 3,
                deaths: 5,
                assits: 2,
                creepScore: 169,
                visonScore: 31,
                gameDuration: 1352 //seconds
            }
        ]
    };
    return (
        <>
            <Container fluid style={{
                width: "100vw",
                padding: "0" }}>
                <Row className="justify-content-md-center">
                    <Col md="auto">
                        <ProfileCard username={mock.summonerName} tag={mock.summonerTag} region={mock.region} rank={mock.rank}/>
                    </Col>
                </Row>
            </Container>
        </>
    );
}