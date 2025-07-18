import {Col, Image} from 'react-bootstrap'

export default function MatchHistoryItem({ match }) {

    let kdaRatio = (match.kills + match.assists) / match.deaths;
    return (
        <>
            <Col xs={2} style= {{padding : ".25rem"}}>
                <Image src={`/p31/champ_icons/${match.champion}.png`} alt={match.champion} width="80px" height="100%" />
            </Col>
            <Col className="text-d-flex align-items-center">
                <h4>{match.kills}/{match.deaths}/{match.assists}  -  {match.creepScore} CS</h4>
                <p>{kdaRatio.toFixed(2)} KDA</p>
            </Col>
        </>

    )
}