import React from 'react';
import './about.css';
import profileImage from '../../assets/profileImage.jpeg'
import { Accordion } from 'react-bootstrap';


export default function About() {
    const image = {
        image: profileImage,
    }
    return (
        <div className='aboutContainer'>
            <Accordion className='aboutMe' defaultActiveKey="2">
                <Accordion.Item eventKey="0">
                    <Accordion.Header>About Me</Accordion.Header>
                    <Accordion.Body className='par'>
                        Full Stack web developer with a Full Stack Web Development Certificate from the University of Washington. I'm excited about pursuing a role in Full Stack or Frontend web development.
                        Leveraging a background in Sales, Marketing, and Account Management for technology companies. I bring a unique perspective by having a diverse background on the business side and want to continue a career working on the development and functional side of products.
                        I'm passionate about exploring the outdoors and spend my free time enjoying the mountains.
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
            <img className='profile-pic' src={image.image} alt='' />
        </div>
    );
}
