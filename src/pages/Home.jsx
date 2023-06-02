import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import './Home.css'

function Home() {
  return (
    <div className="landing-page">
      <Container className="home-page">
        <Row>
          <Col>
            <h1>Dapatkan Edukasi Melalui Remedial !</h1>
            <p>Wadah bagi Anda untuk menemukan dan mengembangkan minat, potensi, serta bakat Anda dengan saling silang informasi yang menghasilkan pengetahuan dan pendekatan seni maupun literasi</p>
            <Button variant="primary">Get Started</Button>
          </Col>
          <Col>
            <img src="/src/assets/writing_hero.png" alt="Landing" />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Home;
