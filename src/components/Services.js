import Style from '../css/style.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChromecast } from '@fortawesome/free-brands-svg-icons';
import { faUserFriends } from '@fortawesome/free-solid-svg-icons';
import { faLayerGroup } from '@fortawesome/free-solid-svg-icons';
import { faTv } from '@fortawesome/free-solid-svg-icons';


import React, { Component } from 'react'

export class Services extends Component {
    render() {
        return (
            <div className = "services-section">
                <div className="container">
                    <div className="row  justify-content-center ">
                            <div className="serv-left col-12 col-lg-4 col-xl-4">
                                <h1> Services</h1>
                                <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration.</p>
                                <a href=""> Request Custom Service</a>
                            </div>
                            <div className="serv-right col-12 col-lg-8 col-xl-8">
                                <div className="row">

                                
                                <div className="serv-cards col-12 col-md-6 col-lg-6 col-xl-6 ">
                                    <div  className = "servCard "  >
                                    <FontAwesomeIcon icon= {faChromecast}   color= "rgb(238,7,110)" size="2x" style={{"margin-bottom": "20px"}} />
                                    <h3>Business Strategy </h3>
                                    <p>I throw myself down among the tall grass by the stream as I lie
              close to the earth.</p>
                                    </div>

                                    <div  className = "servCard"  >
                                    <FontAwesomeIcon icon= {faUserFriends}  color= "rgb(238,7,110)" size="2x"  style={{"margin-bottom": "20px"}}/>
                                    <h3>Marketing & Reporting </h3>
                                    <p>I throw myself down among the tall grass by the stream as I lie
              close to the earth.</p>
                                    </div>


                                </div>
                                <div className="serv-cards col-12 col-md-6 col-lg-6 col-xl-6 ">
                                <div  className = "servCard "  >
                                <FontAwesomeIcon icon= {faLayerGroup}  color= "rgb(238,7,110)" size="2x" style={{"margin-bottom": "20px"}} />
                                    <h3>Website Development </h3>
                                    <p>I throw myself down among the tall grass by the stream as I lie
              close to the earth.</p>

                                </div>
                                    <div  className = "servCard "  >
                                    <FontAwesomeIcon icon= {faTv} color= "rgb(238,7,110)" size="2x"  style={{"margin-bottom": "20px"}} />
                                    <h3>Mobile Development </h3>
                                    <p>I throw myself down among the tall grass by the stream as I lie
              close to the earth.</p>
                                    </div>
                                </div>
                                </div>
                            </div>
                    </div>
                </div>
            </div>
        )
    }
}



export default Services
