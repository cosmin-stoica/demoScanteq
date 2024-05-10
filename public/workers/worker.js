self.addEventListener('message', (event) => {
  const {tipo, postazione, areaInteresse } = event.data;

  if(tipo === 'avvitatura'){
  if(postazione != null && areaInteresse !=null){
  setInterval(() => {
    fetch(`https://www.scanteq.com/php/variables.php?postazione=${postazione}&areaInteresse=${areaInteresse}`)
      .then(response => response.json())
      .then(data => {
        self.postMessage({ newData: data });
      })
      .catch(error => {
        console.error('Errore nella richiesta GET:', error);
      });
  }, 3000);
  }else if(postazione == null){
    setInterval(() => {
      fetch(`https://www.scanteq.com/php/variables.php?areaInteresse=${areaInteresse}`)
        .then(response => response.json())
        .then(data => {
          self.postMessage({ newData: data });
        })
        .catch(error => {
          console.error('Errore nella richiesta GET:', error);
        });
    }, 3000);
  }else if(areaInteresse == null){
    setInterval(() => {
      fetch(`https://www.scanteq.com/php/variables.php?postazione=${postazione}`)
        .then(response => response.json())
        .then(data => {
          self.postMessage({ newData: data });
        })
        .catch(error => {
          console.error('Errore nella richiesta GET:', error);
        });
    }, 3000);
  }
}else if(tipo === 'termoforo'){
if(postazione != null){
  setInterval(() => {
    fetch(`https://www.scanteq.com/php/termoforo.php?postazione=${postazione}`)
      .then(response => response.json())
      .then(data => {
        self.postMessage({ newData: data });
      })
      .catch(error => {
        console.error('Errore nella richiesta GET:', error);
      });
  }, 3000);
  }else if(postazione == null){
    setInterval(() => {
      fetch(`https://www.scanteq.com/php/termoforo.php?`)
        .then(response => response.json())
        .then(data => {
          self.postMessage({ newData: data });
        })
        .catch(error => {
          console.error('Errore nella richiesta GET:', error);
        });
    }, 3000);
  }
}else if(tipo === 'coppia'){
  if(postazione != null){
    setInterval(() => {
      fetch(`https://www.scanteq.com/php/coppia.php?postazione=${postazione}`)
        .then(response => response.json())
        .then(data => {
          self.postMessage({ newData: data });
        })
        .catch(error => {
          console.error('Errore nella richiesta GET:', error);
        });
    }, 3000);
    }else if(postazione == null){
      setInterval(() => {
        fetch(`https://www.scanteq.com/php/coppia.php?`)
          .then(response => response.json())
          .then(data => {
            self.postMessage({ newData: data });
          })
          .catch(error => {
            console.error('Errore nella richiesta GET:', error);
          });
      }, 3000);
    }
  }
  


});
