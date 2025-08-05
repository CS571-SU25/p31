import { useState } from 'react';
import {Container, Form } from "react-bootstrap";
import GuidePreviewCard from "../components/GuidePreviewCard";
import guideData from "../mock/guides.json"
import { Link } from 'react-router-dom';
/**
 * This page displays previews of each guide.
 * @param {*} props 
 * @returns 
 */

export default function Guides(props) {

    const [filter, setFilter] = useState('');

    const sessionGuides = (JSON.parse(sessionStorage.getItem("created_guides")) || []).filter(guide => guide.id !== 0);
    const allGuides = [...sessionGuides, ...guideData];

    console.log(allGuides);
    const filteredGuides = allGuides.filter(guide => guide.champion && guide.champion.toLowerCase().includes(filter.toLowerCase()));

    

    return (
        <Container className="mt-4" style={{padding: 0}}>
            <Form.Group>
                <Form.Label>Filter By Champions</Form.Label>
                <Form.Control 
                type="text"
                placeholder="Enter Champion Name"
                value={filter}
                onChange={(e) => setFilter(e.target.value)}
                />
            </Form.Group>
            <p></p>

            {filteredGuides.map((guide) => (
                <Link key={guide.id} to={`/guides/${guide.id}`} state={guide} style={{ textDecoration: 'none', color: 'inherit' }}>
                    <GuidePreviewCard guide={guide} />
                </Link>
            ))}
        </Container>
    )
}
