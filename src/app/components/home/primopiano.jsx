import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import ItodoImage from "../../elements/itodo-img";
import { useNavigate } from 'react-router-dom';
import CarouselMasp from "../../sections/IT blogs/detail/carouselmasp";

function PrimoPiano() {
    const navigate = useNavigate(); // Muovi useNavigate qui

    const handleDisplayClick = () => {
        navigate('/picking');
    }

    const handleMaspClick = () => {
        navigate('/masp');
    }


    return (
        <div className="carouselstyle">
            <div className="titolocarousell">
                <h1>Prodotti in primo piano</h1>
            </div>

            {/*<Carousel
                showArrows={false}
                infiniteLoop={true}
                showThumbs={false}
                showStatus={false}
                showIndicators={false}
                centerMode={true}
                centerSlidePercentage={30}
                autoPlay={true} // Abilita l'autoplay
                interval={3000} // Imposta l'intervallo di tempo tra le diapositive (in millisecondi)
                axis='vertical'
                swipeable={false}
                transitionTime={1000}
                stopOnHover={false}
                className ="carouselPrimoPiano"
            >



                <div>
                    <div>
                        <h1 className="textincarousell">CONDOTTA GUIDATA NEL CICLO PRODUTTIVO</h1>
                        <ItodoImage src="images/prodottiprimo/maspG.png" ></ItodoImage>
                        <button className="buttonincarousell" onClick={handleMaspClick}>Vedi di più</button>
                    </div>
                </div>

                <div>
                    <h1 className="textincarousell">INNOVAZIONE PER IL TUO PICKING</h1>
                    <ItodoImage src="images/prodottiprimo/displayG.png"></ItodoImage>
                    <button className="buttonincarousell" onClick={handleDisplayClick}>Vedi di più</button>
                </div>
    </Carousel>*/}

    <CarouselMasp></CarouselMasp>
        </div>
    );
}

export default PrimoPiano;
