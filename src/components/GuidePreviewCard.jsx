import React from 'react';
import {Card, Row, Col} from "react-bootstrap";

/**
 * This page displays previews of each guide.
 * @param {*} guide (id, champion, title, author, date created, etc)
 * @returns 
 */

export default function GuidePreviewCard({guide}) {
  return (
    <Card className="mb-3 shadow-sm">
      <Row className="g-0 align-items-center">
        <Col xs={4} md={3} lg={2}>
          <Card.Img
            src={`/p31/champ_icons/${guide.champion}.png`}
            alt={guide.champion}
            style={{
              width: "80px",
              height: "80px",
              objectFit: "cover",
              borderRight: "1px solid #dee2e6",
            }}
          />
        </Col>
        <Col xs={8} md={9} lg={10}>
          <Card.Body>
            <Card.Title className="mb-1">{guide.title}</Card.Title>
            <Card.Text className="mb-0 text-muted">
              by {guide.author} · {guide.date}
            </Card.Text>
          </Card.Body>
        </Col>
      </Row>
    </Card>
  );
}
