import { NavLink } from "react-router-dom";

function SectionCategories() {
    return (
        <>
            <div className="widget widget_services ">
                <h4 className="widget-title">Categories</h4>
                <ul className="bg-white">
                    <li><NavLink to="/portfolio/detail">Headphone<span> (05)</span></NavLink></li>
                    <li><NavLink to="/portfolio/detail">Gamer Mouse<span> (04)</span></NavLink></li>
                    <li><NavLink to="/portfolio/detail">Eye testing lance<span> (02)</span></NavLink></li>
                    <li><NavLink to="/portfolio/detail">USB Pendrive<span> (08)</span></NavLink></li>
                    <li><NavLink to="/portfolio/detail">Quality Mouse<span> (04)</span></NavLink></li>
                    <li><NavLink to="/portfolio/detail">Manufacturing<span> (01)</span></NavLink></li>
                </ul>
            </div>
        </>
    )
}
export default SectionCategories;