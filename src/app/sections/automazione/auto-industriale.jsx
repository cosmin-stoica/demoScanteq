import { bannerData } from "../../../globals/banner";
import Banner from "../common/bannerautoind";
import IndCont from "../IT blogs/detail/ind-cont";
import IndCont11 from "../IT blogs/detail/ind-cont1-1";
import IndCont2 from "../IT blogs/detail/ind-cont2";
import IndCont3 from "../IT blogs/detail/ind-cont3";
import IndCont4 from "../IT blogs/detail/ind-cont4";
import IndCont5 from "../IT blogs/detail/ind-cont5";
import IndCont6 from "../IT blogs/detail/ind-cont6";
import JobCards from "./jobcards";
import JobCardsDef from "./jobcardsDef";
function AutoIndustriale() {
    return (
        <>
            {<Banner _data={bannerData.autoindustriale} />}
            {/* SECTION CONTENT START */}
            <div id="cont22" className="section-full p-t100 p-b70 mobile-page-padding">
                <div className="container">
                    {<IndCont11 />}
                </div>
            </div>
            <div id="containertabella" className="section-full p-t100 p-b70 mobile-page-padding padding-bottom70px">
                <div className="container">
                    <IndCont5 />
                </div>
            </div>
            {/*<div id="containertracciabilità" className="section-full p-t100 p-b70 mobile-page-padding">
                <div className="container">
                    {/*<IndCont6/>
                </div>
            </div>*/}
            <div id="containerinterfaccia" className="section-full p-t100 p-b70 mobile-page-padding">
                {/*<IndCont2/>  */}
                {/*<JobCards></JobCards>*/}
                {<JobCardsDef></JobCardsDef>}
            </div>
            <div id="containertracciabilità" className="section-full p-t100 p-b70 mobile-page-padding">
                <div className="container">
                    <IndCont4 />
                </div>
            </div>

            <div id="containertabella" className="section-full p-t100 p-b70 mobile-page-padding">
                <div className="container">
                    <IndCont3 />
                </div>
            </div>


            {/* SECTION CONTENT END */}
        </>
    )
}
export default AutoIndustriale;