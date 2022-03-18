import Style from '../css/style.css';
import Slider from "react-slick";

import React, { Component } from 'react'

export class Works extends Component {
    render() {
        return (
            <div className="works-section">
                <div className="container">
                    <div className="row works-head">
                        <h1>All Works</h1>
                        <p>There are many variations of passages of Lorem Ipsum available,
but the majority have suffered alteration.</p>
                    </div>

                    <div className="row works-slider">
                        <SimpleSlider />
                    </div>
                </div>
            </div>
        )
    }
}


export  class SimpleSlider extends Component {
    render() {
      const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1,
        centerMode: true,
        arrows: false,
        initialSlide: 0,
        responsive: [
            {
              breakpoint: 1260,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                infinite: true,
                dots: true,
                centerMode: true,
              }
            },
            {
                breakpoint: 992,
                settings: {
                  slidesToShow: 2,
                  slidesToScroll: 1,
                
                  centerMode: false,
                }
              },
              {
                breakpoint: 770,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1,
                  initialSlide: 2,
                  centerMode: true,
                }
              },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                centerMode: false,
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                centerMode: false,
              }
            }
          ]
      };
      return (
        <div className="slider">
          
          <Slider {...settings}>
              
            <div className="slide1">
          
            <div className="img-slide">
            <div className="slide-content">
                <p>Development</p>
              <h4>Getting tickets to the big show </h4>
              <button>Case Study</button>
                </div>
              
            </div>
            </div>



            <div className="slide2">
          <div className="img-slide">
          <div className="slide-content">
              <p>Development</p>
            <h4>Getting tickets to the big show </h4>
            <button>Case Study</button>
              </div>
          </div>
          </div>

            
          <div className="slide3">
          <div className="img-slide">
          <div className="slide-content">
              <p>Development</p>
            <h4>Getting tickets to the big show </h4>
            <button>Case Study</button>
              </div>
          </div>
          </div>

            
          <div className="slide4">
          <div className="img-slide">
          <div className="slide-content">
              <p>Development</p>
            <h4>Getting tickets to the big show </h4>
            <button>Case Study</button>
              </div>
          </div>
          </div>

            
          <div className="slide5">
          <div className="img-slide">
          <div className="slide-content">
              <p>Development</p>
            <h4>Getting tickets to the big show </h4>
            <button>Case Study</button>
              </div>
          </div>
          </div>


            
          <div className="slide6">
          <div className="img-slide">
          <div className="slide-content">
              <p>Development</p>
            <h4>Getting tickets to the big show </h4>
            <button>Case Study</button>
              </div>
          </div>
          </div>


          </Slider>
        </div>
      );
    }
  }



export default Works
