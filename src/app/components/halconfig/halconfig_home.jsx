import { useState, useEffect } from "react";
import ItodoImage from "../../elements/itodo-img";
import HalConfigChooser from "./halconfig_chooser";

const HalConfigHome = () => {
    const [tuttiHal, setTuttiHal] = useState([]);

    const [TpsHal, setTpsHal] = useState([]);
    const [TermoforoHal, setTermoforoHal] = useState([]);
    const [AirbagHal, setAirbagHal] = useState([]);
    const [AvvitaturaHal, setAvvitaturaHal] = useState([]);
    const [BarcodeHal, setBarcodeHal] = useState([]);
    const [BloccaggioHal, setBloccaggioHal] = useState([]);
    const [CaricoManualeHal, setCaricoManualeHal] = useState([]);
    const [CaricoHal, setCaricoHal] = useState([]);
    const [CinturaHal, setCinturaHal] = useState([]);
    const [CoppiaHal, setCoppiaHal] = useState([]);
    const [DimensionaleHal, setDimensionaleHal] = useState([]);
    const [DpdSbrHal, setDpdSbrHal] = useState([]);
    const [IcpQualitàHal, setIcpQualitàHal] = useState([]);
    const [JumpHal, setJumpHal] = useState([]);
    const [KillerSwitchHal, setKillerSwitchHal] = useState([]);
    const [LogisticaHal, setLogisticaHal] = useState([]);
    const [ManutenzioneHal, setManutenzioneHal] = useState([]);
    const [MotoreHal, setMotoreHal] = useState([]);
    const [OggettivazioneHal, setOggettivazioneHal] = useState([]);
    const [PickToLightHal, setPickToLightHal] = useState([]);
    const [RivettaturaHal, setRivettaturaHal] = useState([]);
    const [RobotHal, setRobotHal] = useState([]);
    const [ScartoHal, setScartoHal] = useState([]);
    const [ScuHal, setScuHal] = useState([]);
    const [SeegerManopolaHal, setSeegerManopolaHal] = useState([]);
    const [TimerHal, setTimerHal] = useState([]);
    const [VisioneHal, setVisioneHal] = useState([]);

    const [TpsJob, setTpsJob] = useState([]);
    const [TermoforoJob, setTermoforoJob] = useState([]);

    useEffect(() => {
        if (window.tuttiHal) {
            setTuttiHal(window.tuttiHal);
        }
        if (window.TpsHal) {
            setTpsHal(window.TpsHal);
        }
        if (window.TermoforoHal) {
            setTermoforoHal(window.TermoforoHal);
        }
        if (window.AirbagHal) {
            setAirbagHal(window.AirbagHal);
        }
        if (window.AvvitaturaHal) {
            setAvvitaturaHal(window.AvvitaturaHal);
        }
        if (window.BarcodeHal) {
            setBarcodeHal(window.BarcodeHal);
        }
        if (window.BloccaggioHal) {
            setBloccaggioHal(window.BloccaggioHal);
        }
        if (window.CaricoManualeHal) {
            setCaricoManualeHal(window.CaricoManualeHal);
        }
        if (window.CaricoHal) {
            setCaricoHal(window.CaricoHal);
        }
        if (window.CinturaHal) {
            setCinturaHal(window.CinturaHal);
        }
        if (window.CoppiaHal) {
            setCoppiaHal(window.CoppiaHal);
        }
        if (window.DimensionaleHal) {
            setDimensionaleHal(window.DimensionaleHal);
        }
        if (window.DpdSbrHal) {
            setDpdSbrHal(window.DpdSbrHal);
        }
        if (window.IcpQualitàHal) {
            setIcpQualitàHal(window.IcpQualitàHal);
        }
        if (window.JumpHal) {
            setJumpHal(window.JumpHal);
        }
        if (window.KillerSwitchHal) {
            setKillerSwitchHal(window.KillerSwitchHal);
        }
        if (window.LogisticaHal) {
            setLogisticaHal(window.LogisticaHal);
        }
        if (window.ManutenzioneHal) {
            setManutenzioneHal(window.ManutenzioneHal);
        }
        if (window.MotoreHal) {
            setMotoreHal(window.MotoreHal);
        }
        if (window.OggettivazioneHal) {
            setOggettivazioneHal(window.OggettivazioneHal);
        }
        if (window.PickToLightHal) {
            setPickToLightHal(window.PickToLightHal);
        }
        if (window.RivettaturaHal) {
            setRivettaturaHal(window.RivettaturaHal);
        }
        if (window.RobotHal) {
            setRobotHal(window.RobotHal);
        }
        if (window.ScartoHal) {
            setScartoHal(window.ScartoHal);
        }
        if (window.ScuHal) {
            setScuHal(window.ScuHal);
        }
        if (window.SeegerManopolaHal) {
            setSeegerManopolaHal(window.SeegerManopolaHal);
        }
        if (window.TimerHal) {
            setTimerHal(window.TimerHal);
        }
        if (window.VisioneHal) {
            setVisioneHal(window.VisioneHal);
        }
    }, []);

    useEffect(() => {
        if (window.TpsJob) {
            setTpsJob(window.TpsJob);
        }
        if (window.TermoforoJob) {
            setTermoforoJob(window.TermoforoJob);
        }
    }, []);

    const [isClicked, setIsClicked] = useState(false);
    const [selectedHal, setselectedHal] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('');


    const categories = [
        {
            titolo: "Automazione e Assemblaggio",
            icona: <i className="flaticon-development"></i>
        },
        {
            titolo: "Collaudo Componenti Automotive",
            icona: <i className="flaticon-skills"></i>
        },
        {
            titolo: "Controllo di Qualità e Verifica",
            icona: <i className="flaticon-data"></i>
        },
        {
            titolo: "Gestione Produzione e Logistica",
            icona: <i className="flaticon-supply-chain"></i>
        },
        {
            titolo: "Gestione Postazioni e Procedure",
            icona: <i className="flaticon-employee"></i>
        },
        {
            titolo: "Unità di Controllo Elettronico",
            icona: <i className="flaticon-touch"></i>
        }
    ];

    const handleCategoryClick = (category) => {
        setSelectedCategory(category);
    };

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
                return TermoforoHal;
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
                return TermoforoJob;
            default:
                return [];
        }
    }

    const handleBack = () => {
        setIsClicked(false);
        setselectedHal('');
    }

    const handleCategoryBack = () => {
        setSelectedCategory('');
    };


    return (
        <>
            <div className='paneprincipalepostazioni perflex position-relative'>
                {selectedCategory && <button className="esci-halconfig-button" onClick={handleCategoryBack}>Indietro</button>}
                {!selectedCategory && !isClicked && <div className="hal-config-div-flex">
                    {categories.map(category => (
                        <div onClick={() => handleCategoryClick(category.titolo)} className="category-config-div">
                            {category.icona}
                            {category.titolo}
                        </div>
                    ))}
                </div>}

                {selectedCategory && !isClicked && <div className="hal-config-div-flex">
                    {tuttiHal.filter(hal => hal.categoria === selectedCategory).map(hal => (
                        <div onClick={() => handleHalConfig(hal.titolo)} className="hal-config-div">
                            <ItodoImage src={hal.icona}></ItodoImage>
                            {hal.titolo}
                        </div>
                    ))}
                </div>}

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