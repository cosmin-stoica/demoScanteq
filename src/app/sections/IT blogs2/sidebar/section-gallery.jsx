import ItodoImage from "../../../elements/itodo-img";
import { publicUrlFor } from "../../../../globals/constants";

function SectionGallery() {
    return (
        <>
            <div className="widget widget_gallery mfp-gallery">
                <h4 className="widget-title  ">Gallery</h4>
                <ul className="bg-white clearfix">
                    <li>
                        <div className="sx-post-thum">
                            <a href={publicUrlFor("images/gallery/thumb/pic1.jpg")} className="mfp-link"><ItodoImage src="images/gallery/thumb/pic1.jpg" alt="" /></a>
                        </div>
                    </li>
                    <li>
                        <div className="sx-post-thum ">
                            <a href={publicUrlFor("images/gallery/thumb/pic2.jpg")} className="mfp-link"><ItodoImage src="images/gallery/thumb/pic2.jpg" alt="" /></a>
                        </div>
                    </li>
                    <li>
                        <div className="sx-post-thum  ">
                            <a href={publicUrlFor("images/gallery/thumb/pic3.jpg")} className="mfp-link"><ItodoImage src="images/gallery/thumb/pic3.jpg" alt="" /></a>
                        </div>
                    </li>
                    <li>
                        <div className="sx-post-thum ">
                            <a href={publicUrlFor("images/gallery/thumb/pic4.jpg")} className="mfp-link"><ItodoImage src="images/gallery/thumb/pic4.jpg" alt="" /></a>
                        </div>
                    </li>
                    <li>
                        <div className="sx-post-thum ">
                            <a href={publicUrlFor("images/gallery/thumb/pic5.jpg")} className="mfp-link"><ItodoImage src="images/gallery/thumb/pic5.jpg" alt="" /></a>
                        </div>
                    </li>
                    <li>
                        <div className="sx-post-thum ">
                            <a href={publicUrlFor("images/gallery/thumb/pic6.jpg")} className="mfp-link"><ItodoImage src="images/gallery/thumb/pic6.jpg" alt="" /></a>
                        </div>
                    </li>
                </ul>
            </div>
        </>
    )
}
export default SectionGallery;