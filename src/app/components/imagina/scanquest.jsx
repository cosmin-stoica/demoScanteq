import ItodoImage from "../../elements/itodo-img";

const ScanQuest = () => {
    return (
        <>
            <div className="section-full wow fadeInLeft" data-wow-duration="1500ms">
                <h1 className="TitoloCapitolo">ScanQuest</h1>
            </div>

            <div className="scanquest-div">
                <p>Di seguito sono mostrate due schermate del programma demo ScanQuest</p>
                <div className="row sx-single-small-media">
                    <div className="col-md-6 col-sm-4">
                        <div className="sx-box m-b30">
                            <div className="sx-media">
                                <ItodoImage src="images/case-study/automazione/prima.png" alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-sm-4">
                        <div className="sx-box m-b30">
                            <div className="sx-media">
                                <ItodoImage src="images/case-study/automazione/seconda.jpg" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

    
        </>
    );
};

export default ScanQuest;