import React, { useEffect, useState } from 'react';
import Header21 from '../../sections/common/header21';
import Navbar from './navbar';
import axios from 'axios';
import { Light as SyntaxHighlighter } from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';

function LogPostazioni() {
  const [postazioni, setPostazioni] = useState([]);
  const [selectedPostazione, setSelectedPostazione] = useState('');
  const [textAreaContent, setTextAreaContent] = useState('');
  const [logs, setLogs] = useState([]);
  const [selectedLog, setSelectedLog] = useState(null);
  const [searchText, setSearchText] = useState('');
  const [searchTextDef, setSearchTextDef] = useState('');


  useEffect(() => {
    // Effettua il fetch dei dati dalle postazioni al montaggio del componente
    axios.get('https://www.scanteq.com/php/postazioni.php')
      .then(response => {
        setPostazioni(response.data);
      })
      .catch(error => {
        console.error('Errore durante il recupero delle postazioni:', error);
      });
  }, []);

  useEffect(() => {
    // Effettua il fetch dei dati dalle postazioni al montaggio del componente
    axios.get('https://www.scanteq.com/php/tabellalog.php')
      .then(response => {
        setLogs(response.data);
      })
      .catch(error => {
        console.error('Errore durante il recupero delle postazioni:', error);
      });
  }, [selectedPostazione]);

  const handlePostazioneChange = (e) => {
    const selectedValue = e.target.value;
    setSelectedPostazione(selectedValue);
    setTextAreaContent('Nessun Log presente per questa postazione, ti preghiamo di richiederlo');
  };

  const handleVediLogClick = (log) => {
    setSelectedLog(log);
    setTextAreaContent(log.Log);
  };
  const handleSearch = () => {
    if (selectedLog) {
      setSearchTextDef(searchText);
      const highlightedText = highlightText(selectedLog.Log, searchTextDef);
      setTextAreaContent(highlightedText);
    }
  };

  const handleClearSearch = () => {
    setSearchText('');
    setSearchTextDef(searchText);
    setTextAreaContent(selectedLog ? selectedLog.Log : 'Nessun Log selezionato');
  };

  const highlightText = (text, searchText) => {
    if (text) {
      const regex = new RegExp(`(${searchText})`, 'gi');
      return text.split('\n').map((line, index) => {
        // Remove <RW>, <GW>, <YK>, <VK>, <VW>, <IW>, etc.
        const cleanedLine = line.replace(/<([RGYVIWK]+)W?>/g, '');



        const isRedBackground = line.trim().startsWith('<RW>');
        const isGreenBackground = line.trim().startsWith('<GW>');
        const isYellowBackground = line.trim().startsWith('<YK>');
        const isPurpleBackground = line.trim().startsWith('<VK>');
        const isPurpleBackground2 = line.trim().startsWith('<VW>');
        const isGreyBackground = line.trim().startsWith('<IW>');
        const isWhiteBackground = !isRedBackground && !isGreenBackground && !isYellowBackground &&
          !isPurpleBackground && !isGreyBackground && !isPurpleBackground2;
  
        const formattedLine = regex.test(line) ? (
          <mark
    key={index}
    className={`highlighted-text
      ${isRedBackground ? 'red-background' : ''}
      ${isGreenBackground ? 'green-background' : ''}
      ${isYellowBackground ? 'yellow-background' : ''}
      ${isPurpleBackground ? 'purple-background' : ''}
      ${isPurpleBackground2 ? 'purple-background2' : ''}
      ${isGreyBackground ? 'grey-background' : ''}
      ${isWhiteBackground ? 'white-background' : ''}`}
  >
    {cleanedLine}
  </mark>
        ) : (
          cleanedLine
        );
  
        return (
          <div key={index} className={`log-line
            ${isRedBackground ? 'red-background' : ''}
            ${isGreenBackground ? 'green-background' : ''}
            ${isYellowBackground ? 'yellow-background' : ''}
            ${isPurpleBackground ? 'purple-background' : ''}
            ${isPurpleBackground2 ? 'purple-background2' : ''}
            ${isGreyBackground ? 'grey-background' : ''}
            ${isWhiteBackground ? 'white-background' : ''}`}
          >
            {formattedLine}
          </div>
        );
      });
    }
    return text;
  };
  

  const formatDate = (timestamp) => {
    const date = new Date(timestamp);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  };


  const renderHighlightedLog = () => {
    return (
      <div className="log-content">
        {selectedLog ? highlightText(selectedLog.Log, searchTextDef) : ''}
      </div>
    );
  };

  return (
    <div className='erroripostazionipane'>
      <div>
        <Header21 />
        <Navbar />
        <div className='paneprincipaleerrori'>
          <div className='paneprincipaleerrori2'>
            <select className="custom-select" value={selectedPostazione} onChange={handlePostazioneChange}>
              <option value="" disabled>Scegli una postazione</option>
              {postazioni.map((postazione, index) => (
                <option key={postazione.ID} value={postazione.Codice}>
                  {postazione.Codice} ({postazione.Name})
                </option>
              ))}
            </select>
            <div className='containerpertablelogs'>
              <table className='tablelogs'>
                <thead>
                  <tr>
                    <th>Data</th>
                    <th></th>
                  </tr>
                </thead>
<tbody>
  {Array.isArray(logs) && logs.map((log, index) => 
    // Aggiungi la condizione per mostrare solo gli elementi della postazione corrente
    selectedPostazione && selectedPostazione === log.Codice && (
      <tr key={index}>
        <td>{formatDate(log.Data)}</td>
        <td><button className='vedilogbutton' onClick={() => handleVediLogClick(log)}>Vedi log</button></td>
      </tr>
    )
  )}
</tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      <div className='textareadiv'>
      <div className='textarealog'>
              <div className='search-container'>
              <input
  type='text'
  placeholder='Cerca nel log'
  value={searchText}
  onChange={(e) => setSearchText(e.target.value)}
/>
<div>
<button onClick={handleSearch}>Cerca</button>
<button onClick={handleClearSearch}>Cancella</button>
</div>

{selectedLog!=null && <p>{formatDate(selectedLog.Data)}</p>}
              </div>
              {renderHighlightedLog()}
      </div>
      </div>
    </div>
  );
}

export default LogPostazioni;

