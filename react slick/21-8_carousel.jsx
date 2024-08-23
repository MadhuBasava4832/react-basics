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
        arrows: true, // Enable arrows
        
    }

    return (
        <>
            <div className="mainone">
                <Slider {...settings} className="mainonelo">
                    <div style={{backgroundColor:'blue'}} className="child"></div>
                    <div style={{backgroundColor:' green '}} className="child"></div>
                    <div style={{backgroundColor:' red '}} className="child"></div>
                    <div style={{backgroundColor:' orange '}} className="child"></div>
                    <div style={{backgroundColor:' lightblue '}} className="child"></div>
                    <div style={{backgroundColor:' grey '}} className="child"></div>
                </Slider>
            </div>
        </>
    )
}