import Banner from "../../sections/common/banner";
import SectionClients2 from "../../sections/home/index2/section-clients2";
import SectionFAQTabs from "../../sections/company/faq/section-faq-tabs";
import SectionFAQContent from "../../sections/company/faq/section-faq-content";
import { bannerData } from "../../../globals/banner";

function FAQCombined() {
    return (
        <>
            <div className="section-full  p-t100 p-b0 sx-bg-white sx-faq--outer">
                <div className="container">
                    <div className="aon-faq-row-section">
                        {/* Detail SECTION START */}
                        <div className="sx-faq-style-1-wrap">
                            <SectionFAQTabs />
                            <SectionFAQContent />
                        </div>
                        {/* Detail SECTION END */}
                    </div>
                </div>
            </div>
        </>
    )
}

function FAQPage() {
    return (
        <>
            <Banner _data={bannerData.faq} />
            <FAQCombined />
            <SectionClients2 />
        </>
    )
}

export default FAQPage;