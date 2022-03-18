import Style from '../css/style.css';
import AboutImg from '../img/about.jpg'

import React, { Component } from 'react'


const AboutCard = (props) => {
    return (
        <div className="aboutCard " style = {{"margin-right": "10px"}} >
            <h3 style={{"color": "white","margin" : "0 0 20px 0",}}>Who we are</h3>
            <p style={{"color": "rgba(198,201,216,.75)", "font-size": "18px"}}>There are many vtions of passages of Lorem Ipsum available, but the majority have suffered.</p>
        </div>
    )
}
export class About extends Component {
    render() {
        return (
            <div className= "about-section">
                <div className="container">
                    <div className="row align-items-center justify-content-center pt-5 pt-md-0 pt-lg-0 pt-xl-0">
                        <div className="about-img col-12 col-md-6 col-lg-5 col-xl-5 pb-5 pb-md-0 pb-lg-0 pb-xl-0 pt-5 pt-xl-0">
                            <img src={AboutImg} alt="" />
                        </div>
                        <div className="about-txt col-12 col-md-6 col-lg-7 col-xl-7">
                                <h1>About</h1>
                                <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which dont look even slightly believable. If you are going to use a passage of Lorem Ipsum</p>
                                <div className="aboutCards d-flex ">
                                    <AboutCard />
                                    <AboutCard />
                                </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default About
