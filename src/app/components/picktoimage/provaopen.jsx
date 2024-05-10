import React, { useState } from 'react';
import OpenAI from 'openai';
import axios from 'axios';

function ChatComponent() {
  const [inputText, setInputText] = useState('');
  const [response, setResponse] = useState('');

  const handleInputChange = (event) => {
    setInputText(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const openaiInstance = new OpenAI.OpenAI({apiKey :'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', dangerouslyAllowBrowser: true}); // Assicurati di sostituire YOUR_API_KEY con la tua chiave API di OpenAI
      const completion = await openaiInstance.chat.completions.create({
        model: 'g-zMwEw5VyC-scanteq',
        prompt: 'You: ' + inputText,
      });
      setResponse(completion.data.choices[0].text); // Imposta la risposta nel tuo stato
    } catch (error) {
      console.error('Error fetching response:', error);
    }
  };  

  const [question, setQuestion] = useState('Come stai?');
  const [answer, setAnswer] = useState('');

  const [text, setText] = useState('che cosa è il masp?');
  const [prediction, setPrediction] = useState('');
  const [error, setError] = useState('');

  const DemoHandle = async (e) => {
      e.preventDefault();

      try {
        // Nota: 'method: 'POST'' qui è ridondante perché 'axios.post' implica già il metodo POST
        const response = await axios.post('https://www.scanteq.com/php/gptss.php', {
            text: text // Assicurati che il nome della proprietà qui corrisponda a quello che il tuo backend PHP si aspetta
        });
        console.log('Risposta ricevuta:', response); // Log dell'intera risposta


        //setPrediction(response.data);
        console.log('Predizione impostata:', response.data);
        setError(''); // Reset dell'errore se la chiamata è stata un successo
    } catch (error) {
        console.error('Errore durante la richiesta:', error);
        setError('Si è verificato un errore durante il recupero della predizione.'); // Gestisci l'errore mostrando un messaggio all'utente
        setPrediction(''); // Reset della predizione in caso di errore
    }
};


const openAIRequest = async () => {
  const response = await axios.post(
    'https://api.openai.com/v4/completions',
    {
      model: 'text-davinci-003', // Cambia con il modello desiderato
      prompt: 'Ciao chi sei?',
      temperature: 0.7,
      max_tokens: 150,
    },
    {
      headers: {
        'Authorization': `Bearer YOUR_OPENAI_API_KEY`
      }
    }
  );

  console.log( response.data.choices[0].text);
  return response.data.choices[0].text;
};


  const [message, setMessage] = useState("Hello World!");


return(
    <div>
      <form onSubmit={openAIRequest}>
        <input
          type="text"
          value={inputText}
          onChange={handleInputChange}
          placeholder="Type your message..."
        />
        <button type="submit">Send</button>
      </form>
      {response && <p>Response: {response}</p>} 
      <button onClick={DemoHandle}>Demo</button>
      {<p>Predizione: {prediction}</p>}
    </div>
  );
}

export default ChatComponent;
