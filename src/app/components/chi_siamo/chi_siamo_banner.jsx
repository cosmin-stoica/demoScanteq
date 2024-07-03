import ItodoImage from "../../elements/itodo-img";

const ChiSiamoBanner = () => {

    let variab = true;

    return (
        <>
            <div className="chi-siamo-banner">
                {variab ? <video autoPlay muted loop playsInline className="video-background">
                    <source src="/assets/images/about/video3.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video> : <ItodoImage src="/images/about/sfondo.png"></ItodoImage>}
                <div className="color-overlay"></div>
                <div className="chi-siamo-banner-content">
                    <div className="chi-siamo-banner-content-title">
                        Soluzioni Avanzate per l'Industria Moderna
                    </div>
                    <div className="chi-siamo-banner-content-desc">
                        Scanteq, fondata a Torino, eccelle in soluzioni avanzate di automazione industriale, digitalizzazione documenti e tecnologie di stampa, servendo marchi prestigiosi dell'industria automobilistica europea.
                    </div>
                    <div className="chi-siamo-banner-content-btnwrapper">
                        <a href="#aboutpane"><button>Scropi di più</button></a>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ChiSiamoBanner;