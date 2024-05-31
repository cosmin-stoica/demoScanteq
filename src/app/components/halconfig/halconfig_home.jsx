import { useState, useEffect } from "react";
import ItodoImage from "../../elements/itodo-img";
import HeaderSoloTicket from "../../sections/common/headersoloticket";
import HalConfigChooser from "./halconfig_chooser";
import DocumentationCreator from "./documentation_creator";

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
    const [TimerHal, setTimerHal] = useState([]);
    const [VisioneHal, setVisioneHal] = useState([]);

    const [TpsJob, setTpsJob] = useState([]);
    const [TermoforoJob, setTermoforoJob] = useState([]);
    const [AirbagJob, setAirbagJob] = useState([]);
    const [AvvitaturaJob, setAvvitaturaJob] = useState([]);
    const [BarcodeJob, setBarcodeJob] = useState([]);
    const [BloccaggioJob, setBloccaggioJob] = useState([]);
    const [CaricoManualeJob, setCaricoManualeJob] = useState([]);
    const [CaricoJob, setCaricoJob] = useState([]);
    const [CinturaJob, setCinturaJob] = useState([]);
    const [CoppiaJob, setCoppiaJob] = useState([]);
    const [DimensionaleJob, setDimensionaleJob] = useState([]);
    const [DpdSbrJob, setDpdSbrJob] = useState([]);
    const [JumpJob, setJumpJob] = useState([]);
    const [KillerSwitchJob, setKillerSwitchJob] = useState([]);
    const [LogisticaJob, setLogisticaJob] = useState([]);
    const [ManutenzioneJob, setManutenzioneJob] = useState([]);
    const [MotoreJob, setMotoreJob] = useState([]);
    const [OggettivazioneJob, setOggettivazioneJob] = useState([]);
    const [PickToLightJob, setPickToLightJob] = useState([]);
    const [RivettaturaJob, setRivettaturaJob] = useState([]);
    const [RobotJob, setRobotJob] = useState([]);
    const [ScartoJob, setScartoJob] = useState([]);
    const [ScuJob, setScuJob] = useState([]);
    const [TimerJob, setTimerJob] = useState([]);
    const [VisioneJob, setVisioneJob] = useState([]);

    const [Doc, setDoc] = useState([]);

    useEffect(() => {
        if (window.Doc) {
            setDoc(window.Doc);
            console.log(window.Doc);
        }
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
        if (window.DPDSBRHal) {
            setDpdSbrHal(window.DPDSBRHal);
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
        if (window.SCUHal) {
            setScuHal(window.SCUHal);
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
        if (window.AirbagJob) {
            setAirbagJob(window.AirbagJob);
        }
        if (window.AvvitaturaJob) {
            setAvvitaturaJob(window.AvvitaturaJob);
        }
        if (window.BarcodeJob) {
            setBarcodeJob(window.BarcodeJob);
        }
        if (window.BloccaggioJob) {
            setBloccaggioJob(window.BloccaggioJob);
        }
        if (window.CaricoManualeJob) {
            setCaricoManualeJob(window.CaricoManualeJob);
        }
        if (window.CaricoJob) {
            setCaricoJob(window.CaricoJob);
        }
        if (window.CinturaJob) {
            setCinturaJob(window.CinturaJob);
        }
        if (window.CoppiaJob) {
            setCoppiaJob(window.CoppiaJob);
        }
        if (window.DimensionaleJob) {
            setDimensionaleJob(window.DimensionaleJob);
        }
        if (window.DpdSbrJob) {
            setDpdSbrJob(window.DpdSbrJob);
        }
        if (window.JumpJob) {
            setJumpJob(window.JumpJob);
        }
        if (window.KillerSwitchJob) {
            setKillerSwitchJob(window.KillerSwitchJob);
        }
        if (window.LogisticaJob) {
            setLogisticaJob(window.LogisticaJob);
        }
        if (window.ManutenzioneJob) {
            setManutenzioneJob(window.ManutenzioneJob);
        }
        if (window.MotoreJob) {
            setMotoreJob(window.MotoreJob);
        }
        if (window.OggettivazioneJob) {
            setOggettivazioneJob(window.OggettivazioneJob);
        }
        if (window.PickToLightJob) {
            setPickToLightJob(window.PickToLightJob);
        }
        if (window.RivettaturaJob) {
            setRivettaturaJob(window.RivettaturaJob);
        }
        if (window.RobotJob) {
            setRobotJob(window.RobotJob);
        }
        if (window.ScartoJob) {
            setScartoJob(window.ScartoJob);
        }
        if (window.ScuJob) {
            setScuJob(window.ScuJob);
        }
        if (window.TimerJob) {
            setTimerJob(window.TimerJob);
        }
        if (window.VisioneJob) {
            setVisioneJob(window.VisioneJob);
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
            case 'Pick To Light':
                setselectedHal('PickToLight');
                break;
            case 'Robot Collaborativo':
                setselectedHal('Robot');
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
            case 'Airbag':
                return AirbagHal;
            case 'Avvitatura':
                return AvvitaturaHal;
            case 'Barcode':
                return BarcodeHal;
            case 'Bloccaggio':
                return BloccaggioHal;
            case 'CaricoManuale':
                return CaricoManualeHal;
            case 'Carico':
                return CaricoHal;
            case 'Cintura':
                return CinturaHal;
            case 'Coppia':
                return CoppiaHal;
            case 'Dimensionale':
                return DimensionaleHal;
            case 'DpdSbr':
                return DpdSbrHal;
            case 'Jump':
                return JumpHal;
            case 'KillerSwitch':
                return KillerSwitchHal;
            case 'Logistica':
                return LogisticaHal;
            case 'Manutenzione':
                return ManutenzioneHal;
            case 'Motore':
                return MotoreHal;
            case 'Oggettivazione':
                return OggettivazioneHal;
            case 'PickToLight':
                return PickToLightHal;
            case 'Rivettatura':
                return RivettaturaHal;
            case 'Robot':
                return RobotHal;
            case 'Scarto':
                return ScartoHal;
            case 'Scu':
                return ScuHal;
            case 'Timer':
                return TimerHal;
            case 'Visione':
                return VisioneHal;
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
            case 'Airbag':
                return AirbagJob;
            case 'Avvitatura':
                return AvvitaturaJob;
            case 'Barcode':
                return BarcodeJob;
            case 'Bloccaggio':
                return BloccaggioJob;
            case 'CaricoManuale':
                return CaricoManualeJob;
            case 'Carico':
                return CaricoJob;
            case 'Cintura':
                return CinturaJob;
            case 'Coppia':
                return CoppiaJob;
            case 'Dimensionale':
                return DimensionaleJob;
            case 'DpdSbr':
                return DpdSbrJob;
            case 'Jump':
                return JumpJob;
            case 'KillerSwitch':
                return KillerSwitchJob;
            case 'Logistica':
                return LogisticaJob;
            case 'Manutenzione':
                return ManutenzioneJob;
            case 'Motore':
                return MotoreJob;
            case 'Oggettivazione':
                return OggettivazioneJob;
            case 'PickToLight':
                return PickToLightJob;
            case 'Rivettatura':
                return RivettaturaJob;
            case 'Robot':
                return RobotJob;
            case 'Scarto':
                return ScartoJob;
            case 'Scu':
                return ScuJob;
            case 'Timer':
                return TimerJob;
            case 'Visione':
                return VisioneJob;
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



    const halArrays = Doc;

    return (
        <>
            <HeaderSoloTicket></HeaderSoloTicket>
            <div className='paneprincipalepostazioni perflexcolumn position-relative'>
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

                {!selectedCategory && !isClicked && <DocumentationCreator className="documentation-creator-btn" halArrays={halArrays}></DocumentationCreator>
                }
            </div>

        </>
    );
};

export default HalConfigHome;