
import {Container, Row, Col} from 'react-bootstrap'

import ProfileCard from '../components/ProfileCard'
import ProfileMatchHistory from '../components/ProfileMatchHistory';
export default function Profile(props) {

    const mock = { /* Mock Data for a User */
        summonerName : "player",
        summonerTag : "0000",
        region : "NA",
        rank : "Platinum",
        division: "4",
        matchHistory: [
            {
                id: 0,
                champion: "Draven",
                result: "win",
                kills: 7,
                deaths: 3,
                assists: 10,
                creepScore: 252,
                visonScore: 48,
                gameDuration: 2128 //seconds
            },
            {
                id: 1,
                champion: "Draven",
                result: "win",
                kills: 11,
                deaths: 4,
                assists: 7,
                creepScore: 190,
                visonScore: 24,
                gameDuration: 1231 //seconds
            },
            {
                id: 2,
                champion: "Draven",
                result: "loss",
                kills: 3,
                deaths: 5,
                assists: 2,
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
                <Row>
                    <ProfileCard username={mock.summonerName} tag={mock.summonerTag} region={mock.region} rank={mock.rank} division={mock.divison}/>
                </Row>
                <Row>
                    <ProfileMatchHistory matchHistory={mock.matchHistory}/>
                </Row>
            </Container>
        </>
    );
}