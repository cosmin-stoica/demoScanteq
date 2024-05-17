import supervisorDataIntro from "../../../globals/DataTEXT/Supervisor/supervisorDataIntro";


const HubPrequel = () => {

    return (
        <>
            <div className="container">
                <div className="hub-prequel-div-upper margin-top50">

                    <div className="section-full wow fadeInUp" data-wow-delay="500ms" data-wow-duration="1500ms">
                        <div className="hub-prequel-div-inner">
                            <i className="flaticon-data"></i>
                            <p>Control Hub</p>
                        </div>
                    </div>

                    <div className="section-full wow fadeInLeft" data-wow-duration="1500ms">
                        <div className="hub-prequel-div-inner">
                            <i className="flaticon-monitor-1"></i>
                            <p>Traceability Hub</p>
                        </div>
                    </div>

                    <div className="section-full wow fadeInRight" data-wow-delay="1000ms" data-wow-duration="1500ms">
                        <div className="hub-prequel-div-inner">
                            <i className="flaticon-technical-support"></i>
                            <p>Maintenance Hub</p>
                        </div>
                    </div>

                </div>


                <div className="section-full wow fadeInDown" data-wow-delay="1100ms" data-wow-duration="1500ms">
                <div className="width100 perflex">
                    <div className="supervisor-hub-prequel-descrizione-generale">
                        <p>{supervisorDataIntro[1].descrizioneHubGenerale}</p>
                    </div>
                </div>
                </div>
            </div>
        </>
    );

};

export default HubPrequel;