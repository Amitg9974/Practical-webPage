import React from 'react'
import './About.css'
import AboutUs from '../images/about/Group 10.png';

function About() {
    return (
        <div className='about'><img style={{ width: "95%" }} src={AboutUs} alt="About" /></div>
    )
}

export default About