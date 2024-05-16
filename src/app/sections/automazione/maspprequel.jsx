import ItodoImage from "../../elements/itodo-img";

const MaspPrequel = () => {
  return (
    <>
      <div className="section-full wow fadeInLeft" data-wow-duration="1500ms">
        <h1 className="TitoloCapitolo">Caratteristiche Principali</h1>
      </div>

      <div className="section-full wow fadeInRight" data-wow-duration="1500ms">

        <div className="masp-prequel-div">
          <div className="masp-prequel-div-img">
            <ItodoImage src="/images/masp/masp.png"></ItodoImage>
          </div>
          <div className="masp-prequel-div-parteP">
            <p>Nel contesto dell'automazione per l'Industria 4.0, viene proposta la piattaforma MASP (Mounting Assisted Software Platform), che consente l'implementazione flessibile ed efficiente di sistemi di controllo con contenuti tecnologici avanzati all’interno delle linee di produzione attraverso una combinazione efficace di strumenti software e hardware proprietari.</p>
            <p>Il funzionamento si basa sull’esecuzione in ordine predeterminato di una serie di operazioni, denominate Job, che rappresentano passaggi effettuati dalla parte software, elettronica ed elettromeccanica, con o senza intervento dell’operatore, necessari per raggiungere un risultato finale.</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default MaspPrequel;
