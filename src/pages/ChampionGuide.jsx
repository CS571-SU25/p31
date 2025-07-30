import { Container } from "react-bootstrap"
import { useLocation } from 'react-router-dom'
import RuneCard from '../components/RuneCard'

export default function ChampionGuide() {
    const { state: guide } = useLocation();

    console.log(guide);

    return (
        <Container>
            <p>{guide.title} {guide.champion} {guide.author} {guide.date}</p>

            <RuneCard 
            primaryTree={guide.primaryTree}
            secondaryTree={guide.secondaryTree}
            keystone={guide.keystone}
            primaryRunes={guide.primaryRunes}
            secondaryRunes={guide.secondaryRunes}
            shards={guide.shards}
            />
        </Container>
    )
}
