import ItodoImage from "../../elements/itodo-img";
import HeaderSoloTicket from "../../elements/common/headersoloticket";
import { useEffect, useState } from "react";
import ConfigCreator from "../halconfig/config_creator";

const Job_Config_Home = () => {

    const [dataDoc, setdataDoc] = useState([]);
    const [selectedName, setSelectedName] = useState('');
    const [selectedJob, setSelectedJob] = useState([]);
    const [selectedJobText, setSelectedJobText] = useState(null);
    const [selectedJobIndex, setSelectedJobIndex] = useState(null);
    //const [jobConfigString, setJobConfigString] = useState("");
    const [jobs, setJobs] = useState([]);

    const addJob = (name, config) => {
        const newJob = { name, config };
        setJobs(prevJobs => [...prevJobs, newJob]);
    };

    const handleJobConfigString = (configString) => {
        addJob(selectedName, configString);
        apriChiudiDiv();
    };

    useEffect(() => {
        console.log(jobs);
    }, [jobs]);



    const [isDivAperto, setDivAperto] = useState(false);

    const apriChiudiDiv = () => {
        console.log('name:', selectedName);
        if (selectedName.length > 0 && selectedName !== null)
            setDivAperto(!isDivAperto);

    };




    const handleChangeJob = (event) => {
        const name = event.target.value;
        setSelectedName(name);

        const selectedData = dataDoc.find(item => item.Name === name);
        if (selectedData) {
            setSelectedJob(selectedData.Job);
        } else {
            setSelectedJob([]);
        }
    };

    useEffect(() => {
        setdataDoc(window.dataDoc);
        console.log('data', window.dataDoc);

    }, []);

    const [form, setForm] = useState({
        codiceSedile: '',
        descrizioneSedile: '',
        idPrimoJob: 0,
        idJobDopoNOK: 0,
        maxNumOggettivazioneNok: 0,
        avvioUltimoCicloValido: false,
        idPrimoJobDopoRiavvio: 0,
        jobReorderAutomatico: false,
        nomeFile: '',
        includeCodiceSedile: false,
        includeDescrizioneSedile: false,
        includeIdPrimoJob: false,
        includeIdJobDopoNOK: false,
        includeMaxNumOggettivazioneNok: false,
        includeAvvioUltimoCicloValido: false,
        includeIdPrimoJobDopoRiavvio: false
    });

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setForm((prevForm) => ({
            ...prevForm,
            [name]: type === 'checkbox' ? checked : value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(form);
        // qui puoi aggiungere la logica per gestire l'invio del form
    };


    const handleDownload = (event) => {
        event.preventDefault();

        let lastJobIndex = jobs.length;

        let formContent = `[SEZIONE GENERALE]\n`;

        if (form.includeCodiceSedile) {
            formContent += `Codice sedile = ${form.codiceSedile}\n`;
        }
        if (form.includeDescrizioneSedile) {
            formContent += `Descrizione sedile = ${form.descrizioneSedile}\n`;
        }
        if (form.includeIdPrimoJob) {
            formContent += `ID primo job = ${form.idPrimoJob}\n`;
        }
        if (form.includeIdJobDopoNOK) {
            formContent += `ID job dopo NOK = ${form.idJobDopoNOK}\n`;
        }
        if (form.includeMaxNumOggettivazioneNok) {
            formContent += `Numero massimo job oggettivazione con esito NOK = ${form.maxNumOggettivazioneNok}\n`;
        }
        if (form.includeAvvioUltimoCicloValido) {
            formContent += `Avvio ultimo ciclo valido = ${form.avvioUltimoCicloValido ? '1' : '0'}\n`;
        }
        if (form.includeIdPrimoJobDopoRiavvio) {
            formContent += `ID primo job dopo riavvio = ${form.idPrimoJobDopoRiavvio}\n`;
        }

        formContent += `Numero Job = ${lastJobIndex}\n`;

        let iniContent = "";

        if (form.jobReorderAutomatico) {
            iniContent = jobs.map((job, index) => {
                // Sostituisci [JOB 1] con [JOB <index + 1>]
                return job.config.replace(/\[JOB \d+\]/, `[JOB ${index + 1}]`);
            }).join('\n\n');
        } else {
            iniContent = jobs.map(job => job.config).join('\n\n');
        }

        const finalContent = `${formContent.trim()}\n\n${iniContent}`;

        const blob = new Blob([finalContent], { type: 'text/plain' });
        const url = URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = url;
        link.download = `Job Config ${form.nomeFile}.ini`;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };



    const viewJobText = (text, index) => {
        setSelectedJobText(text);
        setSelectedJobIndex(index);
    };

    const closeJobText = () => {
        setSelectedJobText(null);
        setSelectedJobIndex(null);
    };

    const handleJobTextChange = (event) => {
        setSelectedJobText(event.target.value);
    };
    const saveJobText = () => {
        setJobs(prevJobs => {
            const updatedJobs = [...prevJobs];
            updatedJobs[selectedJobIndex].config = selectedJobText;
            return updatedJobs;
        });
        closeJobText();
    };

    const deleteJob = (index) => {
        setJobs(prevJobs => prevJobs.filter((_, i) => i !== index));
    };



    return (
        <>
            <HeaderSoloTicket></HeaderSoloTicket>
            <div className='paneprincipalepostazioni'>
                <div className="margin-top100 width100 perflex">

                    <div className="sezione-generale-div">
                        <h1>Sezione Generale</h1>
                        <form className="sezione-generale-form" onSubmit={handleSubmit}>
                            <div className="sezione-generale-form-group">
                                <p>Nome File</p>
                                <input
                                    type="text"
                                    name="nomeFile"
                                    value={form.nomeFile}
                                    onChange={handleChange}
                                />
                                <div className="sezione-generale-checkbox"></div>
                            </div>
                            <div className="sezione-generale-form-group">
                                <p>Codice Sedile</p>
                                <input
                                    type="text"
                                    name="codiceSedile"
                                    value={form.codiceSedile}
                                    onChange={handleChange}
                                />
                                <div className="sezione-generale-checkbox">
                                    <input
                                        type="checkbox"
                                        name="includeCodiceSedile"
                                        checked={form.includeCodiceSedile}
                                        onChange={handleChange}
                                        className="job-checkbox-included"
                                    />
                                </div>
                            </div>
                            <div className="sezione-generale-form-group">
                                <p>Descrizione Sedile</p>
                                <input
                                    type="text"
                                    name="descrizioneSedile"
                                    value={form.descrizioneSedile}
                                    onChange={handleChange}
                                />
                                <div className="sezione-generale-checkbox">
                                    <input
                                        type="checkbox"
                                        name="includeDescrizioneSedile"
                                        checked={form.includeDescrizioneSedile}
                                        onChange={handleChange}
                                        className="job-checkbox-included"
                                    />
                                </div>
                            </div>
                            <div className="sezione-generale-form-group">
                                <p>ID Primo Job</p>
                                <input
                                    type="number"
                                    name="idPrimoJob"
                                    value={form.idPrimoJob}
                                    onChange={handleChange}
                                />
                                <div className="sezione-generale-checkbox">
                                    <input
                                        type="checkbox"
                                        name="includeIdPrimoJob"
                                        checked={form.includeIdPrimoJob}
                                        onChange={handleChange}
                                        className="job-checkbox-included"
                                    />
                                </div>
                            </div>
                            <div className="sezione-generale-form-group">
                                <p>ID Job Dopo NOK</p>
                                <input
                                    type="number"
                                    name="idJobDopoNOK"
                                    value={form.idJobDopoNOK}
                                    onChange={handleChange}
                                />
                                <div className="sezione-generale-checkbox">
                                <input
                                    type="checkbox"
                                    name="includeIdJobDopoNOK"
                                    checked={form.includeIdJobDopoNOK}
                                    onChange={handleChange}
                                    className="job-checkbox-included"
                                />
                                </div>
                            </div>
                            <div className="sezione-generale-form-group">
                                <p>ID Primo Job Dopo Riavvio</p>
                                <input
                                    type="number"
                                    name="idPrimoJobDopoRiavvio"
                                    value={form.idPrimoJobDopoRiavvio}
                                    onChange={handleChange}
                                />
                                <div className="sezione-generale-checkbox">
                                <input
                                    type="checkbox"
                                    name="includeIdPrimoJobDopoRiavvio"
                                    checked={form.includeIdPrimoJobDopoRiavvio}
                                    onChange={handleChange}
                                    className="job-checkbox-included"
                                />
                                </div>
                            </div>
                            <div className="sezione-generale-form-group">
                                <p>Numero massimo job oggettivazione con esito NOK</p>
                                <input
                                    type="number"
                                    name="maxNumOggettivazioneNok"
                                    value={form.maxNumOggettivazioneNok}
                                    onChange={handleChange}
                                />
                                <div className="sezione-generale-checkbox">
                                <input
                                    type="checkbox"
                                    name="includeMaxNumOggettivazioneNok"
                                    checked={form.includeMaxNumOggettivazioneNok}
                                    onChange={handleChange}
                                    className="job-checkbox-included"
                                />
                                </div>
                            </div>
                            <div className="sezione-generale-form-group">
                                <p>Avvio Ultimo Ciclo Valido</p>
                                <input
                                    type="checkbox"
                                    name="avvioUltimoCicloValido"
                                    checked={form.avvioUltimoCicloValido}
                                    onChange={handleChange}
                                />
                                <div className="sezione-generale-checkbox">
                                <input
                                    type="checkbox"
                                    name="includeAvvioUltimoCicloValido"
                                    checked={form.includeAvvioUltimoCicloValido}
                                    onChange={handleChange}
                                    className="job-checkbox-included"
                                />
                                </div>
                            </div>
                            <div className="sezione-generale-form-group">
                                <p>Job Reorder Automatico</p>
                                <input
                                    type="checkbox"
                                    name="jobReorderAutomatico"
                                    checked={form.jobReorderAutomatico}
                                    onChange={handleChange}
                                />
                                <div className="sezione-generale-checkbox"></div>
                            </div>
                        </form>


                    </div>
                    <div className="sezione-job-div">
                        <div className="sezione-job-div-scegli">
                            <div>
                                <label htmlFor="dataSelect">Scegli un job</label>
                                <select id="dataSelect" value={selectedName} onChange={handleChangeJob}>
                                    <option value="">Seleziona il job</option>
                                    {dataDoc.map((item, index) => (
                                        <option key={index} value={item.Name}>
                                            {item.Name}
                                        </option>
                                    ))}
                                </select>
                            </div>
                            <div onClick={apriChiudiDiv}>
                                <button  className="sezione-job-vedibtn" >Completa Job</button>
                            </div>
                            <div className="width100 perflex">
                                <button className='crea-job-button' onClick={handleDownload}>Crea Job Config</button>
                            </div>

                        </div>
                        <div className="sezione-job-div-vedi">
                            <h1>Jobs Presenti</h1>
                            <div className="sezione-job-div-vedi-divperul">
                                <ul>
                                    {jobs.map((job, index) => (
                                        <div key={index} className="sezione-job-div-vedi-jobdiv">
                                            <p className="sezione-job-index-job">{index + 1}</p>
                                            <p className="sezione-job-name-job">{job.name}</p>
                                            <button className="sezione-job-vedibtn" onClick={() => viewJobText(job.config, index)}>Vedi Job</button>
                                            <button className="sezione-job-vedibtn" onClick={() => addJob(job.name, job.config)}>Duplica Job</button>
                                            <button className="sezione-job-eliminabtn" onClick={() => deleteJob(index)}>Elimina</button>
                                        </div>
                                    ))}
                                </ul>
                            </div>
                            {selectedJobText !== null && (
                                <div className="modal-job">
                                    <div className="modal-content-job">
                                        <span className="close-job" onClick={closeJobText}>&times;</span>
                                        <textarea value={selectedJobText} onChange={handleJobTextChange} />
                                        <button className="sezione-job-vedibtn" onClick={saveJobText}>Salva</button>
                                    </div>
                                </div>
                            )}
                        </div>

                    </div>

                </div >
            </div >
            {isDivAperto && (
                <div className='divAperto perflex'>
                    <span onClick={apriChiudiDiv} className='chiudiDiv'>
                        &times;
                    </span>
                    <ConfigCreator
                        isHal={false}
                        array={selectedJob}
                        title={selectedName}
                        isJobConfig={true}
                        onJobConfigString={handleJobConfigString}
                    ></ConfigCreator>
                </div>
            )
            }
        </>
    );
};

export default Job_Config_Home;