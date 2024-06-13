import React, { useState } from 'react';
import axios from 'axios';
import { getAuth } from 'firebase/auth';
import { getStorage, ref, uploadBytes, getDownloadURL } from 'firebase/storage';

function CreaInfoAusiliarie() {
  const [codice, setCodice] = useState('');
  const [descrizione, setDescrizione] = useState('');
  const [immagine, setImmagine] = useState(null);

  const auth = getAuth();
  const storage = getStorage();

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    try {
      const imageRef = ref(storage, `imagesinfo/${immagine.name}`);
      await uploadBytes(imageRef, immagine);

      const imageUrl = await getDownloadURL(imageRef);

      const response = await axios.post('https://www.scanteq.com/php/infoausiliarie.php', {
        Codice: codice,
        Descrizione: descrizione,
        Immagine: imageUrl,
      });

      console.log(response.data);
      setCodice('');
      setDescrizione('');
      setImmagine(null);
    } catch (error) {
      console.error('Errore durante la richiesta POST:', error);
    }
  };

  return (
    <div className='perflex'>
    <div className='paneprincipalecreaprn'>
      <h1>Crea Info Ausiliarie</h1>
      <div className='creaprn'>
        <form onSubmit={handleFormSubmit}>
          <div className='perdisplayflex'>
          <div>
          <label>
            Codice:
          </label>
          <label>
            Descrizione:
          </label>
          <label>
            Immagine:
          </label>
        </div>
        <div className='perwidth'>
          <input type='text' value={codice} onChange={(e) => setCodice(e.target.value)} />
          <input type='text' value={descrizione} onChange={(e) => setDescrizione(e.target.value)} />
          <input type='file' onChange={(e) => setImmagine(e.target.files[0])} />
          </div>
          </div>
          <button className='inviabuttoncompon' type='submit'>Invia</button>
        </form>
      </div>
    </div>
    </div>
  );
}

export default CreaInfoAusiliarie;
