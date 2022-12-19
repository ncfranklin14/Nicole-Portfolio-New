import React from 'react';
import './about.css';
import profileImage from '../../assets/profileImage.jpeg'

export default function About() {
    const image = {
        image: profileImage,
    }
    return (
        <div className='aboutContainer'>
            <h1 className='aboutMe'>About Me</h1>
            <img className='profile-pic' src={image.image} alt='' />
            <p className='par'>
            Full Stack web developer with a Full Stack Web Development Certificate from the University of Washington. I'm excited about pursuing a role in Full Stack or Frontend web development. My frontend skills include HTML5, CSS, jQuery, JavaScript, Bootstrap, ReactJS, and Handlebars. My backend skills include MySQL, MongoDB, Express, and NodeJS. 
            Leveraging a background in Sales, Marketing, and Account Management for technology companies. I bring a unique perspective by having a diverse background on the business side and want to continue a career working on the development and functional side of products. 
            I'm passionate about exploring the outdoors and spend my free time enjoying the mountains.
            </p>
        </div>
    );
}
