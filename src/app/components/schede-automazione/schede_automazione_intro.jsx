import ItodoImage from "../../elements/itodo-img";
import introData from "../../../globals/DataTEXT/Hardware/Schede_Automazione/introData";

const SchedeAutomazioneIntro = () => {

    return (
        <>


            <div className="">
                <div className="section-full wow fadeInDown" data-wow-duration="1500ms">
                    <h1 className="TitoloCapitolo">Schede per automazione</h1>
                </div>


                <div className="section-full wow fadeInDown" data-wow-duration="1500ms">
                    <div className="introunita-div">

                        <div>
                            <ItodoImage src="images/hardware/schedeautomazione/schede_insieme.png" alt="schede_image"></ItodoImage>
                        </div>
                        <div className="text-container">
                            {introData[0].intro}

                        </div>
                    </div>
                </div>
            </div>
        </>
    );

};

export default SchedeAutomazioneIntro;
