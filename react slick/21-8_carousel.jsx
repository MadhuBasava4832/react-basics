import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './21-8.css';

export const Slick = () => {

     // Slider settings
     const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay:true,
        arrows: true,
        
    }

    return (
        <>
            <div className="mainone">
                <Slider {...settings} className="mainonelo">
                    <><div style={{backgroundColor:'blue'}} className="child">1</div> </>
                    <div><div style={{backgroundColor:' green '}} className="child">2</div></div>
                    <><div style={{backgroundColor:' red '}} className="child">3</div> </>
                    <><div style={{backgroundColor:' orange '}} className="child">4</div> </>
                    <><div style={{backgroundColor:' lightblue '}} className="child">5</div> </>
                    <><div style={{backgroundColor:' grey '}} className="child">6</div> </>
                </Slider>
            </div>
        </>
    )
}

function ReactSlick() {
    const settings = {
        dots: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        
        speed: 400,
        autoplay: true,
        autoplaySpeed: 1000,
        responsive: [
            {
                breakpoint: 700,
                settings: {
                    dots: false,
                    slidesToShow: 2,
                }
            },
            {

            }
        ]
    }
  return (
    <div style={{margin: '100px', width: '80%'}}>
      <h1>React Slick</h1>
      <Slider {...settings}>
        <div>
            <div style={{height:'300px', backgroundColor:'red'}}>Slide-1</div>
        </div>
        <div>
            <div style={{height:'300px', backgroundColor:'green'}}>Slide-2</div>
        </div>
        <div>
            <div style={{height:'300px', backgroundColor:'yellow'}}>Slide-3</div>
        </div>
        <div>
            <div style={{height:'300px', backgroundColor:'blue'}}>Slide-4</div>
        </div>
        <div>
            <div style={{height:'300px', backgroundColor:'red'}}>Slide-5</div>
        </div>
        <div>
            <div style={{height:'300px', backgroundColor:'brown'}}>Slide-6</div>
        </div>
        <div>
            <div style={{height:'300px', backgroundColor:'red'}}>Slide-7</div>
        </div>
      </Slider>
    </div>
  )
}

export default ReactSlick;