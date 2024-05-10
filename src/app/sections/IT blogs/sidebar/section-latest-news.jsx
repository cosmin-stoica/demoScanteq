import ItodoImage from "../../../elements/itodo-img";
import { NavLink } from "react-router-dom";

function SectionLatestNews() {
    return (
        <>
            <div className="widget  recent-posts-entry">
                <h4 className="widget-title  ">Articoli</h4>
                <div className="section-content">
                    <div className="widget-post-bx">
                        <div className="widget-post clearfix">
                            <div className="sx-post-media">
                                <ItodoImage src="images/flux.jpg" alt="" />
                            </div>
                            <div className="sx-post-info p-t30">
                                <div className="sx-post-meta ">
                                </div>
                                <div className="sx-post-title ">
                                    <h4 className="post-title"><NavLink to="https://www.academia.edu/52959964/Flux_observer_based_high_performance_control_of_synchronous_reluctance_motors_by_including_cross_saturation">Flux-observer-based high-performance control of synchronous reluctance motors by including cross saturation</NavLink></h4>
                                </div>
                                <div className="sx-post-readmore">
                                    <NavLink to="https://www.academia.edu/52959964/Flux_observer_based_high_performance_control_of_synchronous_reluctance_motors_by_including_cross_saturation" title="READ MORE" rel="bookmark" className="site-button-link icon"><i className="fa  fa-long-arrow-right" />Read More</NavLink>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="widget-dev-line" />
                    <div className="widget-post-bx">
                        <div className="widget-post clearfix">
                            <div className="sx-post-media">
                                <ItodoImage src="images/pmw.jpg" alt="" />
                            </div>
                            <div className="sx-post-info p-t30">
                                <div className="sx-post-meta ">
                                </div>
                                <div className="sx-post-title ">
                                    <h4 className="post-title"><NavLink to="https://www.academia.edu/52959967/PWM_inverter_based_on_Walsh_functions">PWM inverter based on Walsh functions</NavLink></h4>
                                </div>
                                <div className="sx-post-readmore">
                                    <NavLink to="https://www.academia.edu/52959967/PWM_inverter_based_on_Walsh_functions" title="READ MORE" rel="bookmark" className="site-button-link icon"><i className="fa  fa-long-arrow-right" />Read More</NavLink>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="widget-dev-line" />
                    <div className="widget-post-bx">
                        <div className="widget-post clearfix">
                            <div className="sx-post-media">
                                <ItodoImage src="images/heuristic.jpg" alt="" />
                            </div>
                            <div className="sx-post-info p-t30">
                                <div className="sx-post-title ">
                                    <h4 className="post-title"><NavLink to="https://www.academia.edu/52959966/Heuristic_linearization_of_external_characteristics_of_DC_DC_converters_using_fuzzy_control">Heuristic linearization of external characteristics of DC-DC converters using fuzzy control</NavLink></h4>
                                </div>
                                <div className="sx-post-readmore">
                                    <NavLink to="https://www.academia.edu/52959966/Heuristic_linearization_of_external_characteristics_of_DC_DC_converters_using_fuzzy_control" title="READ MORE" rel="bookmark" className="site-button-link icon"><i className="fa  fa-long-arrow-right" />Read More</NavLink>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default SectionLatestNews;