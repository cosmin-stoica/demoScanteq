import ItodoImage from "../../elements/itodo-img";
import { useNavigate } from 'react-router-dom';
import { useState } from "react";
import Particles from 'react-tsparticles';
import { useCallback } from "react";
import { loadSlim } from "tsparticles-slim";
import { useEffect } from "react";


function PickingHome() {

    const navigate = useNavigate(); // Muovi useNavigate qui
    const [selectedPane, setSelectedPane] = useState(1);
    const maximum = 8;
    const [shrinkImage, setShrinkImage] = useState(false);
    const [shrinkImageSecond, setShrinkImageSecond] = useState(false);

    const [isStart, setIsStart] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setShrinkImage(true);
        }, 1000); // Set timer for 1 second

        return () => clearTimeout(timer); // Clean up the timer on component unmount
    }, []);

    useEffect(() => {
        const timer = setTimeout(() => {
            setShrinkImageSecond(true);
        }, 1000); // Set timer for 1 second

        return () => clearTimeout(timer); // Clean up the timer on component unmount
    }, []);




    useEffect(() => {
        const timer = setTimeout(() => {
            setIsStart(false);
        }, 3000); // Set timer for 1 second

        return () => clearTimeout(timer); // Clean up the timer on component unmount
    }, []);




    const handleClickAvanti = () => {
        //navigate('/pickingscreen');

        if (selectedPane + 1 <= maximum) {
            setSelectedPane(selectedPane + 1);
            console.log(selectedPane);
        }
    }

    const handleClickIndietro = () => {
        if (selectedPane - 1 > 0) {
            //setSelectedPane(selectedPane - 1);

            {/*if (selectedPane === 2 || selectedPane === 3)
                setSelectedPane(1);
            else if (selectedPane === 4 || selectedPane === 5 || selectedPane === 6 || selectedPane === 7)
                setSelectedPane(3);
            else if (selectedPane === 8 || selectedPane === 9)
                setSelectedPane(7);
            else if (selectedPane === 10 || selectedPane === 11)
                setSelectedPane(9);
        else*/}
            setSelectedPane(selectedPane - 1);

            console.log(selectedPane);
        }
    }

    const handleEsciClick = () => {
        navigate('/');
    }

    const particlesInit = useCallback(async engine => {
        console.log(engine);
        // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
        // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
        // starting from v2 you can add only the features you need reducing the bundle size
        //await loadFull(engine);
        await loadSlim(engine);
    }, []);

    const particlesLoaded = useCallback(async container => {
        await console.log(container);
    }, []);

    return (
        <>

            <div className="pickingprevdiv">

                {isStart && <div className="PreviewPick">
                    <div className="squarepick">
                        <div className={`logoroundimg-container ${shrinkImageSecond ? "shrink" : ""}`}>
                            <ItodoImage className={`logoroundimg ${shrinkImage ? "shrink" : ""}`} src="images/prodottiprimo/logoround.png"></ItodoImage>
                        </div>
                    </div>
                </div>}
                {!isStart && <div id="pickingpanefull" className="section-full wow fadeInLeft" data-wow-duration="2000ms">

                    <Particles
                        className="particlespicking"
                        id="tsparticles"
                        init={particlesInit}
                        loaded={particlesLoaded}
                        options={{
                            background: {
                                color: {
                                    value: "", // Rimuovi il colore di sfondo solido
                                },
                                // Aggiungi il gradiente lineare come background
                                image: "linear-gradient(to right, #052b6e, #215abf)", // Modifica i colori e la direzione del gradiente secondo le tue preferenze
                            },
                            fpsLimit: 120,
                            interactivity: {
                                events: {
                                    onClick: {
                                        enable: false,
                                        mode: "push",
                                    },
                                    onHover: {
                                        enable: false,
                                        mode: "repulse",
                                    },
                                    resize: true,
                                },
                                modes: {
                                    push: {
                                        quantity: 100,
                                    },
                                    repulse: {
                                        distance: 200,
                                        duration: 0.4,
                                    },
                                },
                            },
                            particles: {
                                color: {
                                    value: "#ffffff",
                                },
                                links: {
                                    color: "#ffffff",
                                    distance: 150,
                                    enable: true,
                                    opacity: 0.5,
                                    width: 1,
                                },
                                move: {
                                    direction: "none",
                                    enable: true,
                                    outModes: {
                                        default: "bounce",
                                    },
                                    random: false,
                                    speed: 1,
                                    straight: false,
                                },
                                number: {
                                    density: {
                                        enable: true,
                                        area: 1000,
                                    },
                                    value: 80,
                                },
                                opacity: {
                                    value: 0.7,
                                },
                                shape: {
                                    type: "square",
                                },
                                size: {
                                    value: { min: 1, max: 5 },
                                },
                            },
                            detectRetina: true,
                        }}
                    />





                    <button className="buttonEsciPicking" onClick={handleEsciClick}>Esci</button>


                    {(selectedPane === 1) && <div className="PrimoPanePicking">
                        <h1 className="trasformatext">Trasforma il tuo picking con la tecnologia 4.0</h1>
                    </div>
                    }



                    {(selectedPane === 2) && <div id="PrimoPanePickingdue" className="section-full wow fadeInUp" data-wow-duration="2000ms">
                        <div id="fadeIMG">
                            <div id="piuasinistra" className="section-full wow fadeInLeft" data-wow-duration="1000ms">
                                <h1>Pick To <br></br> Image</h1>
                            </div>
                            <div className="divperdisplayPickingIMG">
                                <ItodoImage className="displayPickingIMG" src="images/prodottiprimo/pickingcompleto.png"></ItodoImage>
                            </div>
                        </div>
                        <div id="perpdiv" >
                            <p>
                                Siamo entusiasti di presentare il nostro dispositivo progettato per la trasformazione digitale e
                                l’ottimizzazione del processo di Picking, con un focus sulla visualizzazione di informazioni
                                dettagliate sul contenuto da prelevare. Questo strumento promette di portare le aziende verso nuovi
                                livelli di efficienza, produttività e integrazione specifica per i dispositivi con connettività avanzata
                                appartenenti alla categoria Industria 4.0.
                            </p>
                        </div>
                    </div>
                    }





                    {(selectedPane === 3 || selectedPane === 4 || selectedPane === 5) &&
                        <div id="quartocapitolo" className="section-full wow fadeInLeft" data-wow-duration="2000ms">
                            <h1>Visualizzazione Intelligente </h1>

                            <div className="perflexsensori">            
                            <ItodoImage className="sensoriimagedue" src="images/prodottiprimo/intelli.png"></ItodoImage>   
                        </div>

                            <div className="contenitoreperitrespecifici">

                                {(selectedPane === 3 || selectedPane === 4 || selectedPane === 5) && <div className="section-full wow fadeInLeft" data-wow-duration="1000ms">
                                    <p>Il dispositivo Pick to Image dispone di uno schermo ad alta risoluzione previsto di
                                        touchscreen capacitivo che permette la navigazione fra più pannelli di controllo e, assieme a
                                        due spie luminose a LED, due pulsanti e un altoparlante, consente all’utente di interagire in
                                        modo agevole con lo strumento.
                                    </p>
                                </div>}

                                {(selectedPane === 4 || selectedPane === 5) && <div className="section-full wow fadeInRight" data-wow-duration="1000ms">
                                    <p>Il nostro dispositivo non indica solo la posizione da dove deve essere effettuato il prelievo
                                        attraverso indicazioni luminose e altri dati ma, in più,
                                        offre delle informazioni dettagliate sul contenuto grazie al display in grado di visualizzare
                                        immagini a colori, codici QR Code e testo con descrizioni.
                                    </p>
                                </div>}

                                {selectedPane === 5 && <div className="section-full wow fadeInLeft" data-wow-duration="1000ms">
                                    <p>La presenza di due spie LED ad alta luminosità garantisce una migliore visibilità durante il
                                        picking, anche in condizioni di scarsa illuminazione. La cassetta dove l’operatore deve
                                        eseguire il prelievo sarà dunque ben visibile, riducendo gli sbagli e diminuendo il tempo
                                        dell’operazione.
                                    </p>
                                </div>}

                            </div>

                        </div>
                    }



                    {(selectedPane === 6) && <div id="quartocapitolo" className="section-full wow fadeInLeft" data-wow-duration="1000ms">
                        <h1 className="indexmaggiorefont">Sensore di Presenza Multiraggio </h1>
                        <div className="perflexsensori">            
                            <ItodoImage className="sensoriimage" src="images/prodottiprimo/sensore.png"></ItodoImage>   
                        </div>
                        {(selectedPane === 6) && <div id="testopaneotto" className="section-full wow fadeInUp" data-wow-duration="1000ms">
                            <p>Grazie ai sensori di presenza provvisti di molteplici raggi laser a bassa potenza opportunamente
                                orientati, il dispositivo reagisce in modo intelligente quando la mano dell’operatore mano entra nello
                                spazio al di sopra di una cassetta. Se questa è abilitata per il picking viene aggiornato automaticamente
                                il numero di pezzi, comunicando al software di gestione l’avvenire dell’evento. Se la cassetta è in
                                modalità di vigilanza sarà emesso un segnale visibile o acustico di errato prelievo, segnalando l’errore
                                all’applicativo.
                            </p></div>}

                    </div>
                    }

                    {(selectedPane === 7 || selectedPane === 8) && <div id="quartocapitolo" className="section-full wow fadeInLeft" data-wow-duration="1000ms">
                        <h1>Interfaccia Utente </h1>

                        {(selectedPane === 7 || selectedPane == 8) && <div id="testopanedieci" className="section-full wow fadeInUp" data-wow-duration="1000ms">
                            <p>Permettendo la navigazione fra più finestre si offre un controllo del dispositivo intuitivo e
                                programmabile direttamente dalle schermate.
                            </p></div>}

                        <div className="contenitoreperitrespecifici">

                            {selectedPane === 8 && <div className="section-full wow fadeInLeft" data-wow-duration="1000ms">
                                <p>
                                    Login
                                </p>
                            </div>}

                            {selectedPane === 8 && <div className="section-full wow fadeInRight" data-wow-duration="1000ms">
                                <p>Picking
                                </p>
                            </div>}

                            {selectedPane === 8 && <div className="section-full wow fadeInLeft" data-wow-duration="1000ms">
                                <p>Qr Code
                                </p>
                            </div>}

                            {selectedPane === 8 && <div className="section-full wow fadeInLeft" data-wow-duration="1000ms">
                                <p>Impostazioni
                                </p>
                            </div>}



                        </div>



                    </div>
                    }







                    <div className="divbottonipicking">
                        <button className="avantipick" onClick={handleClickIndietro}>Indietro</button>
                        <button className="avantipick" onClick={handleClickAvanti}>Avanti</button>
                    </div>
                </div>}


            </div>







        </>
    )
}
export default PickingHome;