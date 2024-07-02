import ItodoImage from "../../elements/itodo-img";
import { NavLink } from "react-router-dom";
import { useTranslation } from 'react-i18next';
import HomeSection from "../../elements/homeSection";

const IntroMasp = () => {

    const { t } = useTranslation("masp_caratteristiche");
    const maspDataIntro = t('intro.data', { returnObjects: true });

    if (Array.isArray(maspDataIntro) && maspDataIntro !== null) {
        maspDataIntro.forEach(item => {
        });
    } else {
        console.error('La lista non è disponibile o non è un array.');
    }

    console.log(maspDataIntro);


    /*//===================INTERFACCIA===========================//*/

    const CardListInterfaccia = [
        {
            src: "/images/masp/caratteristiche/interfaccia/1.png",
            width: "85%",
            widthLower: "70%",
            color1: "rgba(255, 142, 142, 0.3)",
            color2: "rgba(238, 53, 42, 0.3)",
            colorBackGround: "rgb(0,12,84)",
            transitionSeconds: "1000",
            transitionSecondsCss: "1s",
            fixedSeconds: "500",
            totalSeconds: "4000"
        },
        {
            src: "/images/masp/caratteristiche/interfaccia/2.png",
            width: "85%",
            widthLower: "70%",
            color1: "rgba(255, 142, 142, 0.3)",
            color2: "rgba(238, 53, 42, 0.3)",
            colorBackGround: "rgb(0,12,84)",
            transitionSeconds: "1000",
            transitionSecondsCss: "1s",
            fixedSeconds: "500",
            totalSeconds: "4000"
        },
        {
            src: "/images/masp/caratteristiche/interfaccia/3.png",
            width: "85%",
            widthLower: "70%",
            color1: "rgba(255, 142, 142, 0.3)",
            color2: "rgba(238, 53, 42, 0.3)",
            colorBackGround: "rgb(0,12,84)",
            transitionSeconds: "1000",
            transitionSecondsCss: "1s",
            fixedSeconds: "500",
            totalSeconds: "4000"
        },
        {
            src: "/images/masp/caratteristiche/interfaccia/4.png",
            width: "85%",
            widthLower: "70%",
            color1: "rgba(255, 142, 142, 0.3)",
            color2: "rgba(238, 53, 42, 0.3)",
            colorBackGround: "rgb(0,12,84)",
            transitionSeconds: "1000",
            transitionSecondsCss: "1s",
            fixedSeconds: "500",
            totalSeconds: "4000"
        },
    ]

    const CardListDescriptionsInterface = [
        "L'interfaccia utente è progettata per visualizzare tutte le informazioni operative nella finestra principale, usando pannelli sovrapposti di tipo Tab per le operazioni specifiche, una schermata Home per l'accesso rapido alle funzioni principali e una schermata Log per monitorare e analizzare le attività di sistema.",
        "L'interfaccia utente è progettata per visualizzare tutte le informazioni operative nella finestra principale, usando pannelli sovrapposti di tipo Tab per le operazioni specifiche, una schermata Home per l'accesso rapido alle funzioni principali e una schermata Log per monitorare e analizzare le attività di sistema"
    ]



    /*//===================AUTENTICAZIONE===========================//*/

    const CardListAuth = [
        {
            src: "/images/masp/caratteristiche/auth/1.png",
            width: "85%",
            widthLower: "70%",
            color1: "rgba(255, 142, 142, 0.3)",
            color2: "rgba(238, 53, 42, 0.3)",
            colorBackGround: "rgb(0,12,84)",
            transitionSeconds: "1000",
            transitionSecondsCss: "1s",
            fixedSeconds: "500",
            totalSeconds: "4000"
        },
        {
            src: "/images/masp/caratteristiche/auth/2.png",
            width: "85%",
            widthLower: "70%",
            color1: "rgba(255, 142, 142, 0.3)",
            color2: "rgba(238, 53, 42, 0.3)",
            colorBackGround: "rgb(0,12,84)",
            transitionSeconds: "1000",
            transitionSecondsCss: "1s",
            fixedSeconds: "500",
            totalSeconds: "4000"
        },
        {
            src: "/images/masp/caratteristiche/auth/3.png",
            width: "85%",
            widthLower: "70%",
            color1: "rgba(255, 142, 142, 0.3)",
            color2: "rgba(238, 53, 42, 0.3)",
            colorBackGround: "rgb(0,12,84)",
            transitionSeconds: "1000",
            transitionSecondsCss: "1s",
            fixedSeconds: "500",
            totalSeconds: "4000"
        }
    ]

    const CardListDescriptionsAuth = [
        "L'applicativo MASP App suddivide il personale in tre categorie: User, Coord e Admin, ciascuna con permessi specifici per soddisfare le esigenze operative. La gestione degli accessi è implementata tramite una funzione di login, assicurando la tracciabilità degli operatori e impedendo l'uso non autorizzato delle postazioni.",
        "Dalla schermata principale, cliccando su Login, si apre il pannello con la lista degli utenti registrati. Per accedere, bisogna selezionare l'utente, inserire il PIN a schermo e premere Login. In alternativa, il login può avvenire leggendo il codice badge dell'operatore con il lettore barcode mentre la finestra Login è aperta."
    ]


    /*//===================AVVIO===========================//*/

    const CardListAvvio = [
        {
            src: "/images/masp/caratteristiche/avvio/1.png",
            width: "90%",
            widthLower: "70%",
            color1: "rgba(255, 142, 142, 0.3)",
            color2: "rgba(238, 53, 42, 0.3)",
            colorBackGround: "rgb(0,12,84)",
            transitionSeconds: "1000",
            transitionSecondsCss: "1s",
            fixedSeconds: "500",
            totalSeconds: "4000"
        },
        {
            src: "/images/masp/caratteristiche/avvio/2.png",
            width: "90%",
            widthLower: "70%",
            color1: "rgba(255, 142, 142, 0.3)",
            color2: "rgba(238, 53, 42, 0.3)",
            colorBackGround: "rgb(0,12,84)",
            transitionSeconds: "1000",
            transitionSecondsCss: "1s",
            fixedSeconds: "500",
            totalSeconds: "4000"
        },
        {
            src: "/images/masp/caratteristiche/avvio/3.png",
            width: "90%",
            widthLower: "70%",
            color1: "rgba(255, 142, 142, 0.3)",
            color2: "rgba(238, 53, 42, 0.3)",
            colorBackGround: "rgb(0,12,84)",
            transitionSeconds: "1000",
            transitionSecondsCss: "1s",
            fixedSeconds: "500",
            totalSeconds: "4000"
        },
        {
            src: "/images/masp/caratteristiche/avvio/4.png",
            width: "90%",
            widthLower: "70%",
            color1: "rgba(255, 142, 142, 0.3)",
            color2: "rgba(238, 53, 42, 0.3)",
            colorBackGround: "rgb(0,12,84)",
            transitionSeconds: "1000",
            transitionSecondsCss: "1s",
            fixedSeconds: "500",
            totalSeconds: "4000"
        }
    ]

    const CardListDescriptionsAvvio = [
        "Una prima possibilità prevede l'inserimento manuale del codice, in cui l'utente immette direttamente il codice del ciclo di lavorazione tramite tastiera.",
        "Un'alternativa è la lettura del barcode, che permette di velocizzare il processo di selezione. Utilizzando un lettore di codici a barre, l'utente può scansionare il barcode associato al ciclo di lavorazione, garantendo un inserimento rapido e privo di errori.",
        "Un'altra opzione è la selezione da una lista preimpostata. In questo caso, l'utente può scegliere il ciclo di lavorazione desiderato da un elenco predefinito, visualizzando tutte le opzioni disponibili in modo chiaro e organizzato."
    ]


    /*//===================DIAGNOSTICA===========================//*/

    const CardListDiag = [
        {
            src: "/images/masp/caratteristiche/diagnostica/1.png",
            width: "90%",
            widthLower: "70%",
            color1: "rgba(255, 142, 142, 0.3)",
            color2: "rgba(238, 53, 42, 0.3)",
            colorBackGround: "rgb(0,12,84)",
            transitionSeconds: "1000",
            transitionSecondsCss: "1s",
            fixedSeconds: "500",
            totalSeconds: "4000"
        },
        {
            src: "/images/masp/caratteristiche/diagnostica/2.png",
            width: "90%",
            widthLower: "70%",
            color1: "rgba(255, 142, 142, 0.3)",
            color2: "rgba(238, 53, 42, 0.3)",
            colorBackGround: "rgb(0,12,84)",
            transitionSeconds: "1000",
            transitionSecondsCss: "1s",
            fixedSeconds: "500",
            totalSeconds: "4000"
        },
        {
            src: "/images/masp/caratteristiche/diagnostica/3.png",
            width: "90%",
            widthLower: "70%",
            color1: "rgba(255, 142, 142, 0.3)",
            color2: "rgba(238, 53, 42, 0.3)",
            colorBackGround: "rgb(0,12,84)",
            transitionSeconds: "1000",
            transitionSecondsCss: "1s",
            fixedSeconds: "500",
            totalSeconds: "4000"
        }
    ]

    const CardListDescriptionsDiag = [
        "I pannelli della diagnostica visualizzano lo stato delle periferiche per ogni operazione o funzionalità della postazione, permettendo la gestione manuale. Forniscono informazioni dettagliate sul funzionamento delle periferiche collegate.",
        "Si aprono tramite il pulsante 'Diagnostica' nella schermata principale, che apre una finestra di selezione dei pannelli specifici per ogni job o funzionalità della postazione.",
        "L'interfaccia dettagliata dei pannelli diagnostici permette il controllo e la manutenzione delle periferiche. Gli utenti possono eseguire operazioni avanzate di diagnostica e monitoraggio per mantenere l'efficienza del sistema."
    ]

    return (
        <>


            {maspDataIntro.map((data, index) => (
                <HomeSection
                    title={data.titolo}
                    imgSrcList={data.data}
                    putBackground={true}
                    descriptionList={data.dettagli.map(item => item.descrizione)}
                    backgroundColor={index % 2 === 0 ? 'white' : 'rgb(245,245,245)'}
                    flip={index % 2 === 0}
                />
            ))}
            <div className="width100 perflex margin-top100">
                <NavLink to="/masp-operazioni"><button className="masp-btn-avanti">{t("intro.button")}</button></NavLink>
            </div>
        </>
    );
};

export default IntroMasp;