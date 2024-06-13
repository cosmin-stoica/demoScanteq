import { bannerData } from "../../../globals/banner";
import Banner from "../../elements/common/banner";
import SectionBlogSingle from "./section-blog-single";
import SectionSidebar from "./section-sidebar";
import { useEffect } from "react";
import { loadScript } from "../../../globals/constants";

function Leadership() {

    useEffect(() => {
        loadScript("js/custom.js")
    })

    return (
        <>
            <Banner _data={bannerData.leadership} />

            {/* SECTION CONTENT START */}
            <div className="section-full p-t100 p-b70 mobile-page-padding">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-8 col-lg-8 col-md-12">
                            <SectionBlogSingle></SectionBlogSingle>
                        </div>
                        {/* SIDE BAR START */}
                        <div className="col-xl-4 col-lg-4 col-md-12 sticky_column">
                            <SectionSidebar />
                        </div>
                        {/* SIDE BAR END */}
                    </div>
                </div>
            </div>
            {/* SECTION CONTENT END */}
        </>
    )
}
export default Leadership;