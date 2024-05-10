import React, { useState } from 'react';
import axios from 'axios';
import firebase from 'firebase/app';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { initializeApp } from 'firebase/app';
import { getStorage, ref, uploadBytes } from 'firebase/storage';

function InserisciAllegato({ req }) {

  const [loading, setLoading] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');
  const [uploadMessage, setUploadMessage] = useState('');

  const firebaseConfig = {
    apiKey: "AIzaSyCtuJ3uDDNlCvz7EXoWyUH6EmOFCBdIh_c",
    authDomain: "scanteq-aaa19.firebaseapp.com",
    projectId: "scanteq-aaa19",
    storageBucket: "scanteq-aaa19.appspot.com",
    messagingSenderId: "330344662556",
    appId: "1:330344662556:web:caff0b5787f90c563ec1d9",
    measurementId: "G-RW2056K68F"
  };

  const firebaseApp = initializeApp(firebaseConfig);
  const auth = getAuth(firebaseApp);
  const storage = getStorage(firebaseApp);

  const [files, setFiles] = useState([]); // Stato per gestire più file

  const handleFileChange = (e) => {
    // Crea un array con i file selezionati e aggiornalo nello stato
    const selectedFiles = Array.from(e.target.files);
    setFiles(selectedFiles);
  };


  const dragOverHandler = (ev) => {
    console.log('File(s) in drop zone');

    // Prevenire il comportamento di default
    ev.preventDefault();
  };

  const dropHandler = (ev) => {
    console.log('File(s) dropped');

    // Prevenire il comportamento di default
    ev.preventDefault();

    let fileList = [];
    if (ev.dataTransfer.items) {
      for (let i = 0; i < ev.dataTransfer.items.length; i++) {
        if (ev.dataTransfer.items[i].kind === 'file') {
          var file = ev.dataTransfer.items[i].getAsFile();
          fileList.push(file);
        }
      }
    } else {
      // Aggiunge file dall'oggetto FileList direttamente se items non è disponibile
      fileList = [...ev.dataTransfer.files];
    }

    // Aggiorna lo stato con i nuovi file
    setFiles(fileList);
  };

  const removeFile = (indexToRemove) => {
    // Rimuove il file selezionato dall'array basandosi sull'indice
    setFiles(files.filter((_, index) => index !== indexToRemove));
  };

  const clearAll = () => {
    setFiles([]);
    document.getElementById('file').value = '';
  };




  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setSubmitMessage('');
    setUploadMessage('');
  
    try {

        await Promise.all(files.map(file => {
          const fileRef = ref(storage, `offerte/${req}/${file.name}`);
          return uploadBytes(fileRef, file);
        }));
  
        setUploadMessage('Tutti i file sono stati caricati con successo.');
        setTimeout(() => setUploadMessage(''), 2000); // Reset dopo il successo del caricamento
        setTimeout(() => setSubmitMessage(''), 2000); // Reset in caso di errore
        clearAll();
    } catch (error) {
      console.error('Errore durante l\'upload dei file', error);
      setSubmitMessage('Errore nella richiesta.');
      setTimeout(() => setSubmitMessage(''), 2000); // Reset in caso di errore
    } finally {
      setLoading(false);
    }
  };


  return (
    <div className='inserisciallegatodiv'>

      <div className='perflex'>
        <form class="file-upload-form" onDragOver={dragOverHandler}
          onDrop={dropHandler}>
          <label for="file" class="file-upload-label">
            <div class="file-upload-design">
              <svg viewBox="0 0 640 512" height="1em">
                <path
                  d="M144 480C64.5 480 0 415.5 0 336c0-62.8 40.2-116.2 96.2-135.9c-.1-2.7-.2-5.4-.2-8.1c0-88.4 71.6-160 160-160c59.3 0 111 32.2 138.7 80.2C409.9 102 428.3 96 448 96c53 0 96 43 96 96c0 12.2-2.3 23.8-6.4 34.6C596 238.4 640 290.1 640 352c0 70.7-57.3 128-128 128H144zm79-217c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l39-39V392c0 13.3 10.7 24 24 24s24-10.7 24-24V257.9l39 39c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-80-80c-9.4-9.4-24.6-9.4-33.9 0l-80 80z"
                ></path>
              </svg>
              <p>Drag and Drop</p>
              <p>or</p>
              <span class="browse-button">Browse file</span>
            </div>
            <input id="file" type="file" multiple onChange={handleFileChange} />
          </label>



        </form>
      </div>


      {files.length > 0 && (
        <div className='fileselezionatidiv'>
          <ul>
            {files.map((file, index) => (
              <li key={index}>
                {file.name}
                <button onClick={() => removeFile(index)} style={{ marginLeft: "10px" }}>X</button>
              </li>
            ))}
          </ul>
        </div>
      )}

<div className='perdivsubmitcrea'>
      <button onClick={handleSubmit} class="submitCreaAllegato" type="text">Invia</button>
</div>

      <div className='infodivmessaggi' style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                textAlign: 'center',
                padding: submitMessage || uploadMessage || loading ? '20px' : '0px',
                borderRadius: '10px',
                background: submitMessage || uploadMessage || loading ? 'rgba(255, 255, 255, 0.8)' : 'transparent', // Condizionale
                display: submitMessage || uploadMessage || loading ? 'block' : 'none' // Aggiunto per nascondere completamente se non ci sono messaggi
              }}>
      {submitMessage && <p>{submitMessage}</p>}
      
      {/* Visualizza il messaggio di stato del caricamento */}
      {uploadMessage && <p>{uploadMessage}</p>}

      {loading && <p>Caricamento in corso...</p>}

      </div>

    </div>
  );
}

export default InserisciAllegato;
