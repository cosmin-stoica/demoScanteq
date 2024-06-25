import React from "react";
import { useTranslation } from 'react-i18next';

function ServicesHome() {
    const { t, i18n } = useTranslation();

     const services = t('home.servizi.data', { returnObjects: true });

     if (!Array.isArray(services)) {
         console.error("Expected 'services' to be an array but got:", services);
         return null; 
     }



    return (
        <div id="servicesdiv" className="perflex width100">
            <div className="width90 perflexcolumn wow fadeInDown" data-wow-duration="1500ms">
                <div className="section-head center">
                    <h1 className="TitoloCapitolo">{t('home.servizi.header')}</h1>
                </div>
                <div className="jobBoxesDiv">
                    {services.map(job => (
                        <div className="jobBox wow fadeInLeft" data-wow-duration="1500ms" key={job.id}>
                            <span className="iconserviceshome"><i className={job.icon} /></span>
                            <span className="titolojobBox">
                                {job.title}
                            </span>
                            <p className="categoriajobBox">{job.category}</p>
                            <p className="descrizionejobBox">
                                {job.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default ServicesHome;
