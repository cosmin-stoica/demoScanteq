import { bannerData } from "../../../globals/banner";
import Banner from "../common/bannerautoufficio";
import SectionBlogDetailInner from "../IT blogs/detail/section-blog-detail-Inner";
import SectionAboutCompany1 from "../home/index/section-about-company1";
import SectionClients2 from "../home/index2/section-clients2";
import NewClienti from "../../components/clienti/newClienti";
import SectionWhyChooseUs2 from "../home/index2/section-why-choose-us2";


function AutoUfficio() {
    return (
        <>
            <Banner _data={bannerData.autoufficio} />

            {/* SECTION CONTENT START */}
            <div className="section-full p-t100 p-b70 mobile-page-padding">
                <div className="container">
                    <div className="blog-single-space-wrap max-w800 m-lr-auto">
                        <SectionBlogDetailInner /> 
                    </div>
                </div>
            </div>
            {/* SECTION CONTENT END */}
        </>
    )
}
export default AutoUfficio;