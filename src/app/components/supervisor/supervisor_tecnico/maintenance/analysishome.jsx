import React, { useState, useEffect } from 'react';
import Header21 from '../../../../elements/common/header21';
import Navbar from './navbar';
import AnalysisOptionBox from './optionbox.js';
import GaussianChart from './GaussianChart.jsx';
import axios from 'axios'; // Importa Axios

const ChoiceBox = ({ options, onSelect, keyProp }) => {
  return (
    <select key={keyProp} onChange={(e) => onSelect(e.target.value)}>
      {options.map((option, index) => (
        <option key={index} value={option}>
          {option}
        </option>
      ))}
    </select>
  );
};


const DataInput = ({ label, onChange, keyProp }) => {
  return (
    <div key={keyProp}>
      <label>{label}</label>
      <input type="date" onChange={(e) => onChange(e.target.value)} />
    </div>
  );
};


const AnalysisHome = () => {

  const [postazioni, setPostazioni] = useState([]);
  const [postazioniOptions, setPostazioniOptions] = useState([]);

  useEffect(() => {
    // Fetch data for postazioni
    axios.get('https://www.scanteq.com/php/postazioni.php')
      .then(response => {
        const postazioniData = response.data;
        setPostazioni(postazioniData);
  
        // Genera l'array delle opzioni
        const options = ["", ...postazioniData.map(postazione => postazione.Name)];
        setPostazioniOptions(options);
      })
      .catch(error => {
        console.error('Errore durante il recupero delle postazioni:', error);
      });
  }, []);


  const [selectedOption, setSelectedOption] = useState(null);
  const [formData, setFormData] = useState({
    postazione: null,
    tempoInizio: null,
    tempoFine: null,
    nomeJob: null,
    idVite: null,
    gp: null,
    areaInteresse: null,
  });
  const [sendData, setSendData] = useState({
    nomeJob: false,
    idVite: false,
    gp: false,
    areaInteresse: false,
  });

  const [mean, setMean] = useState(0);
  const [standardDeviation, setStandardDeviation] = useState(0);
  const [threshold, setThreshold] = useState(0);
  const [interestData, setInterestData] = useState([]);
  const [chartKey, setChartKey] = useState(0);

  const [newmean, setNewMean] = useState(0);
  const [newstandardDeviation, setNewStandardDeviation] = useState(0);
  const [newthreshold, setNewThreshold] = useState(0);


  const [currentpostazione, setcurrentPostazione] = useState('');
  const [currenttempoInizio, setcurrentTempoInizio] = useState('');
  const [currenttempoFine, setcurrentTempoFine] = useState('');
  const [currentNomeJob, setcurrentNomeJob] = useState('');
  const [currentInteresse, setcurrentInteresse] = useState('');
  const [currentIdVite, setcurrentIdVite] = useState('');
  const [currentGP, setcurrentGP] = useState('');
  const [numeroValori, setnumeroValori] = useState(0);
  

  const setCurrents = (Postazione, TempoInizio, TempoFine, NomeJob, Interesse, IdVite, GP) =>{
    setcurrentPostazione(Postazione);
    setcurrentTempoInizio(TempoInizio);
    setcurrentTempoFine(TempoFine);
    setcurrentNomeJob(NomeJob);
    setcurrentInteresse(Interesse);
    setcurrentIdVite(IdVite);
    setcurrentGP(GP);
  }

  const setCurrentsNull = () =>{
    setcurrentPostazione('');
    setcurrentTempoInizio('');
    setcurrentTempoFine('');
    setcurrentNomeJob('');
    setcurrentInteresse('');
    setcurrentIdVite('');
    setcurrentGP('');
  }


  const handleOptionClick = (option) => {
    console.log(`Hai cliccato su: ${option}`);
    setSelectedOption(option);
    setCurrentsNull(); // Azzera i dati correnti quando l'opzione viene cambiata
    setInterestData([]); // Azzera il dataset del grafico
    setChartKey(prevKey => prevKey + 1); // Cambia la chiave del grafico per forzarne il reset
    setnumeroValori(0);
  };
  
  const [choiceBoxKey, setChoiceBoxKey] = useState(0);

  const renderFormBasedOnOption = () => {
    switch (selectedOption) {
      case "Avvitature":
      case "Coppia":
      case "Termoforo":
        return (
          <div className='formanalytics'>
            <div className='formdivv'>
              <form className='quelform'>
                <label>Postazione</label>
                <ChoiceBox keyProp={choiceBoxKey} options={postazioniOptions} onSelect={(value) => handlePostazioneSelect(value)} />
                <DataInput keyProp={choiceBoxKey} label="Tempo inizio" onChange={(value) => handleTempoInizioChange(value)} />
                <DataInput keyProp={choiceBoxKey} label="Tempo fine" onChange={(value) => handleTempoFineChange(value)} />
                <label>Nome Job</label>
                <ChoiceBox keyProp={choiceBoxKey} options={idJobOptions} onSelect={(value) => handleIdJobSelect(value)} />
                {selectedOption === "Avvitature" && (
                  <>
                    <div className='avvitatureoptdiv'>
                      <div>
                        <label>Interesse</label>
                        <ChoiceBox keyProp={choiceBoxKey} options={areaInteresseOptions} onSelect={(value) => handleAreaInteresseSelect(value)} />
                      </div>
                      <div>
                        <label>Id Vite</label>
                        <ChoiceBox keyProp={choiceBoxKey} options={idViteOptions} onSelect={(value) => handleIdViteSelect(value)} />
                      </div>
                      <div>
                        <label>GP</label>
                        <ChoiceBox keyProp={choiceBoxKey} options={gpOptions} onSelect={(value) => handleGPSelect(value)} />
                      </div>
                    </div>
                  </>
                )}
              </form>
              <button onClick={handleInviaClick}>Crea analisi statica</button>
              <div className='ggggg'>
              <div className='stiamoanalizzandodiv'>
              <p className='stiamoanalizzandop'>Valori analizzati: <span>{numeroValori}</span>    <button className='resetbuttonana' onClick={handleReset}>Reset</button> </p>
              </div>
              </div>
            </div>
            <div className='formdivv'>
              <div className='analisiincorso'>
                <h1>Analisi in corso</h1>
                <p>Postazione: {currentpostazione}</p>
                <p>Tempo Inizio: {currenttempoInizio}</p>
                <p>Tempo Fine: {currenttempoFine}</p>
                <p>Nome Job: {currentNomeJob}</p>
                {selectedOption === "Avvitature" && (
                  <>
                    <p>Id Vite: {currentIdVite}</p>
                    <p>Interesse: {currentInteresse}</p>
                    <p>GP: {currentGP}</p>
                  </>
                )}
              </div>
            </div>
          </div>
        );
      default:
        return null;
    }
  };
  
  const handleReset = () => {
    // Reimposta gli stati associati a ciascun ChoiceBox al valore iniziale
    setFormData({
      postazione: '',
      tempoInizio: '',
      tempoFine: '',
      nomeJob: '',
      idVite: '',
      gp: '',
      areaInteresse: '',
    });
    setChoiceBoxKey(prevKey => prevKey + 1); // Cambia la chiave per forzare il reset dei ChoiceBox
    setCurrentsNull();
  };
  

  const idJobOptions = ["","Job1", "Job2", "Job3"];
  const idViteOptions = ["","101", "102", "103", "104", "105"];
  const gpOptions = ["","GP1", "GP2", "GP3"];
  const areaInteresseOptions = ["", "Coppia", "Angolo"];

  const handlePostazioneSelect = (value) => {
    setFormData({ ...formData, postazione: value });
  };

  const handleTempoInizioChange = (value) => {
    setFormData({ ...formData, tempoInizio: value });
  };

  const handleTempoFineChange = (value) => {
    setFormData({ ...formData, tempoFine: value });
  };

  const handleIdJobSelect = (value) => {
    setFormData({ ...formData, nomeJob: value });
  };

  const handleIdViteSelect = (value) => {
    setFormData({ ...formData, idVite: value });
  };

  const handleGPSelect = (value) => {
    setFormData({ ...formData, gp: value });
  };

  const handleAreaInteresseSelect = (value) => {
    setFormData({ ...formData, areaInteresse: value });
  };

  const handleCheckboxChange = (key) => {
    setSendData((prevData) => ({
      ...prevData,
      [key]: !prevData[key],
    }));
  };

  

  const calcolaGauss = () => {
    
    setMean(newmean);
    setStandardDeviation(newstandardDeviation);
    setThreshold(newthreshold);
  }
 
  const handleInviaClick = () => {

    if(selectedOption === 'Avvitature'){

  
      const post = formData.areaInteresse;

      if(post == null || post === ''){
        window.alert("Per creare un'analisi delle avvitature devi inserire almeno l'area di interesse");
        return;
      }


      const tempoInizio = formData.tempoInizio;
      const tempoFine = formData.tempoFine;
      const timestampInizio = new Date(tempoInizio).getTime();
      const timestampFine = new Date(tempoFine).getTime();
    const dataToSend = {
      postazione: formData.postazione || null,
      tempoInizio: timestampInizio || null,
      tempoFine: timestampFine || null,
      areaInteresse: formData.areaInteresse || null,
      nomeJob: formData.nomeJob || null,
      idVite: formData.idVite || null,
      gp: formData.gp || null,
    };
    console.log(dataToSend);
    axios.get('https://www.scanteq.com/php/variables.php', {
      params: dataToSend,
    })
      .then(response => {
        console.log('Dati ricevuti dalla richiesta GET:', response.data);
        // Aggiorna il dataset in base all'opzione di interesse selezionata
        setInterestData(response.data);
        setnumeroValori(response.data.length);
        setChartKey(prevKey => prevKey + 1);
      })
      .catch(error => {
        console.error('Errore nella richiesta GET:', error);
        setCurrentsNull();
      })
      .finally(() =>{
        setCurrents(formData.postazione,formData.tempoInizio, formData.tempoFine,formData.nomeJob,formData.areaInteresse,formData.idVite,formData.gp);
      });
    }else if(selectedOption === 'Coppia'){

      const tempoInizio = formData.tempoInizio;
      const tempoFine = formData.tempoFine;
      const timestampInizio = new Date(tempoInizio).getTime();
      const timestampFine = new Date(tempoFine).getTime();

      const dataToSend = {
        postazione: formData.postazione || null,
        tempoInizio: timestampInizio || null,
        tempoFine: timestampFine || null,
        nomeJob: formData.nomeJob || null,
      };
      axios.get('https://www.scanteq.com/php/coppia.php', {
        headers:{
          'X-Data': JSON.stringify('getfinale'),
        },
        params: dataToSend,
      })
        .then(response => {
          console.log('Dati ricevuti dalla richiesta GET:', response.data);
          // Aggiorna il dataset in base all'opzione di interesse selezionata
          setInterestData(response.data);
          setnumeroValori(response.data.length);
          setChartKey(prevKey => prevKey + 1);
          setCurrents(formData.postazione,formData.tempoInizio, formData.tempoFine,formData.nomeJob,'','','');
        })
        .catch(error => {
          console.error('Errore nella richiesta GET:', error);
          setCurrentsNull();
        });
    }else if(selectedOption === 'Termoforo'){

      const tempoInizio = formData.tempoInizio;
      const tempoFine = formData.tempoFine;
      const timestampInizio = new Date(tempoInizio).getTime();
      const timestampFine = new Date(tempoFine).getTime();

      const dataToSend = {
        postazione: formData.postazione || null,
        tempoInizio: timestampInizio || null,
        tempoFine: timestampFine || null,
        nomeJob: formData.nomeJob || null,
      };
      axios.get('https://www.scanteq.com/php/termoforo.php', {
        headers:{
          'X-Data': JSON.stringify('getfinale'),
        },
        params: dataToSend,
      })
        .then(response => {
          console.log('Dati ricevuti dalla richiesta GET:', response.data);
          // Aggiorna il dataset in base all'opzione di interesse selezionata
          setInterestData(response.data);
          setnumeroValori(response.data.length);
          setChartKey(prevKey => prevKey + 1);
          setCurrents(formData.postazione,formData.tempoInizio, formData.tempoFine,formData.nomeJob,'','','');
        })
        .catch(error => {
          console.error('Errore nella richiesta GET:', error);
          setCurrentsNull();
        });
    }


  };

  return (
    <div className='paneprincipalepostazioni'>
      <Header21></Header21>
      <Navbar></Navbar>
      <div className='tablepaneavv'>
        <h1>Analisi Statica</h1>
        <h2 className='percosa'>Per cosa desideri creare un'analisi?</h2>
        <div className='paneanalisiscegli'>
          <AnalysisOptionBox text="Avvitature" onClick={() => handleOptionClick("Avvitature")} />
          <AnalysisOptionBox text="Termoforo" onClick={() => handleOptionClick("Termoforo")} />
          <AnalysisOptionBox text="Coppia" onClick={() => handleOptionClick("Coppia")} />
        </div>
        {renderFormBasedOnOption()}

      <div className='controllichart'>
        <div>
          <label>Mean:</label>
          <input type="number" value={newmean} onChange={(e) => setNewMean(Number(e.target.value))} />
        </div>
        <div>
          <label>Standard Deviation:</label>
          <input type="number" value={newstandardDeviation} onChange={(e) => setNewStandardDeviation(Number(e.target.value))} />
        </div>
        <div>
          <label>Threshold:</label>
          <input type="number" value={newthreshold} onChange={(e) => setNewThreshold(Number(e.target.value))} />
        </div>
        <button onClick={calcolaGauss}> Calcola</button>
        </div>
        <GaussianChart
        key={chartKey}
        dataset={interestData}
        mean={mean}
        standardDeviation={standardDeviation}
        threshold={threshold}
      />
      </div>
    </div>
  );
};

export default AnalysisHome;
