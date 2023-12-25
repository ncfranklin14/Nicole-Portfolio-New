import React from 'react';
import './about.css';
import profileImage from '../../assets/profileImage.jpeg'
import { Container } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';


export default function About() {
    const image = {
        image: profileImage,
    }
    return (
        <Container className='aboutContainer'>
            <Row>
                <Col><img className='profile-pic' src={image.image} alt='' /></Col>
            <Col><div className='headerAbout'>
                <h2>About Me</h2>
            </div>
            <div className='par'>
            <p>Full Stack web developer with a Full Stack Web Development Certificate from the University of Washington. I'm excited about pursuing a role in Full Stack or Frontend web development.
                        Leveraging a background in Sales, Marketing, and Account Management for technology companies. I bring a unique perspective by having a diverse background on the business side and want to continue a career working on the development and functional side of products.</p>
                        I'm passionate about exploring the outdoors and spend my free time enjoying the mountains.
            </div>
            </Col>
            </Row>
        </Container>
    );
}
