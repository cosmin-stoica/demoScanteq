import React, { useState, useEffect } from 'react';
import SectionClients2 from '../../sections/home/index2/section-clients2';
import { NavLink } from "react-router-dom";
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import ItodoImage from "../../elements/itodo-img";
import ContainerPartner from './containerpartner';
export const ClientLogos = () => {
  const logos = ['sabelt.png', 'lear.png', 'polito.png', 'lamborghini.png', 'komatsu.png', 'same.png', 'gkn.png', 'steparava.png', 'aras.png', 'tristone.png', 'cellino.png', 'iveco.png', 'proma.png'];

  return (
    <div className="client-logos">
      <LogoCarousel logos={logos} />
    </div>
  );
};

const LogoCarousel = ({ logos }) => {
  const angleIncrement = (2 * Math.PI) / logos.length;
  const radius = 600;
  const isMobile = window.innerWidth <= 1200;
  const [currentIndex, setCurrentIndex] = useState(0);

  const mobileStyles = {
    transform: 'scale(0.4)'
  };

  const carouselStyle = isMobile ? mobileStyles : {};

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex === logos.length - 1 ? 0 : prevIndex + 1));
    }, 2000);

    return () => {
      clearInterval(interval);
    };
  }, [logos.length]);

  const logoElements = logos.map((logo, index) => {
    const angle = (index - currentIndex + 3) * angleIncrement;
    const x = radius * Math.cos(angle);
    const y = radius * Math.sin(angle);

    const isActive = index === currentIndex;
    let scale = 0.4;

    // Applica la scala solo quando le immagini si trovano al centro basso
    if (y > 0) {
      scale = 0.7 + (1 - Math.abs(x / radius)) * 1.1;
    }

    const imageStyle = {
      position: 'absolute',
      left: `calc(50% + ${x * 0.9}px)`,
      top: `calc(50% + ${y * 1 / 8}px)`,
      transform: `scale(${isActive ? 2 : scale})`,
      transition: '0.5s',
      zIndex: isActive ? 2.5 : 1,
    };

    return (
      <img
        key={index}
        src={`assets/images/Clienti/${logo}`}
        alt={`Logo Cliente ${index + 1}`}
        className={`logo-image ${isActive ? 'active' : ''}`}
        style={imageStyle}
      />
    );
  });

  return (
    <div id="containerlogos" className="logo-carousel" style={carouselStyle}>
      <div className="carousel-container">{logoElements}</div>
    </div>
  );
};

export const Clienti1 = (props) => {
  return (
    <div id="clienti">
      <div className="container">
        {/* TITLE START */}
        <h1 className="TitoloCapitolo">I nostri partner</h1>
        {/* TITLE END */}

            {/*<div className="containerpartner">
          <ItodoImage id="car3" src="images/clienti/tecno.png" alt="" />
          <ItodoImage id="car4" src="images/clienti/miba.png" alt="" />
  </div>*/}

    <ContainerPartner></ContainerPartner>

      </div>

      {/* TITLE START */}
      <div className="section-head center">
        <h1 className="TitoloCapitolo">I nostri clienti finali</h1>

      </div>
      {/* TITLE END */}
      <div id="containerlogos" className="container">
        <div>
          <ClientLogos />
        </div>
      </div>
    </div>
  );
};

export const Clienti2 = (props) => {
  return (
    <>
      <div className="section-full wow fadeInDown" data-wow-duration="1000ms">
        {/* TITLE START */}
        <div className="section-head center">
        <h1 className="TitoloCapitolo">I nostri partner</h1>
        </div>
        {/* TITLE END */}

        {/*<div className="containerpartner">
          <ItodoImage id="car3" src="images/clienti/tecno.png" alt="" />
          <ItodoImage id="car4" src="images/clienti/miba.png" alt="" />
  </div>*/}
      <ContainerPartner></ContainerPartner>


        <div id="clientipane" className="section-full p-t110 p-b80 sx-client-logo-1-outer sx-bg-white">
          <div className="section-head center">
          <h1 className="TitoloCapitolo">I nostri clienti finali</h1>
          </div>
          <div className="container">
            {/* TITLE START */}
            {/* ... (rimuovi o mantieni il tuo codice HTML del titolo) */}
            {/* TITLE END */}
            <div className="section-content">
              <div id="cc" className="client-grid m-b30">
                <div className="carousel-container"> {/* Aggiungi questa classe al container del carousel */}
                  <Carousel
                    showArrows={false}
                    infiniteLoop={true}
                    showThumbs={false}
                    showStatus={false}
                    showIndicators={false}
                    centerMode={true}
                    centerSlidePercentage={30}
                    autoPlay={true} // Abilita l'autoplay
                    interval={1300} // Imposta l'intervallo di tempo tra le diapositive (in millisecondi)
                    swipeable={false}
                    stopOnHover={false}
                    cancelClick={false}
                    isMouseEntered={false}
                    swiping={false}
                  >
                    <div id="ff">
                      <div to="/contact-us" className="client-logo-pic">
                        <ItodoImage src="images/clienti/sabelt.png" alt="" />

                      </div>
                    </div>
                    <div id="ff">
                      <div className="client-logo-pic">
                        <ItodoImage src="images/clienti/aras.png" alt="" />

                      </div>
                    </div>
                    <div id="ff">
                      <div className="client-logo-pic">
                        <ItodoImage src="images/clienti/cellino.png" alt="" />

                      </div>
                    </div>
                    <div id="ff">
                      <div className="client-logo-pic">
                        <ItodoImage src="images/clienti/gkn.png" alt="" />

                      </div>
                    </div>
                    <div id="ff">
                      <div className="client-logo-pic">
                        <ItodoImage src="images/clienti/iveco.png" alt="" />

                      </div>
                    </div>
                    <div id="ff">
                      <div className="client-logo-pic">
                        <ItodoImage src="images/clienti/komatsu.png" alt="" />

                      </div>
                    </div>
                    <div id="ff">
                      <div className="client-logo-pic">
                        <ItodoImage src="images/clienti/lamborghini.png" alt="" />

                      </div>
                    </div>
                    <div id="ff">
                      <div className="client-logo-pic">
                        <ItodoImage src="images/clienti/lear.png" alt="" />

                      </div>
                    </div>
                    <div id="ff">
                      <div className="client-logo-pic">
                        <ItodoImage src="images/clienti/proma.png" alt="" />

                      </div>
                    </div>
                    <div id="ff">
                      <div className="client-logo-pic">
                        <ItodoImage id="tristone" src="images/clienti/tristone.png" alt="" />

                      </div>
                    </div>

                    <div id="ff">
                      <div className="client-logo-pic">
                        <ItodoImage src="images/clienti/same.png" alt="" />

                      </div>
                    </div>
                    <div id="ff">
                      <div className="client-logo-pic">
                        <ItodoImage src="images/clienti/steparava.png" alt="" />
                      </div>
                    </div>
                  </Carousel>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}


export const Clienti = (props) => {
  const isMobile = window.innerWidth >= 1200;

  return (
    <>
      {isMobile ? <Clienti1 /> : <Clienti2 />} {/* Usare Clienti1 per dispositivi mobili e Clienti2 per desktop */}
      {/* Il resto del tuo codice rimane invariato */}
      {/* ... */}
    </>
  );
}

export default Clienti;