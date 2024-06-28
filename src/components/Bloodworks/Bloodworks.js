import React from 'react';
import './bloodworks.css'
import eligibility from '../../assets/eligibility.png'
import faq from '../../assets/faq.png'
import homepage from '../../assets/homepage.png'
import partner from "../../assets/partner.png"

export default function Bloodworks() {
    const bwProjects = [{
        image: eligibility,
    },
    {
        image: faq
    },
    {
        image: homepage
    },
    {
        image: partner
    }]
    return (
        <div className='moduleWrapper'>
            <div className='moduleImage'>
            {bwProjects.map((item) => (
                <img src={item.image} />
            ))}
            </div>
        </div>
    );
}
