import { Row, Col, Container } from 'react-bootstrap';

import './About.css';

const About = () => {
  return (
    <Container className ="background" fluid style={{ backgroundColor: '#b9f8f4' }}>
      <Container
        fluid="md"
        style={{ paddingTop: 70, backgroundColor: 'black', opacity:0.85 }}
      >
        <p className="professionals-topic">About</p>
        <Row noGutters style={{ marginTop: 50, marginBottom: 50 }}>
          <Col lg={12} md={3} xs={3} style={{ marginTop: 50, marginBottom: 50 }} >
            <div className="about-1" />
             <p cl> Aloha is a Mental Health Assistant ChatBot</p>
          
          </Col>
        </Row>
      </Container>
     </Container>
  );
};

export default About;
