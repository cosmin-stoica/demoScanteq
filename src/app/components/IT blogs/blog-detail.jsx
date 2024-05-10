import { bannerData } from "../../../globals/banner";
import Banner from "../../sections/common/banner";
import SectionBlogDetailInner from "../../sections/IT blogs/detail/section-blog-detail-Inner";

function BlogDetailPage() {
    return (
        <>
            <Banner _data={bannerData.blogdetail} />

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
export default BlogDetailPage;