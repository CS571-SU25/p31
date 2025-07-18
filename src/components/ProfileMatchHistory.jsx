import {Row} from 'react-bootstrap'
import MatchHistoryItem from '../components/MatchHistoryItem';

export default function ProfileMatchHistory({ matchHistory }) {

    return(
        <>
            {matchHistory.map((match, key) => (
                <Row key={key} style={{ backgroundColor : match.result === "win" ? '#6495ED' : '#FAA0A0', margin: ".25rem"}}>
                    <MatchHistoryItem match={match} />
                </Row>
            ))}
        </>
    )
}