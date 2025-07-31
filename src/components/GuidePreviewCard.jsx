import React from 'react';
import {Card, Row, Col} from "react-bootstrap";

/**
 * This page displays previews of each guide.
 * @param {*} guide (id, champion, title, author, date created, etc)
 * @returns 
 */

export default function GuidePreviewCard({guide}) {
  return (
<Card className="mb-3 shadow-sm background" style={{ backgroundColor: '#333741', color: 'white' }}>
      <Row className="g-0 align-items-center">
        <Col xs="auto">
          <div style={{ width: '100px', height: '100px', backgroundColor: '#333741', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Card.Img
              src={`/p31/champ_icons/${guide.champion}.png`}
              alt={guide.champion}
              style={{
                maxWidth: '80%',
                maxHeight: '80%',
                objectFit: 'contain',
              }}
            />
          </div>
        </Col>
        <Col>
          <Card.Body>
            <Card.Text className="mb-1 fw-bold">
              {guide.title} · {guide.champion}
            </Card.Text>
            <Card.Text style={{ color: '#cccccc ', fontSize: '0.9rem' }}>
              by {guide.author} · {guide.date}
            </Card.Text>
          </Card.Body>
        </Col>
      </Row>
    </Card>
  );
}
