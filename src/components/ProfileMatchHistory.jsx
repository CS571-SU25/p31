import {Row, Container} from 'react-bootstrap'
import MatchHistoryItem from '../components/MatchHistoryItem';

export default function ProfileMatchHistory({ matchHistory }) {

    return(
        <Container style={{backgroundColor: '#212529', padding: "0px"}}>
            {matchHistory.map((match, key) => (
                <Row key={key} style={{ backgroundColor : match.result === "win" ? '#1434A4' : '#A52A2A', margin: "12px"}}>
                    <MatchHistoryItem match={match} />
                </Row>
            ))}
        </Container>
    )
}