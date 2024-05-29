import { useState } from "react";
import ConfigCreator from "./config_creator";


const HalConfigChooser = ({ hal_config_array, selectedHal, job_config_array, selectedJob, onBack }) => {

    const [isHal, setIsHal] = useState(false);
    const [isJob, setIsJob] = useState(false);

    const handleHalConfig = () => {
        setIsHal(true);
    }

    const handleJobConfig = () => {
        setIsJob(true);
    }

    const handleBack = () => {
        setIsHal(false);
        setIsJob(false);
    }

    return (
        <>
            { !isHal && !isJob && <div className="hal-config-chooser-div">
                <div onClick={handleHalConfig}>
                    <i className="flaticon-smart-contracts"></i>
                    Hal Config
                </div>

                <div onClick={handleJobConfig}>
                    <i className="flaticon-web-plugin"></i>
                    Job Config
                </div>
            </div>}

            {(isHal || isJob) && <button className="esci-halconfig-button" onClick={handleBack}>Indietro</button>}
            {isHal && <ConfigCreator isHal={true} array={hal_config_array} title={selectedHal} />}
            {isJob && <ConfigCreator isHal={false} array={job_config_array} title={selectedJob} />}
            {!isHal && !isJob && <button className="esci-halconfig-button"  onClick={onBack}>Indietro</button>}
        </>
    );
};

export default HalConfigChooser;
