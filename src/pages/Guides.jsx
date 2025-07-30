import React from 'react';
import {Container, Row, Col, Card} from "react-bootstrap";
import GuidePreviewCard from "../components/GuidePreviewCard";
import guideData from "../mock/guides.json"
import { Link } from 'react-router-dom';
/**
 * This page displays previews of each guide.
 * @param {*} props 
 * @returns 
 */

export default function Guides(props) {
    return (
        <Container className="mt-4">
            {guideData.map((guide) => (
                <Link key={guide.id} to={`/guides/${guide.id}`} state={guide} style={{ textDecoration: 'none', color: 'inherit' }}>
                    <GuidePreviewCard guide={guide} />
                </Link>
            ))}
        </Container>
    )
}
