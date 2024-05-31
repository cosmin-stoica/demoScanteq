window.Doc = [
    {
      title: "TPS",
      data_hal: window.TpsHal,
      data_job: window.TpsJob,
      text: `Il job TPS serve a verificare il corretto funzionamento di un sensore ad effetto Hall che
      controlla il posizionamento del sedile lungo la corsa delle sue guide, verificando il
      corretto passaggio di stato da OFF a ON e successivamente ad OFF.
      La lettura del cambio di stato del TPS viene fatta attraverso un convertitore
      analogico-digitale della scheda IO24ADC e, dopo aver attivato il circuito di misura
      correnti basse che permette di misurare da 0 fino a 100 mA, viene controllato che le
      correnti rilevate durante gli stati ON ed OFF stiano nei rispettivi intervalli.
      I parametri di configurazione e taratura relativi si trovano dentro al file di configurazione
      “HAL Config TPS”.
      \n
      \n
      Immagini, messaggi per la condotta guidata ed i parametri di funzionamento sono tutti
      impostabili da file di configurazione del job`,
      img_src: "/assets/images/jobs/tpsmasp.png",
      esempio_job: `
      ;============================================
      [JOB 1]
      ;============================================
      Tipo job = termoforo
      Nome job = Verifica assorbimento termoforo principale e sensore NTC
      Salta job = 0
      Numero ripetizioni = 5
      Avvio automatico prova = 0
      ;----------------------------------------------------------------------------
      Firma termoforo = Heater_Main
      ;----------------------------------------------------------------------------
      Abilitazione prova = 1
      Durata prova = 4
      Corrente nominale = 3.5
      Tolleranza corrente = 1
      ;----------------------------------------------------------------------------
      Attesa pulsante premuto = 0
      Soglia corrente = 0.75
      ;----------------------------------------------------------------------------
      Abilitazione verifica sensore di temperatura = 1
      Resistenza min sensore di temperatura = 7000
      Resistenza max sensore di temperatura = 9000
      ;----------------------------------------------------------------------------`,
      diagnostica_img_src: "/assets/images/jobs/diagnostica/tps.png",
    },
    {
      title: "Termoforo",
      data_hal: window.TermoforoHal,
      data_job: window.TermoforoJob,
      text: `Il job termoforo viene utilizzato per verificare il corretto funzionamento dell’impianto
      termoriscaldatore, verificando che la corrente assorbita o la resistenza del riscaldatore,
      assieme alla possibilità di misurare la resistenza del sensore di temperatura.
      La corrente viene misurata tramite una scheda proprietaria CORA, la quale,
      collegandosi ad uno dei convertitori analogico-digitali della scheda IO24ADC, permette
      di misurare delle correnti da 0 a 20A.
      Si può decidere di usare un secondo convertitore analogico-digitale per leggere la
      resistenza del sensore di temperatura, in caso in cui esso sia presente.
      I parametri di configurazione e taratura relativi si trovano dentro al file di configurazione
      “HAL Config Heater”.
      Il valore misurato dal riscaldatore e quello misurato dal sensore di temperatura vengono
      confrontati con i valori di riferimento preimpostati dal file di configurazione del job,
      riportando l’esito globale della prova.`,
      img_src: "/assets/images/jobs/termoforomasp.png",
      esempio_job: `
      ;============================================
      [JOB 1]
      ;============================================
      Tipo job = termoforo
      Nome job = Verifica assorbimento termoforo principale e sensore NTC
      Salta job = 0
      Numero ripetizioni = 5
      Avvio automatico prova = 0
      ;----------------------------------------------------------------------------
      Firma termoforo = Heater_Main
      ;----------------------------------------------------------------------------
      Abilitazione prova = 1
      Durata prova = 4
      Corrente nominale = 3.5
      Tolleranza corrente = 1
      ;----------------------------------------------------------------------------
      Attesa pulsante premuto = 0
      Soglia corrente = 0.75
      ;----------------------------------------------------------------------------
      Abilitazione verifica sensore di temperatura = 1
      Resistenza min sensore di temperatura = 7000
      Resistenza max sensore di temperatura = 9000
      ;----------------------------------------------------------------------------`,
      diagnostica_img_src: "/assets/images/jobs/diagnostica/termoforo.png",
    },
  ];
  