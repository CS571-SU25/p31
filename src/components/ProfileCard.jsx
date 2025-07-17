import {Container} from 'react-bootstrap'


export default function ProfileCard({username, tag, region, rank}) {

    return (
        <Container fluid style={{backgroundColor : 'lightgray', width: "100vw"}}>
                <h1>{username}#{tag} - {region}</h1>
                <h3>{rank}</h3>
        </Container>
    );
}