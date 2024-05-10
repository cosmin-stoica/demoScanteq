import { bannerData } from "../../../globals/banner";
import Banner from "../../sections/common/banner";

function PickingScreen() {
    return (
        <>
            <Banner _data={bannerData.picking} />
            {/* SECTION CONTENT START */}
            <div className="section-full p-t100 p-b70 mobile-page-padding">
            
            </div>
            {/* SECTION CONTENT END */}
        </>
    )
}
export default PickingScreen;