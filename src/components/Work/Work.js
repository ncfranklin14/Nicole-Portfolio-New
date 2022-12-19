import React from 'react';
import './work.css';
import { Card } from 'react-bootstrap';
import { Container } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import Socializer from '../../assets/Socializer.png'
import Planter from '../../assets/Planter.png'
import Planner from '../../assets/Planner.png'
import MovementMapper from "../../assets/MovementMapper.png"

export default function Work() {
    const projects = [{
        title: 'Socializer',
        image: Socializer,
        description: 'Event planner app',
        tools: 'HTML5, CSS, JavaScript, JQuery',
        deployed: 'https://anoorishad.github.io/Socializer/',
        github: 'https://github.com/anoorishad/Socializer'

    },
    {
        title: ' The Planter',
        image: Planter,
        description: 'Communal blog forum used to crowdsource names for plants',
        tools: 'Handlebars, MySQL, Cloudinary, JavaScript, NodeJS',
        deployed:'https://secret-waters-02737.herokuapp.com/login',
        github:'https://github.com/ncfranklin14/the-planter'
    },
    {
        title: 'Workday Planner',
        image: Planner,
        description: 'App used to add events to the daily planner and help manage time effectively',
        tools: 'HTLM5, JavaScript, CSS',
        deployed:'https://ncfranklin14.github.io/05-Third-Party-APIs-Work-Day-Scheduler/',
        github:'https://github.com/ncfranklin14/05-Third-Party-APIs-Work-Day-Scheduler'
    },
    {
        title: 'Movement Mapper',
        image: MovementMapper,
        description: 'Build and track fitness challenges',
        tools: 'React, Express, MySQL, bycrypt',
        deployed:'https://movementmapper-front.herokuapp.com/',
        github:'https://github.com/saghar-b/Movement-Mapper-Frontend'
    }]
    return (
        <Container className='myProjects'>
            <div className='workTitle1'>
            <h1 className= 'workTitle'>Projects</h1>
            </div>
            <Row xs={1} md={2} className="g-4">
                {projects.map((proj) => (
                    <Col>
                        <Card className='cards'>
                            <Card.Img variant="top" src={proj.image} />
                            <Card.Body>
                                <Card.Title>{proj.title}</Card.Title>
                                <Card.Text>
                                    {proj.description}
                                </Card.Text>
                                <Card.Text>
                                    {proj.tools}
                                </Card.Text>
                                <Card.Link href={proj.deployed}>Deployed</Card.Link>
                                <Card.Link href={proj.github}>Github</Card.Link>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Container>
    );
}


