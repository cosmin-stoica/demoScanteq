import React from "react";
import ItodoImage from "../../elements/itodo-img";
import jobs from "./jobsData";


function JobsHome() {


    

    return (
        <div className="perflex width100">

        <div className="width90 perflexcolumn wow fadeInDown" data-wow-duration="1500ms">
        <h1 className="leoperazionititolo">Esempi di operazioni della piattaforma</h1>
            <div className="jobBoxesDiv">
                {jobs.map(job => (
                    <div className="jobBox wow fadeInLeft" data-wow-duration="1500ms" key={job.id}>
                        <ItodoImage className="iconahomejobs" src={job.imgSrc}></ItodoImage>
                        <span className="categoriajobBox">{job.category}</span>
                        <p className="titolojobBox">{job.title}</p>
                        <p className="descrizionejobBox">{job.description}</p>
                    </div>
                ))}
            </div>
        </div>
    </div>
    );
}

export default JobsHome;