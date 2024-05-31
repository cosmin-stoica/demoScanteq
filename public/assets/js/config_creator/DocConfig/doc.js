window.Doc = [
  {
    title: "Avvitatura",
    data_hal: window.AvvitaturaHal,
    data_job: window.AvvitaturaJob,
    text: `Questo job viene utilizzato per effettuare dei serraggi con avvitatori gestiti da centraline
    di avvitatura elettroniche Cleco con controllo coppia-angolo o Kolver e Jolly con solo la
    verifica dell'angolo.
    L'interfacciamento con il PC è realizzato tramite rete LAN e protocollo Open Protocol
    per le Cleco o attraverso ingressi e uscite delle schede IO24ADC per le centraline
    Cleco, Kolver e Jolly.
    I parametri del protocollo Open Protocol sono personalizzabili dal file di configurazione
    "Hardware Config.ini" mentre gli ingressi e le uscite di interfacciamento si possono
    associare a qualsiasi ingresso o uscita delle schede IO24ADC con l'aiuto dei parametri
    presenti nel file di configurazione “HAL Config Tightening Unit.ini”.
    Gli avvitatori hanno una connessione a filo o WiFi con le centraline ed è possibile fissarli
    su un braccio con encoder, permettendo di effettuare i serraggi con controllo della
    posizione. La lettura degli angoli dai quattro encoder si realizza con l'espansione
    ENCODER della scheda IO24ADC. I parametri del braccio e degli encoder si trovano
    nel file di configurazione "HAL Config Arm With Encoder.ini".
    Le operazioni di avvitatura necessitano l'utilizzo di bussole da piazzare in punta
    all’avvitatore per poter effettuare il serraggio di viti e dadi di vario tipo. L’applicativo
    MASP App prevede anche la gestione di un portabussole, il quale può gestire fino a
    bussole ed è dotato di spie luminose e sensori per indicare all’utente la posizione da
    dove prelevare. I parametri per la configurazione del portabussole si trovano nel file
    “HAL Config Tightening Toolbox.ini”.
    I messaggi e le immagini della condotta guidata, come anche i valori di riferimento per
    le avvitature, si possono personalizzare tramite i parametri all’interno dei file di
    configurazione del job. Oltre a questo file, esiste un altro nella cartella Config,
    denominato “Programmi di avvitatura.ini”, che include parametri specifici che vengono
    richiamati per poter eseguire i serraggi.`,
    img_src: "/assets/images/jobs/avvitaturamasp.png",
    programmi:  window.ProgrammiAvvitaturaAux,
    programmi_text : `Il file “Programmi di avvitatura.ini” è un file di configurazione trovato dentro la cartella
    “Config” dell’applicativo. Questo file è associato al job Avvitatura ed esso gestisce i
    programmi di avvitatura da richiamare alla centralina insieme ad altri parametri del
    portabussole e del braccio con encoder. Il file presenta due tipi di sezione. La prima è
    “SEZIONE GENERALE” e include un solo parametro con il numero di programmi di
    avvitatura mentre la seconda, “PROGRAMMA”, contiene i parametri specifici, indicati in
    seguito.`,
    esempio_job1_title: "Esempio di implementazione job Avvitatura con centralina Cleco Wireless",
    esempio_job1_text: `
    ;============================================
    [JOB 1]
    ;============================================
    Tipo job = avvitatura
    Nome job = Avvitatura con Cleco Wireless
    Salta job = 0
    ;----------------------------------------------------------------------------
    Cartella immagini = C:\MASP\App Montaggio\Images\Avvitatura
    ;----------------------------------------------------------------------------
    Programma avvitatura = 1
    Numero immagini = 2
    Immagine vite 1 = vite1.png
    Immagine vite 2 = vite2.png
    ;----------------------------------------------------------------------------`,
    esempio_job2_title: "Esempio di implementazione job Avvitatura con centralina Cleco a cavo e braccio con encoder",
    esempio_job2_text: `
    ;============================================
    [JOB 1]
    ;============================================
    Tipo job = avvitatura
    Nome job = Avvitatura con Cleco a cavo e braccio con encoder
    Salta job = 0
    ;----------------------------------------------------------------------------
    Cartella immagini = C:\MASP\App Montaggio\Images\Avvitatura
    ;----------------------------------------------------------------------------
    Programma avvitatura = 2
    Numero immagini = 3
    Immagine vite 1 = vite3.png
    Immagine vite 2 = vite4.png
    ;----------------------------------------------------------------------------`,
    esempio_job3_title: "Esempio di implementazione job Avvitatura con centralina Joll",
    esempio_job3_text: `
    ;============================================
    [JOB 1]
    ;============================================
    Tipo job = avvitatura
    Nome job = Avvitatura con Jolly
    Salta job = 0
    ;----------------------------------------------------------------------------
    Cartella immagini = C:\MASP\App Montaggio\Images\Avvitatura
    ;----------------------------------------------------------------------------
    Programma avvitatura = 3
    Numero immagini = 2
    Immagine vite 1 = vite5.png
    Immagine vite 2 = vite6.png
    ;----------------------------------------------------------------------------`,
    esempio_job4_title: "Esempio di file “Programmi di avvitatura.ini”",
    esempio_job4_text: `
    ;============================================
    [SEZIONE GENERALE]
    ;============================================
    Numero programmi = 3

    ;============================================
    [PROGRAMMA 1]
    ;============================================
    Nome programma = PRG1: 10.00Nm
    Modello avvitatore = Cleco LW
    Numero viti = 2
    Gruppo produzione = 1
    Coppia chiusura= 10.00
    Bussola = 1
    Numero ripetizioni = 5
    Controllo posizione = 0
    Toleranza X = 50
    Toleranza Y = 50
    Toleranza Z = 50

    ;============================================
    [PROGRAMMA 2]
    ;============================================
    Nome programma = PRG2: 20.00Nm
    Modello avvitatore = Cleco
    Numero viti = 2
    Gruppo produzione = 2
    Coppia chiusura= 20.00
    Bussola = 2
    Numero ripetizioni = 5
    Controllo posizione = 1
    Toleranza X = 50
    Toleranza Y = 50
    Toleranza Z = 50
    X1=1259
    Y1=1729
    Z1=-210
    X2=1173
    Y2=1869
    Z2=-414

    ;============================================
    [PROGRAMMA 3]
    ;============================================
    Nome programma = PRG4: 2.50Nm
    Modello avvitatore = Jolly
    Numero viti = 2
    Gruppo produzione = 1
    Coppia chiusura= 2.50
    Bussola = 3
    Numero ripetizioni = 5
    Controllo posizione = 0`,
    diagnostica_img_src: "/assets/images/jobs/diagnostica/avvitatura.png",
  },
  {
    title: "Barcode",
    data_hal: window.BarcodeHal,
    data_job: window.BarcodeJob,
    text: `Il job barcode viene utilizzato per poter leggere, tramite un lettore barcode, dei codici a
    barre in vari formati standard o bidimensionali di tipo PDF417, Datamatrix o QR code.
    L'interfacciamento del lettore al PC di gestione è effettuato attraverso un bus seriale
    RS232 con parametri di configurazioni della comunicazione presenti nel file “Hardware
    Config.ini”.
    Il job permette una condotta guidata per l’operatore, al quale vengono fatti vedere a
    schermo i barcode da scannerizzare e un'immagine illustrativa. A fine ciclo i componenti
    scannerizzati possono essere salvati su etichetta, file report e database.
    Come specificato precedentemente, la configurazione del job è personalizzabile tramite
    file di testo con estensione .ini. Alcuni parametri possono contenere la dicitura “(1, 2,
    (n))” che segue il nome per indicare di quale gruppo di parametri si sta parlando. Per
    esempio se si desidera specificare un barcode, i parametri “Descrizione”, “Barcode” ed
    “Immagine” devono essere seguiti dallo stesso numero per poterli legare l’uno all’altro.
    Per indicare un altro barcode, si dovrà utilizzare un numero diverso. Questi numeri
    devono iniziare da 1 e continuare in ordine crescente senza saltare numeri intermedi.`,
    img_src: "/assets/images/jobs/barcodemasp.png",
    esempio_job1_title: "",
    esempio_job1_text: `
    ;============================================
    [JOB 1]
    ;============================================
    Tipo job = barcode
    Nome job = Verifica barcode componenti
    Salta job = 0
    ;----------------------------------------------------------------------------
    Cartella immagini = C:\MASP\App Montaggio\Images\Components
    ----------------------------------------------------------------------------
    Numero barcode = 2
    ;----------------------------------------------------------------------------
    Descrizione 1 = Descrizione 1001
    Barcode 1 = 1001
    Immagine 1 = 1001.png
    ID stoccaggio 1 = 1
    ;----------------------------------------------------------------------------
    Descrizione 2 = Descrizione 1002
    Barcode 2 = 1002
    Immagine 2 = 1002.png
    ID stoccaggio 2 = 0
    ;----------------------------------------------------------------------------`,
    diagnostica_img_src: "",
  },
  {
    title: "Pick To Light",
    data_hal: window.PickToLightHal,
    data_job: window.PickToLightJob,
    text: `Il job Pick To Light permette il prelievo o il deposito manuale di componenti tramite un
    procedura di condotta guidata dell’operatore che prevede l’accensione di spie luminose
    nella corretta sequenza, le quali si trovano in corrispondenza delle scatole contenenti il
    materiale, verificando la corretta esecuzione dell’operazione tramite le letture di
    fotocellule opportunamente posizionate che rilevano i movimenti.
    Il sistema dispone inoltre di una spia di allarme che si accende nel momento in cui una
    delle fotocellule intercetta un passaggio al di fuori del momento programmato. Per
    continuare la lavorazione e far spegnere la spia, l’operatore dovrà premere l’apposito
    pulsante di ripristino.
    Il job è altamente personalizzabile, essendo possibile associare le spie luminose, le
    fotocellule, la spia di allarme e il pulsante di ripristino in corrispondenza a qualsiasi
    uscita o ingresso delle schede IO24ADC con l'aiuto dei parametri presenti nel file di
    configurazione HAL“HAL Pick To Light.ini”.
    Immagini, messaggi per la condotta guidata ed i parametri di funzionamento sono tutti
    impostabili da file di configurazione del job.`,
    img_src: "/assets/images/jobs/pickmasp.png",
    esempio_job1_title: "",
    esempio_job1_text: `
    ;============================================
    [JOB 1]
    ;============================================
    Tipo job = pick-to-light
    Nome job = Prelievo componente
    Salta job = 0
    ;-------------------------------------------------------------------------------
    Cartella immagini = C:\MASP\App Montaggio\Images\Pick-To-Light
    Immagine = cassetto1.jpg
    ;-------------------------------------------------------------------------------
    Messaggio = Prelevare componente da cassetto 1
    ID contenitore = 1
    ;----------------------------------------------------------------------------`,
    diagnostica_img_src: "/assets/images/jobs/diagnostica/pick.png",
  },
  {
    title: "Rivettatura",
    data_hal: window.RivettaturaHal,
    data_job: window.RivettaturaJob,
    text: `Questo job viene utilizzato per effettuare delle rivettature, gestendo fino a tre rivettatrici,
    e verificare l'esito dell'operazione, procedura che può essere effettuata con il controllo
    della forma d’onda della pressione dell'olio nell'impianto o con la lettura dell'esito
    direttamente centralina della rivettatrice, in caso essa sia presente.
    Nel primo caso, la forma d’onda è letta con uno dei convertitori analogico-digitali della
    scheda IO24ADC e confrontata con dei template di riferimento precedentemente
    acquisiti e classificati.
    Nel secondo caso, la verifica della rivettatura è effettuata dalla sua unità di controllo
    che, con delle uscire collegate a ingressi della scheda IO24ADC, comunica l'esito al
    software MASP App. L'abilitazione delle rivettatrici senza centraline si ottiene
    controllando il flusso dell'aria con un elettrovalvola collegata ad un uscita della scheda
    IO24ADC. Per quelle dotate di unità di controllo, il PC invia dei comandi Modbus
    attraverso interfaccia RS485, con i parametri configurabili dal file “Hardware Config.ini”.
    I parametri della verifica delle forme d’onda, gli ingressi e le uscite d’interfacciamento
    verso le rivettatrici, sono personalizzabili dal file "HAL Config Rivet.ini" mentre gli
    ingressi e le uscite di interfacciamento si possono associare a qualsiasi ingresso o
    uscita delle schede IO24ADC con l'aiuto dei parametri presenti nel file di
    configurazione.
    È possibile fissare ogni rivettatrice su un braccio con encoder per effettuare le
    rivettature solo in posizioni desiderate, abilitando o no il flusso d'aria con un
    elettrovalvola. La lettura degli angoli dai quattro encoder si realizza con l'espansione
    ENCODER della scheda IO24ADC. I parametri del braccio e degli encoder si trovano
    nel file di configurazione "HAL Config Arm With Encoder.ini".
    I messaggi, le immagini della condotta guidata, i parametri inerenti al salvataggio e
    caricamento delle forme d’onda, come anche i valori di riferimento per le rivettature, si
    possono personalizzare tramite i parametri all’interno dei file di configurazione del job.`,
    img_src: "/assets/images/jobs/rivettaturamasp.png",
    esempio_job1_title: "",
    esempio_job1_text: `
    ;============================================
    [JOB 1]
    ;============================================
    Tipo job = rivettatura
    Nome job = Rivettatura senza braccio (RIV)
    Salta job = 0
    Numero ripetizioni = 4
    ;----------------------------------------------------------------------------
    Cartella immagini = C:\MASP\App Montaggio\Images\Rivettatura
    ;----------------------------------------------------------------------------
    Rivettatrice = 1
    Soglia rivettatura = 75
    Numero rivetti = 2
    Immagine rivetto 1 = rivetto1.png
    Immagine rivetto 2 = rivetto2.png
    ;----------------------------------------------------------------------------
    Verifica numero campioni = 0
    Numero campioni minimo = 10
    Numero campioni massimo = 501
    ;----------------------------------------------------------------------------
    Cartella template = C:\MASP\App Montaggio\Config\Hardware Config\Rivet Waveforms\Rivet RIV
    Header nome file template = Wf
    Percentuale di confidenza minima = 85
    ;----------------------------------------------------------------------------`,
    diagnostica_img_src: "/assets/images/jobs/diagnostica/rivettatura.png",
  },
  {
    title: "Robot",
    data_hal: window.RobotHal,
    data_job: window.RobotJob,
    text: `Il job robot viene utilizzato per effettuare delle operazioni un robot collaborativo,
    inviando delle stringhe di comando tramite protocollo TCP-IP, richiamando i programmi
    preconfigurati a bordo del robot.
    La comunicazione avviene su rete LAN, dove il software MASP App ed il robot agiscono
    entrambi sia come client che come server, aprendo ognuno un socket verso l'altra
    periferica. I parametri per impostare indirizzi IP e porte si trovano nella sezione "Robot"
    del file "Hardware Config.ini".
    Le modalità dell'operazione sono due:
    - Tramite job, dove le immagini ed i messaggi visualizzati durante l'operazione e la
    stringa da inviare al robot sono prese da job.
    - Tramite pannello di controllo specifico che si apre quando l’operatore preme il
    tasto "Robot".
    Nella modalità di funzionamento con job, le immagini, i messaggi per la condotta
    guidata ed i parametri di funzionamento sono tutti impostabili da file di configurazione
    del job mentre in quella con pannello di controllo, le immagini, i nomi dei pulsanti e le
    stringhe da inviare al robot sono lette dal file HAL.`,
    img_src: "/assets/images/jobs/robotmasp.png",
    esempio_job1_title: "",
    esempio_job1_text: `
    ;============================================
    [JOB 1]
    ;============================================
    Tipo job = robot
    Nome job = Incollaggio con robot
    Salta job = 0
    Numero ripetizioni = 5
    ;----------------------------------------------------------------------------
    Cartella immagini = C:\MASP\App Montaggio\Images\Robot
    Immagine = Incollaggio con robot.png
    Stringa di commando = load /programs/incollaggio.ur
    ;----------------------------------------------------------------------------`,
    diagnostica_img_src: "/assets/images/jobs/diagnostica/robot.png",
  },















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
      Immagini, messaggi per la condotta guidata ed i parametri di funzionamento sono tutti
      impostabili da file di configurazione del job`,
    img_src: "/assets/images/jobs/tpsmasp.png",
    esempio_job1_title: "",
    esempio_job1_text: `
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
    esempio_job1_title: "",
    esempio_job1_text: `
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
