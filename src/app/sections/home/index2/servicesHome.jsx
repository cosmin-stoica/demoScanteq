import React from "react";
import services from "./servicesData";
import ItodoImage from "../../../elements/itodo-img";

function ServicesHome() {

    return (
        <div id="servicesdiv" className="perflex width100">

            <div className="width90 perflexcolumn wow fadeInDown" data-wow-duration="1500ms">
            <div className="section-head center">
                        <h1 className="TitoloCapitolo">I nostri servizi</h1>
                    </div>
                <div className="jobBoxesDiv">
                    {services.map(job => (
                        <div className="jobBox wow fadeInLeft" data-wow-duration="1500ms" key={job.id}>
                                <span className="iconserviceshome"><i className={job.icon} /></span>
                            <span className="titolojobBox">{job.title}</span>
                            <p className="categoriajobBox">{job.category}</p>
                            <p className="descrizionejobBox">{job.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default ServicesHome;