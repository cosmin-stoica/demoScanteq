import SectionSearch from "./section-search";
import SectionCategories from "./section-categories";
import SectionLatestNews from "./section-latest-news";
import SectionGallery from "./section-gallery";
import SectionSocialIcons from "./section-social-icons";

function SectionSidebar() {
    return (
        <>
            <div className="side-bar sx-bg-white">
                <SectionCategories />
                {/*<SectionLatestNews />
                <SectionGallery />*/}
            </div>
        </>
    )
}
export default SectionSidebar;