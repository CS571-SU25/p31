import {Col, Image} from 'react-bootstrap'

export default function MatchHistoryItem({ match }) {

    let kdaRatio = (match.kills + match.assists) / match.deaths;
    return (
        <>
            <Col xs={2} style= {{padding : ".25rem"}}>
                <Image src={`/p31/champ_icons/${match.champion.toLowerCase()}.png`} alt={match.champion} width="80px" height="100%" />
            </Col>
            <Col className="text-d-flex align-items-center">
                <h1>{match.kills}/{match.deaths}/{match.assists}  -  {match.creepScore} CS</h1>
                <p>{kdaRatio.toFixed(2)} KDA</p>
            </Col>
        </>

    )
}