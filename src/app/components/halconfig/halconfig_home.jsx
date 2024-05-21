import { useState } from "react";
import ItodoImage from "../../elements/itodo-img";
import HalConfigProva from "./halconfig_prova";
import tuttiHal from "../../../globals/DataTEXT/HalConfig/tuttihal";

import Tps from "../../../globals/DataTEXT/HalConfig/Tps";
import Termoforo from "../../../globals/DataTEXT/HalConfig/Termoforo";


const HalConfigHome = () => {

    const [isClicked, setIsClicked] = useState(false);

    const [selectedHal, setselectedHal] = useState('');

    const handleHalConfig = (hal) => {
    
       switch (hal){
            case 'Termoforo':
                setselectedHal('Heater');
                break;
            default:
                setselectedHal(hal);
       } 
       setIsClicked(true);
    }

    const handleEsciButton = () => {
        setIsClicked(false);
    }

    const getHalArray = (hal) => {
        switch (hal) {
            case 'TPS':
                return Tps;
            case 'Heater':
                return Termoforo;
            // Add more cases for other hals
            default:
                return [];
        }
    }


    return (
        <>
            <div className='paneprincipalepostazioni perflex position-relative'>

                <button onClick={handleEsciButton} className="esci-halconfig-button">Esci</button>

                {!isClicked && tuttiHal.map(hal =>(
                    <div onClick={() => handleHalConfig(hal.titolo)} className="hal-config-div">
                    <ItodoImage src={hal.icona}></ItodoImage>
                    {hal.titolo}
                </div>
                ))}

            

                {isClicked &&
                    <HalConfigProva array={getHalArray(selectedHal)} hal={selectedHal} />}

            </div>
        </>
    );
};

export default HalConfigHome;