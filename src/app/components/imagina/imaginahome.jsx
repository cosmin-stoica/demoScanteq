import SectionBlogSingle from "../../sections/IT blogs/detail/section-blog-single";
import Banner from "../../sections/common/bannerautoufficio";
import { bannerData } from "../../../globals/banner";
import ImaginaIntro from "./imaginaintro";
import ImaginaCaratteristiche from "./imaginacaratteristiche";
import ScanQuest from "./scanquest";
import ImmaginiAcquisite from "./immaginiacquisite";

const ImaginaHome = () => {
    return (
        <>

            <Banner _data={bannerData.autoufficio} />
            <div className="panesupervisorcomm bgwhite section-full p-t110 mobile-page-padding width100 perflex">
                <div className="container">
                    <ImaginaIntro></ImaginaIntro>
                </div>
            </div>
            <div className="panesupervisorcomm bggrey section-full p-t110 mobile-page-padding width100 perflex">
                <div className="container">
                    <ImaginaCaratteristiche></ImaginaCaratteristiche>            
                </div>
            </div>
            <div className="panesupervisorcomm bgwhite section-full p-t110 mobile-page-padding width100 perflex">
                <div className="container">
                    <ScanQuest></ScanQuest>
                </div>
            </div>
            <div className="panesupervisorcomm bggrey section-full p-t110 mobile-page-padding width100 perflex">
                <div className="container">
                    <ImmaginiAcquisite></ImmaginiAcquisite>   
                    {/*<SectionBlogSingle></SectionBlogSingle>*/}
                </div>
            </div>
        </>
    );
};

export default ImaginaHome;