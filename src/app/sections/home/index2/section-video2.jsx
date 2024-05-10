import { publicUrlFor } from "../../../../globals/constants";

function SectionVideo2() {
    return (
        <>
            <div className="section-full sx-video-2-outer sx-atc-fixed" style={{ backgroundImage: `url(${publicUrlFor("images/vid-2-bg.jpg")})` }}>
                <div id = "videocont" className="container">
                    <div className="sx-video-section text-center">
                        <div className="sx-video-btn-wrap">
                            <a id = "videocontvideo" href="https://www.youtube.com/watch?v=FRh9sXb0bXM" className="mfp-video circle">
                                <i className="flaticon-play" />
                            </a>
                        </div>
                        <div className="sx-video-btn-wrap">
                            <a id = "videocontvideo" href="https://www.youtube.com/watch?v=o31RKZRu_as" className="mfp-video circle">
                                <i className="flaticon-play" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SectionVideo2;