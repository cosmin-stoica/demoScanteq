const schedeDescrizioneData = [
  {
    margin: false,
    fade: "Left", 
    titolo: "IO24 ADC",
    immagineSrc: "images/hardware/schedeautomazione/schedaio.png",
    altSrc: "IO24 ADC",
    dettagli: [
      {
        iconaClasse: "flaticon-development",
        descrizione:
          "La scheda elettronica IO24ADC è utilizzata nel controllo industriale per gestire ingressi e uscite digitali da 0 a 24VDC. È dotata di 24 ingressi e 24 uscite protette, e supporta la conversione di 5 canali analogico-digitali. Questa versatilità è arricchita da una porta di espansione per moduli aggiuntivi.",
      },
      {
        iconaClasse: "flaticon-physics",
        descrizione:
          "Le connessioni al PC di controllo avvengono tramite porte USB, RS232 o CAN, tutte galvanicamente isolate per una maggiore protezione. Questa caratteristica garantisce sicurezza e affidabilità nelle operazioni industriali.",
      },
    ],
  },
  {
    margin: true,
    fade: "Left", 
    titolo: "Encoder",
    immagineSrc: "images/hardware/schedeautomazione/encoder.png",
    altSrc: "Encoder",
    dettagli: [
      {
        iconaClasse: "flaticon-development",
        descrizione:
          "Il modulo ENCODER 4, parte del nostro progetto Industria 4.0, monitora accuratamente gli angoli attraverso quattro encoder assoluti. Può anche leggere coordinate da quattro righe ottiche digitali, aumentando così la precisione nel controllo dei processi industriali.",
      },
      {
        iconaClasse: "flaticon-physics",
        descrizione:
          "Si collega direttamente al PC di controllo tramite la scheda IO24ADC e la sua porta di espansione digitale. Questo arricchisce la nostra gamma di soluzioni, offrendo strumenti robusti e affidabili per la gestione dei processi industriali.",
      },
    ],
  },
  {
    margin: true,
    fade: "Right", 
    titolo: "Cora",
    immagineSrc: "images/hardware/schedeautomazione/cora.png",
    altSrc: "Cora",
    dettagli: [
      {
        iconaClasse: "flaticon-development",
        descrizione:
          "La scheda elettronica CORA legge correnti e trasforma i valori misurati in tensioni digitalizzate tramite i canali ADC della scheda IO24ADC. Dispone di un trasduttore isolato galvanicamente, capace di leggere correnti unidirezionali o bidirezionali fino a 19.2A.",
      },
      {
        iconaClasse: "flaticon-physics",
        descrizione:
          "La tensione di uscita, proporzionale alla corrente misurata, varia tra 0V e 3.3V, rendendola compatibile con i convertitori analogico-digitali della IO24ADC. Questo garantisce misurazioni precise e integrazione senza problemi nei sistemi industriali.",
      },
    ],
  }
];

export default schedeDescrizioneData;
