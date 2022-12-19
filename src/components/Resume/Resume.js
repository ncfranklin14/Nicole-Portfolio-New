import React from 'react';
import { ListGroup } from 'react-bootstrap';
import './resume.css';
import resume from '../../assets/Resume.pdf';

export default function Resume() {
    return (
        <section className="resume">
            <h2 className="resume-title">Experience</h2>
            <div className='resumeContainer'>
                <div className='skills'>
                    JavaScript || CSS || HTML5 || JQuery || Bootstrap || Handlebars || ReactJS || NodeJS || Express || MySQL/Sequelize || MongoDB/Mongoose
                </div>
            </div>
            <a className='linkToRes' href={resume} download="Resume.pdf">Download Resume </a>
        </section >
    );
}