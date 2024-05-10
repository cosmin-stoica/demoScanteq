import ItodoImage from "../../../elements/itodo-img";
import { NavLink } from "react-router-dom";
import React, { useEffect } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // Importa i CSS del carousel
import { Carousel } from 'react-responsive-carousel';
import { publicUrlFor } from "../../../../globals/constants";
import CarouselMasp from "./carouselmasp";


function IndCont2() {
    return (
        <>
        <div className="section-full wow fadeInRight" data-wow-duration="2000ms">
        <div className="titolocond">
            <h1>Condotta Guidata</h1>
        </div>
        </div>

         <CarouselMasp></CarouselMasp>

        </>
        
    )
    
}

export default IndCont2;