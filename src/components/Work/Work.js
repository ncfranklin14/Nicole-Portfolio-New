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
import Bloodworks from "../../assets/Bloodworks.png"
import { AiOutlineGithub, AiOutlineDesktop } from "react-icons/ai";

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
        description: 'Crowdsourcing blog for plants',
        tools: 'Handlebars, MySQL, Cloudinary, JavaScript, NodeJS',
        deployed: 'https://secret-waters-02737.herokuapp.com/login',
        github: 'https://github.com/ncfranklin14/the-planter'
    },
    {
        title: 'Movement Mapper',
        image: MovementMapper,
        description: 'Build and track fitness challenges',
        tools: 'React, Express, MySQL, bycrypt',
        deployed: 'https://movementmapper-front.herokuapp.com/',
        github: 'https://github.com/saghar-b/Movement-Mapper-Frontend'
    },
    // {
    //     title: 'Workday Planner',
    //     image: Planner,
    //     description: 'App used to add events to the daily planner and help manage time effectively',
    //     tools: 'HTLM5, JavaScript, CSS',
    //     deployed: 'https://ncfranklin14.github.io/05-Third-Party-APIs-Work-Day-Scheduler/',
    //     github: 'https://github.com/ncfranklin14/05-Third-Party-APIs-Work-Day-Scheduler'
    // }
    {
        title: 'Bloodworks',
        image: Bloodworks,
        description: 'Web Development projects',
        tools: 'WordPress, JavaScript, HTLM5, CSS',
        deployed: 'https://www.bloodworksnw.org/',
        github: 'https://ncfportfolio.herokuapp.com/bloodworks'
    }]
    return (
        <Container className='myProjects'>
            <Row className='workTitle1'>
                <Col>
                        <h1 className='workTitle'>Projects</h1>
                </Col>
            </Row>
            <Row xs={12} md={8} className="g-6">
                {projects.map((proj) => (
                    <Col>
                        <Card className='cards'>
                            <Card.Img variant="top" src={proj.image} />
                            <Card.Body className='card-body'>
                                <Card.Title className='hide'>{proj.title}</Card.Title>
                                <Card.Text>
                                    {proj.description}
                                </Card.Text>
                                <Card.Text>
                                    {proj.tools}
                                </Card.Text>
                                <Card.Link className="projicon-links" href={proj.deployed}><AiOutlineDesktop /></Card.Link>
                                <Card.Link  className="projicon-links" href={proj.github}><AiOutlineGithub /></Card.Link>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Container>
    );
}


