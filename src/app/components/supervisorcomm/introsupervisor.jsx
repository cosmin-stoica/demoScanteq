import ItodoImage from "../../elements/itodo-img";
import supervisorDataIntro from "../../../globals/DataTEXT/Supervisor/supervisorDataIntro";

const IntroSupervisor = () => {
    return (
        <>

            <div className="container">
                <div className="section-full wow fadeInRight" data-wow-duration="1500ms">

                    <div className="masp-prequel-div">
                        <div className="masp-prequel-div-img">
                            <ItodoImage src="/images/supervisor/SupervisorLogo.png"></ItodoImage>
                        </div>
                        <div className="masp-prequel-div-parteP">
                            <p>{supervisorDataIntro[0].descrizione1Intro}</p>
                            <p>{supervisorDataIntro[0].descrizione2Intro}</p>
                        </div>
                    </div>
                </div>


            </div>


        </>
    );
};

export default IntroSupervisor;