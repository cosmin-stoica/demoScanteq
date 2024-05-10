import SectionVideo2 from "../../../sections/home/index2/section-video2"
import SectionWhyChooseUs4 from "../../../sections/company/about/section-why-choose-us4"
import SectionClients2 from "../../../sections/home/index2/section-clients2"
import SectionCounter1 from "../../../sections/home/index/section-counter1";
import ItodoImage from "../../../elements/itodo-img";
import { useEffect } from "react";
import { loadScript } from "../../../../globals/constants";

function ServicesDetailPage() {

    useEffect(()=>{
        loadScript("js/custom.js")
    })

    return (
        <>
            {/* service detail SECTION START */}
            <div className="section-full p-b80 sx-ser-detail-outer sx-bg-white">
                <div className="sx-ser-detail-l-pic p-b80">
                    <div className="sx-media  relative ">
                        <ItodoImage src="images/services/service-detail.jpg" alt="image" />
                        <div className="sx-bnr-outline-text">
                            <h1> It Solution</h1>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="section-content">
                        <div className="sx-our-service-detail">
                            {/* TITLE START */}
                            <div className="section-head2">
                                <div className="sx-head-s-title">Why Choose Uss</div>
                                <div className="sx-head-l-title">
                                    <h2 className="sx-title2">Our creative design solutions are for people, not for machines. Yet made by people and machines.</h2>
                                </div>
                            </div>
                            {/* TITLE END */}
                            <div className="sx-our-service-info m-b80">
                                <p>Mauris ultricies orci in sodales molestie. Nullam et vehicula lacus, euismod gravida tortor. Morbi ipsum lectus, viverra id vulputate eget, molestie non nunc. Donec mollis accumsan risus, at vestibul
                                    at. Cras vulputate nisi in consectetur sollicitudin. Vestibulum ut vestibulum justo. Fusce fringilla ullamcorper elit, a bibendum orci blandit non. Integer porta, nunc ut ornare auctor, mauris nulla bland
                                    tortor nisi eget ex. Integer luctus sollicitudin justo et finibus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nulla in ligula vitae turpis suscipit tristique id ut tu
                                    purus in arcu tempor, nec suscipit nulla sodales.
                                </p>
                                <p>Proin finibus imperdiet nulla, quis euismod nunc gravida eget. Vestibulum iaculis nibh facilisis felis iaculis vestibulum. Curabitur purus nulla, bibendum vitae varius pulvinar, molestie in massa. Quis
                                    nunc, vitae rutrum libero. Duis eget consectetur urna. Ut ut aliquet magna. Nullam augue nulla, fermentum vel elit eu, posuere vehicula tellus. Orci varius natoque penatibus et magnis dis parturient
                                    ridiculus mus. Nam eget nisl non elit tempor dignissim nec non sapien.
                                </p>
                                <div className="row sx-about-icon-bx1-column p-t50 p-b20">
                                    <div className="col-lg-4 col-md-6 m-b30">
                                        <div className="sx-icon-bx-2">
                                            <div className="sx-media">
                                                <i className="flaticon-mouse-1" />
                                            </div>
                                            <div className="sx-icon-bx-info">
                                                <span className="sx-icon-bx-title">Information technology</span>
                                                <span className="sx-icon-bx-title-info">Consulting</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-6 m-b30">
                                        <div className="sx-icon-bx-2">
                                            <div className="sx-media">
                                                <i className="flaticon-download" />
                                            </div>
                                            <div className="sx-icon-bx-info">
                                                <span className="sx-icon-bx-title">Easy to edit process</span>
                                                <span className="sx-icon-bx-title-info">IT Service</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-6 m-b30">
                                        <div className="sx-icon-bx-2">
                                            <div className="sx-media">
                                                <i className="flaticon-wordpress" />
                                            </div>
                                            <div className="sx-icon-bx-info">
                                                <span className="sx-icon-bx-title">Wordpress table design</span>
                                                <span className="sx-icon-bx-title-info">IT Business</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <p>Proin finibus imperdiet nulla, quis euismod nunc gravida eget. Vestibulum iaculis nibh facilisis felis iaculis vestibulum. Curabitur purus nulla, bibendum vitae varius pulvinar, molestie in massa. Quis
                                    nunc, vitae rutrum libero. Duis eget consectetur urna. Ut ut aliquet magna. Nullam augue nulla, fermentum vel elit eu, posuere vehicula tellus. Orci varius natoque penatibus et magnis dis parturient
                                    ridiculus mus. Nam eget nisl non elit tempor dignissim nec non sapien.
                                </p>
                            </div>
                            
                            <SectionCounter1 />
                        </div>
                    </div>
                </div>
            </div>
            {/* service detail SECTION END */}
            
            <SectionVideo2 />
            <SectionWhyChooseUs4 />
            <SectionClients2 />
        </>
    )
}

export default ServicesDetailPage;