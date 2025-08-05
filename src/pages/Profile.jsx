
import {Container, Row, Col} from 'react-bootstrap'

import ProfileCard from '../components/ProfileCard'
import ProfileMatchHistory from '../components/ProfileMatchHistory';
export default function Profile(props) {

    const mock = { /* Mock Data for a User */
        summonerName : "exile",
        summonerTag : "gdbye",
        region : "NA",
        rank : "Platinum",
        icon: "ahri_portrait",
        division: "4",
        overallRecord: [24, 10],
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
            <Container style={{
                width: "60vw",
                padding: "0" }}>
                <Container style={{backgroundColor: "#212529", marginTop: "16px", marginBottom: "16px"}}>
                    <Row className="d-flex align-items-center" style={{marginBottom: "12px", marginTop: "12px"}}>
                        <ProfileCard username={mock.summonerName} 
                        tag={mock.summonerTag} region={mock.region} 
                        rank={mock.rank} division={mock.division} 
                        icon={mock.icon} overallRecord={mock.overallRecord}/>
                    </Row>
                </Container>

                <Row>
                    <ProfileMatchHistory matchHistory={mock.matchHistory}/>
                </Row>
            </Container>
        </>
    );
}