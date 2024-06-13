import React, { useState, useEffect } from 'react';
import axios from 'axios';

function CommessaDue() {

  const [primoVideo, setPrimoVideo] = useState(true);
  const [secondoVideo, setSecondoVideo] = useState(false);
  const [terzoVideo, setTerzoVideo] = useState(false);
  const [quartoVideo, setQuartoVideo] = useState(false);
  const [quintoVideo, setQuintoVideo] = useState(false);
  const [sestoVideo, setSestoVideo] = useState(false);
  const [currentVideo, setCurrentVideo] = useState(0);
  const [postazioni, setPostazioni] = useState([]);
  const [selectedPostazione, setSelectedPostazione] = useState('');
  const [codiceCommessaprev,setcodiceCommessaprev] = useState('');
  const [codiceCommessa,setcodiceCommessa] = useState('');
  const [componenti,setComponenti] = useState([]);
  const [Infolist,setInfolist] = useState([]);
  const [currentCarouselIndex, setCurrentCarouselIndex] = useState(0);
  const [PRN, setPRN] = useState('');
  const [Info, setInfo] = useState('');
  const [videoText, setVideoText] = useState('');
  const [isFinale, setIsFinale] = useState(false);
  const [PRNCompleto, setPRNCompleto] = useState('');

  const [combinedCarousel, setCombinedCarousel] = useState([]);
  const [selectedComponents, setSelectedComponents] = useState([]);
  const [selectedInfos, setSelectedInfos] = useState([]);
  


const handleCarousel = (step) => {
  const newIndex = (currentCarouselIndex + step + componenti.length) % componenti.length;
  setCurrentCarouselIndex(newIndex);
};


useEffect(() => {
  const combined = [...selectedComponents, ...selectedInfos];
  setCombinedCarousel(combined);
}, [selectedComponents, selectedInfos]);

const handleCombinedCarousel = (step) => {
  const newIndex = currentCarouselIndex + step;

  if (newIndex >= 0 && newIndex <= combinedCarousel.length - 2) {
    setCurrentCarouselIndex(newIndex);
  } else if (newIndex < 0) {
    setCurrentCarouselIndex(0);
  } else if (newIndex > combinedCarousel.length - 2) {
    setCurrentCarouselIndex(Math.max(0, combinedCarousel.length - 2));
  }
};



useEffect(() => {

  getInfo();
  getComponenti();
}, []);

  useEffect(() => {
    // Fetch data for postazioni
    axios.get('https://www.scanteq.com/php/postazioni.php')
      .then(response => {
        setPostazioni(response.data);
      })
      .catch(error => {
        console.error('Errore durante il recupero delle postazioni:', error);
      });
  }, []);


  useEffect(()=>{
    if(currentVideo === 0){
      cleanVideo();
      setPrimoVideo(true);
      setVideoText('Start');
    }
    else if(currentVideo === 1){
      cleanVideo();
      setSecondoVideo(true);
      setVideoText('Scegli postazione');
    }
    else if(currentVideo === 2){
      cleanVideo();
      setTerzoVideo(true);
      setVideoText('Input commessa');
    }
    else if(currentVideo === 3){
      cleanVideo();
      setQuartoVideo(true);
      setVideoText('Scegli componenti');
    }
    else if(currentVideo === 4){
      cleanVideo();
      setQuintoVideo(true);
      setVideoText('Scegli info ausiliarie');
    }
    else if(currentVideo === 5){
      cleanVideo();
      setSestoVideo(true);
      setVideoText('Anteprima e invio');
    }

    if(PRN.startsWith('+'))
      setPRN(PRN.substring(1));
    
    if(Info.startsWith('+'))
      setInfo(Info.substring(1));

      if(primoVideo || secondoVideo || terzoVideo || quartoVideo || quintoVideo)
        setIsFinale(false);
      else if(sestoVideo)
        setIsFinale(true);

        if(PRNCompleto.startsWith('+'))
        setPRNCompleto(PRNCompleto.substring(1));
    

})

  const cleanVideo = () =>{
    setPrimoVideo(false);
    setSecondoVideo(false);
    setTerzoVideo(false);
    setQuartoVideo(false);
    setQuintoVideo(false);
    setSestoVideo(false);
  }

  const handleInizia = () =>{
    setCurrentVideo(1);
  }

  const handleSecondoVideoButton = (post) =>{
    setCurrentVideo(2);
    setSelectedPostazione(post);
  }


  const handleTerzoVideoButton = () =>{
    setCurrentVideo(3);
    setcodiceCommessa(codiceCommessaprev);
    setCurrentCarouselIndex(0);
  }

  const handleQuartoVideoButton = () =>{
    setCurrentVideo(4);
    setCurrentCarouselIndex(0);
  }
  const handleQuintoVideoButton = () =>{
    setCurrentVideo(5);
    setCurrentCarouselIndex(0);
    setPRNCompleto(PRN + '+' + Info);
  }

  const handleIndietro = () =>{
    setCurrentVideo(currentVideo - 1);
  }

  const getComponenti = () => {
    axios.get('https://www.scanteq.com/php/componenti.php')
      .then(response => {
        const componentiConAggiunto = response.data.map(componente => ({ ...componente, aggiunto: false }));
        setComponenti(componentiConAggiunto);
        console.log(response.data);
      })
      .catch(error => {
        console.error('Errore durante il recupero delle postazioni:', error);
      });
  };

  const getInfo = () => {
    axios.get('https://www.scanteq.com/php/infoausiliarie.php')
      .then(response => {
        const componentiConAggiunto = response.data.map(componente => ({ ...componente, aggiunto: false }));
        setInfolist(componentiConAggiunto);
        console.log(response.data);
      })
      .catch(error => {
        console.error('Errore durante il recupero delle postazioni:', error);
      });
  };

  const handleAggiungi = (componente) => {
    setComponenti(prevComponenti => prevComponenti.map(comp => (comp.Codice === componente ? { ...comp, aggiunto: true } : comp)));
    setPRN((prevPRN) => {
      if (!prevPRN.includes(componente)) {
        return prevPRN + "+" + componente;
      } else {
        return prevPRN;
      }
    });
  };
  
  const handleRimuovi = (componente) => {
    setComponenti(prevComponenti => prevComponenti.map(comp => (comp.Codice === componente ? { ...comp, aggiunto: false } : comp)));
    setPRN((prevPRN) => {
      if (prevPRN.startsWith(componente)) {
        return prevPRN.replace(componente, '');
      } else if (prevPRN.includes('+' + componente)) {
        return prevPRN.replace('+' + componente, '');
      } else {
        console.log(componente);
        return prevPRN;
      }
    });
  };

  
  const handleAggiungiInfo = (componente) => {
    setInfolist(prevInfolist => prevInfolist.map(comp => (comp.Codice === componente ? { ...comp, aggiunto: true } : comp)));
    setInfo((prevInfo) => {
      if (!prevInfo.includes(componente)) {
        return prevInfo + "+" + componente;
      } else {
        return prevInfo;
      }
    });
  };
  
  const handleRimuoviInfo = (componente) => {
    setInfolist(prevInfolist => prevInfolist.map(comp => (comp.Codice === componente ? { ...comp, aggiunto: false } : comp)));
    setInfo((prevInfo) => {
      if (prevInfo.startsWith(componente)) {
        return prevInfo.replace(componente, '');
      } else if (prevInfo.includes('+' + componente)) {
        return prevInfo.replace('+' + componente, '');
      } else {
        console.log(componente);
        console.log('else', prevInfo);
        return prevInfo;
      }
    });
  };
  
  const handleCreaCommessa = () => {
    const userConfirmed = window.confirm("Sei sicuro di voler creare una nuova commessa?");
    if (userConfirmed) {

      axios.post('https://www.scanteq.com/php/commesse.php', {
        'Codice': codiceCommessa,
        'Postazione': selectedPostazione,
        'PRN': PRN,
        'Ausiliari' : Info,
      })
        .then(response => {
          console.log('Risposta dal server:', response.data);

          if (response.data.message.includes('successo')) {
            window.alert('Commessa inserita con successo');
          }

        })
        .catch(error => {
          console.error('Errore durante la richiesta al server:', error);
          window.alert('Errore nell inserimento della commessa');
        });
    } else {
      console.error('error');
      window.alert('Errore nell inserimento della commessa');
    }
  }

  const handleAggiungiSelected = (elemento) =>{

        setSelectedComponents(prevSelectedComponents => [...prevSelectedComponents, elemento]);
  }
  
  const handleRimuoviSelected = (elemento) =>{

    const nuovoArray = selectedComponents.filter(item => item.ID  !== elemento.ID );
    setSelectedComponents(nuovoArray);
      
  }

  const handleDebug = () =>{
    console.log(selectedComponents);
    console.log(selectedInfos);
  }

  const handleAggiungiSelectedInfo = (elemento) =>{
    setSelectedInfos(prevSelectedInfos => [...prevSelectedInfos, elemento]);
  }

  const handleRimuoviSelectedInfo = (elemento) =>{
    const nuovoArray = selectedInfos.filter(item => item.ID  !== elemento.ID );
    setSelectedInfos(nuovoArray);
  }


  return (
    <div className='panecommessadivchiudibile'>
      <h1 className='creacommh1'>Creazione guidata di una commessa</h1>
      <div className='perflexnoncentrato'>
        <div className='perbuttonmargin'>
      <button className='cancellaricercaindietro' onClick={handleIndietro}>Indietro</button>
      </div>
      <p className='videoText'>{videoText}</p>
      </div>
      {!isFinale &&
      <div className='recapcommessa'>
      <p><span>Postazione: </span> <span>&nbsp;&nbsp;</span> {selectedPostazione}</p>
      <p><span>Commessa: </span><span>&nbsp;&nbsp;</span>{codiceCommessa}</p>
      <p><span>Componenti: </span> <span>&nbsp;&nbsp;</span>{PRN}</p>
      <p><span>Info Ausiliarie: </span> <span>&nbsp;&nbsp;</span>{Info}</p>
      </div>
      }

    {primoVideo && 
    <div className='primovideo'>
    <p>Ciao, ti guideremo attraverso la creazione della comessa</p>
      <button className='avantiquarto' onClick={handleInizia}>Avanti</button>
      </div>
    }

{secondoVideo && 
    <div className='primovideo'>
    <p>Per quale postazione andrai a creare la comessa?</p>

  <div className='raccoglipostazioni'>
    {postazioni.map((postazione, index) => (
          <div className='postazionecard' key={postazione.Codice} value={postazione.Codice} onClick={() => handleSecondoVideoButton(postazione.Name)}>
            <p>{postazione.Codice}</p>
            {postazione.Name}
          </div>
        ))}
  </div>
      </div>
    }

    
{terzoVideo && 
    <div className='primovideo'>

    <p>Quale codice vuoi inserire per la tua commessa?</p>
    <p>Guarda che non sia già stato usato, crealo razionalmente</p>

    <div className='perflex'>
      <input  
              id="commessaguid"
              className='cercatext'
              type="text"
              placeholder="Inserisci il  codice commessa"
              value={codiceCommessaprev}
              onChange={(e) => {
                setcodiceCommessaprev(e.target.value);
              }
              }
            />
    </div>

      <button className='avantiquarto' onClick={handleTerzoVideoButton}>Avanti</button>
      </div>
    }
{quartoVideo && 
  <div className='primovideo'>
    <p className='sceglierecompop'>Scegliere i componenti che si vogliono aggiungere</p>

    <div className='componentediv'>
    <button  className={`buttonindietroavanti ${currentCarouselIndex === 0 ? 'disabledbutton' : ''}`} onClick={() => handleCarousel(-1)} disabled={currentCarouselIndex === 0}>&#60;</button>
      {componenti.length > 0 && (
        <div key={componenti[currentCarouselIndex].Codice} className='carouselItem'>
          <p>{componenti[currentCarouselIndex].Codice}</p>
          <p>{componenti[currentCarouselIndex].Descrizione}</p>
          <div className='perimgcar'>
          {componenti[currentCarouselIndex].aggiunto && <div className="aggiuntaMarca">Elemento aggiunto</div>}
          <img className='imgcomponentecarousel' src={componenti[currentCarouselIndex].Immagine} alt={componenti[currentCarouselIndex].Descrizione} />
          </div>
          <div className='aggiungicomponentebutton' >
          <button className='buttonavanticommesse'  onClick={() => {
            handleAggiungi(componenti[currentCarouselIndex].Codice);
            handleAggiungiSelected(componenti[currentCarouselIndex]);
            }}>Aggiungi</button>
          <button className='buttonavanticommesse'  onClick={() => {
            handleRimuovi(componenti[currentCarouselIndex].Codice);
            handleRimuoviSelected(componenti[currentCarouselIndex]);
          }
        }>Rimuovi</button>
          </div>
        </div>
      )}
      <button  className={`buttonindietroavanti ${currentCarouselIndex === componenti.length - 1 ? 'disabledbutton' : ''}`} onClick={() => handleCarousel(1)} disabled={currentCarouselIndex === componenti.length - 1}>&#62;</button>
    </div>

    <button className='avantiquarto' onClick={handleQuartoVideoButton}>Avanti</button>
  </div>
}

{quintoVideo && 
  <div className='primovideo'>
    <p className='sceglierecompop'>Scegliere le info ausiliarie che si vogliono aggiungere</p>

    <div className='componentediv'>
    <button  className={`buttonindietroavanti ${currentCarouselIndex === 0 ? 'disabledbutton' : ''}`} onClick={() => handleCarousel(-1)} disabled={currentCarouselIndex === 0}>&#60;</button>
      {Infolist.length > 0 && (
        <div key={Infolist[currentCarouselIndex].Codice} className='carouselItem'>
          <p>{Infolist[currentCarouselIndex].Codice}</p>
          <p>{Infolist[currentCarouselIndex].Descrizione}</p>
          <div className='perimgcar'>
          {Infolist[currentCarouselIndex].aggiunto && <div className="aggiuntaMarca">Elemento aggiunto</div>}
          <img className='imgcomponentecarousel' src={Infolist[currentCarouselIndex].Immagine} alt={Infolist[currentCarouselIndex].Descrizione} />
          </div>
          <div className='aggiungicomponentebutton' >
          <button className='buttonavanticommesse' onClick={() => {
            handleAggiungiInfo(Infolist[currentCarouselIndex].Codice);
            handleAggiungiSelectedInfo(Infolist[currentCarouselIndex]);
          }
        }>Aggiungi</button>
          <button className='buttonavanticommesse' onClick={() => {
            handleRimuoviInfo(Infolist[currentCarouselIndex].Codice);
            handleRimuoviSelectedInfo(Infolist[currentCarouselIndex]);
          }
        }>Rimuovi</button>
          </div>
        </div>
      )}
      <button  className={`buttonindietroavanti ${currentCarouselIndex === Infolist.length - 1 ? 'disabledbutton' : ''}`} onClick={() => handleCarousel(1)} disabled={currentCarouselIndex === Infolist.length - 1}>&#62;</button>
    </div>

    <button className='avantiquarto' onClick={handleQuintoVideoButton}>Avanti</button>
  </div>
}


{sestoVideo && 
  <div className='primovideo'>
    <p className='sceglierecompopp'>Anteprima e creazione della commessa</p>
    <div id="sestovideo" >
    <p>Postazione: {selectedPostazione}</p>
    <p>Commessa: {codiceCommessa}</p>
    <p>Componenti: {PRN}</p>
    <p>Info Ausiliarie: {Info}</p>
    <p>PRN Completo: {PRNCompleto}</p>
    </div>
    <button className='avantiquarto' onClick={handleCreaCommessa}>Crea Commessa</button>


    <div className='smallCarousel'>
      <div className='perflex'>
      <button
        className={`buttonindietroavanti ${
          currentCarouselIndex === 0 ? 'disabledbutton' : ''
        }`}
        onClick={() => handleCombinedCarousel(-2)}
        disabled={currentCarouselIndex === 0}
      >
        &#60;
      </button>
      </div>
      <div className='smallCarouselItems'>
        {combinedCarousel.slice(currentCarouselIndex, currentCarouselIndex + 2).map(item => (
          <div key={item.Codice} className='smallCarouselItem'>
            <img
              className='imgpiccola'
              src={item.Immagine}
              alt={item.Descrizione}
            />
          </div>
        ))}
      </div>
      <div id="buttondivflex"className='perflex'>
      <button
        className={`buttonindietroavanti ${
          currentCarouselIndex + 2 >= combinedCarousel.length ? 'disabledbutton' : ''
        }`}
        onClick={() => handleCombinedCarousel(2)}
        disabled={currentCarouselIndex + 2 >= combinedCarousel.length}
      >
        &#62;
      </button>
      </div>
    </div>
  </div>


}


    </div>
  );
}

export default CommessaDue;
