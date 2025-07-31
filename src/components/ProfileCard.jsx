import {Container, Col, Image} from 'react-bootstrap'


export default function ProfileCard({username, tag, region, rank, division, icon, overallRecord}) {
    const winrate = ((overallRecord[0] / (overallRecord[0] + overallRecord[1])) * 100).toFixed(1);
    return (
        <>
        <Col xs="auto" className="d-flex align-items-center">
        <Image alt={icon} src={`/p31/profile_icons/${icon}.png`} height="120px" width="120px"/>
        </Col>
        <Col xs="auto" className="d-flex align-items-center">
            <Container>
                <h1>{username}#{tag} - {region}</h1>
                <h5>{rank} {division} ‎ ‎ ‎ ‎ - ‎ ‎ ‎ ‎  
                    {overallRecord[0]} W / {overallRecord[1]} L ({winrate}%)</h5>
            </Container>
        </Col>
        </>
    );
}