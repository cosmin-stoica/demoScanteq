import React from "react";
import ItodoImage from "../../elements/itodo-img";
import { useTranslation } from 'react-i18next';


function JobsHome() {

    const { t } = useTranslation("job");
    const jobs = t('data', { returnObjects: true });


    return (
        <div className="perflex width100">

            <div className="width90 perflexcolumn wow fadeInDown" data-wow-duration="1500ms">
                <h1 className="leoperazionititolo">{t("header")}</h1>
                <div className="jobBoxesDiv">
                    {jobs.map(job => job.home && (
                        <div className="jobBox wow fadeInLeft" data-wow-duration="1500ms" key={job.id}>
                            <ItodoImage className="iconahomejobs" src={job.imgSrc}></ItodoImage>
                            <span className="categoriajobBox">{job.category}</span>
                            <p className="titolojobBox">{job.title}</p>
                            <p className="descrizionejobBox">{job.description_Home}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default JobsHome;