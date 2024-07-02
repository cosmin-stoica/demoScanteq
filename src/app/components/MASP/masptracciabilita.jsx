import { bannerData } from "../../../globals/banner";
import Banner from "../../elements/common/bannerautoind";
import FormatiTraccia from "./formatitraccia";
import NewTracciabilita from "./newtracciabilita";


function MaspTracciabilita() {
    return (
        <>
            {<Banner _data={bannerData.autoindustriale} />}

            <div>
                    <NewTracciabilita></NewTracciabilita>
                    <FormatiTraccia></FormatiTraccia>
            </div>

        </>
    )
}
export default MaspTracciabilita;