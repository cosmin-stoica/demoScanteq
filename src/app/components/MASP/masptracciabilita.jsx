import { bannerData } from "../../../globals/banner";
import Banner from "../../elements/common/bannerautoind";
import FormatiTraccia from "./formatitraccia";
import NewTracciabilita from "./newtracciabilita";


function MaspTracciabilita() {
    return (
        <>
            {<Banner _data={bannerData.autoindustriale} />}

            <div id="containertracciabilità" className="section-full p-t100 p-b70 mobile-page-padding">
                <div className="container">
                    <NewTracciabilita></NewTracciabilita>
                    <FormatiTraccia></FormatiTraccia>
                </div>
            </div>

        </>
    )
}
export default MaspTracciabilita;