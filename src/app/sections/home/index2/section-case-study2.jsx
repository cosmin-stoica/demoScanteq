import { NavLink } from "react-router-dom";
import { publicUrlFor } from "../../../../globals/constants";
import ItodoImage from "../../../elements/itodo-img";

function SectionCaseStudy2() {
    return (
        <>
            <div className="section-full p-t110 p-b80 sx-case-study2-outer">
                <div id = "ufficioim" className="">
                </div>
                <div id="sium2"className="section-content">

                <div className="primariga">
                    <img className="fotoriga" src = "/assets/images/case-study/4.jpg" alt = ""></img>
                    <div className="colonna">
                    <img className="foto1" src = "/assets/images/case-study/euro50.jpg" alt = ""></img>
                    <img className="foto2" src = "/assets/images/case-study/2.jpg" alt = ""></img>
                    <img className="foto3" src = "/assets/images/case-study/3.jpg" alt = ""></img>
                    </div>
                </div>

                <div className="secondariga">
                    <img className= "foto5" src = "/assets/images/case-study/5.jpg" alt = ""></img>
                    <img className= "foto6" src = "/assets/images/case-study/6.jpg" alt = ""></img>
                </div>

                </div>

            </div>
        </>
    )
}

export default SectionCaseStudy2;