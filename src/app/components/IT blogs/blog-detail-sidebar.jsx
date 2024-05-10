import { bannerData } from "../../../globals/banner";
import Banner from "../../sections/common/banner";
import SectionBlogDetailInner from "../../sections/IT blogs/detail/section-blog-detail-Inner";
import SectionSidebar from "../../sections/IT blogs/sidebar/section-sidebar";
import { useEffect } from "react";
import { loadScript } from "../../../globals/constants";

function BlogDetailSidebarPage() {

    useEffect(()=>{
        loadScript("js/custom.js")
    })

    return (
        <>
            <Banner _data={bannerData.blogdetailsidebar} />

            {/* SECTION CONTENT START */}
            <div className="section-full p-t100 p-b70 mobile-page-padding">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-8 col-lg-8 col-md-12">
                        <SectionBlogDetailInner />
                        </div>
                        {/* SIDE BAR START */}
                        {/*<div className="col-xl-4 col-lg-4 col-md-12 sticky_column">
                            <SectionSidebar />
    </div> */}
                        {/* SIDE BAR END */}
                    </div>
                </div>
            </div>
            {/* SECTION CONTENT END */}
        </>
    )
}
export default BlogDetailSidebarPage;