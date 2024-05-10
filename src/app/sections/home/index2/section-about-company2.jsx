import SectionCounter1 from "../index/section-counter1";
import SectionAboutCompany2Inner from "./section-about-company2-inner";

function SectionAboutCompany2() {
    return (
        <>
            <div className="section-full  p-t110 p-b80 bg-white sx-about-bx3-outer">
                <div className="container">
                    <div className="section-content">
                        <SectionAboutCompany2Inner />
                        {/* COUNTER START */}
                        {/* COUNTER  END */}
                    </div>
                </div>
            </div>
        </>
    )
}

export default SectionAboutCompany2;