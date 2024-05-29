import { useState, useEffect } from "react";
import ItodoImage from "../../elements/itodo-img";
import HalConfigCreator from "./halconfig_creator";
//import tuttiHal from "../../../../public/config_creator/HalConfig/tuttihal";

//import TpsHal from "../../../../public/config_creator/HalConfig/TpsHal";
//import TpsJob from "../../../../public/config_creator/JobConfig/TpsJob";
//import Termoforo from "../../../../public/config_creator/HalConfig/Termoforo";

import HalConfigChooser from "./halconfig_chooser";

const HalConfigHome = () => {
    const [tuttiHal, setTuttiHal] = useState([]);
    const [TpsHal, setTpsHal] = useState([]);
    const [TpsJob, setTpsJob] = useState([]);
    const [Termoforo, setTermoforo] = useState([]);

    useEffect(() => {
        // Assicurati che tuttiHal sia disponibile
        if (window.tuttiHal) {
            setTuttiHal(window.tuttiHal);
        }
        if (window.TpsHal) {
            setTpsHal(window.TpsHal);
        }
        if (window.TpsJob) {
            setTpsJob(window.TpsJob);
        }
        if (window.Termoforo) {
            setTermoforo(window.Termoforo);
        }
    }, []);

    const [isClicked, setIsClicked] = useState(false);
    const [selectedHal, setselectedHal] = useState('');

    const handleHalConfig = (hal) => {
        switch (hal) {
            case 'Termoforo':
                setselectedHal('Heater');
                break;
            default:
                setselectedHal(hal);
        }
        setIsClicked(true);
    }

    const getHalArray = (hal) => {
        switch (hal) {
            case 'TPS':
                return TpsHal;
            case 'Heater':
                return Termoforo;
            // Add more cases for other hals
            default:
                return [];
        }
    }

    const getJobArray = (hal) => {
        switch (hal) {
            case 'TPS':
                return TpsJob;
            case 'Heater':
            // Add more cases for other hals
            default:
                return [];
        }
    }

    const handleBack = () => {
        setIsClicked(false);
        setselectedHal('');
    }
    return (
        <>
            <div className='paneprincipalepostazioni perflex position-relative'>


                {!isClicked && tuttiHal.map(hal => (
                    <div onClick={() => handleHalConfig(hal.titolo)} className="hal-config-div">
                        <ItodoImage src={hal.icona}></ItodoImage>
                        {hal.titolo}
                    </div>
                ))}



                {isClicked &&
                    <>
                        <HalConfigChooser hal_config_array={getHalArray(selectedHal)} selectedHal={selectedHal} job_config_array={getJobArray(selectedHal)} selectedJob={selectedHal} onBack={handleBack} />
                    </>
                }
            </div>
        </>
    );
};

export default HalConfigHome;