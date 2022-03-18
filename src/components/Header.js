import Style from '../css/style.css';
import React, { Component } from 'react';
import Logo from '../img/logo.png';
import TogLogo from '../img/toggle-logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import Card1 from '../img/head1.png';
import Card2 from '../img/head2.png';
import Card3 from '../img/head3.png';


function HeaderCard(props) {
    return(
    <div className= {props.class}>
        
           <img src={props.img} alt="" />
        
        <h3  style={{"margin" : "25px 0", "color": "#c6c9d8"}}> {props.header}</h3>
        <p style={{"color": "rgba(198,201,216,.75)", "font-size": "20px"}}>There are many variations of passages of Lorem Ipsum available, but the majority have suffered.</p>
    </div>
    );
}




export class Header extends Component {
    render() {
        return (
            <div>
                <header>
                    <nav>
                        <div className="container-fluid">
                            <div className="row pt-5 pl-4 pr-4 pb-5 align-items-center justify-content-between nav-part">
                                    <div className="nav-logo col-9 col-md-2 col-lg-4 col-xl-5">
                                        <img src={Logo} alt="" />
                                    </div>
                                    <div className="nav-menu col-6 col-md-10 col-lg-8 col-xl-7 d-none d-md-flex d-lg-flex d-xl-flex">
                                        <ul>
                                            <li><a href="">Home</a></li>
                                            <li><a href="">Services</a></li>
                                            <li><a href="">About</a></li>
                                            <li><a href="">Pages</a></li>
                                            <li><a href="">Blocks</a></li>
                                            <li><a href="">Contact</a></li>
                                        </ul>
                                        <button>Buy now</button>
                                    </div>
                                    
                                    <div className="toggler-btn col-1  d-md-none d-lg-none d-xl-none">
                                            <FontAwesomeIcon icon= {faBars} color= "#c6c9d8"  className="toggler-icon" id="toggler-btn"/>
                                    </div>
                            </div>
                        </div>
                        <div className="nav-toggle-menu " id="toggler-menu">
                            <div className="togmenu-content">
                            <div className="toggle-head">
                                
                            <img src={TogLogo} alt="" />

                            <FontAwesomeIcon icon= {faTimes} color= "#c6c9d8"  className="close-togmenu" id="close-togmenu"/>
                            </div>
                            <div className="tog-items">
                                <ul>
                                            <li><a href="">Home</a></li>
                                            <li><a href="">Services</a></li>
                                            <li><a href="">About</a></li>
                                            <li><a href="">Pages</a></li>
                                            <li><a href="">Blocks</a></li>
                                            <li><a href="">Contact</a></li>
                                </ul>
                            </div>
                            </div>
                        </div>
                    </nav>

                    <div className="head-content">
                        <div className="container">
                            <div className="row">
                                <div className="header-head col-12 col-lg-6 col-xl-6">
                                   <h1> A DIGITAL AGENCY. </h1>
                                </div>

                            </div>

                            <div className="header-content col-12">
                                <div className="row">
                                    <HeaderCard class="header-card col-12 col-md-4 col-lg-4 col-xl-4 mt-4 mt-md-0 mt-lg-0 mt-xl-0" img = {Card1} header = "Business Strategy"  />
                                    <HeaderCard class="header-card col-12 col-md-4 col-lg-4 col-xl-4 mt-4 mt-md-0 mt-lg-0 mt-xl-0" img = {Card2} header = "Website Development"  />
                                    <HeaderCard class="header-card col-12 col-md-4 col-lg-4 col-xl-4 mt-4 mt-md-0 mt-lg-0 mt-xl-0" img = {Card3} header = "Marketing & Reporting"  />
                                </div>
                            </div>


                        </div>
                    </div>
                </header>
            </div>
        )
    }
}



export default Header


