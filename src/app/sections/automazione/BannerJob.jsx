import React from "react";
import ItodoImage from "../../elements/itodo-img";

function BannerJob({ img, icon, title, primoP, secondoP }) {

    return (
        <>
            <div className="BannerJob margin-top100" >

                <div className="titolobannerjob">
                    {title}
                </div>
                <p className="primopbanner">
                    {primoP}
                </p>
                {/*<ItodoImage className="immaginegrossaJob" src={img} alt=""></ItodoImage>*/}
                <p className="secondopbanner">
                    {secondoP}
                </p>

             
                <ItodoImage className="bannerjobicon" src={icon}></ItodoImage>

            </div>
        </>
    )
}
export default BannerJob;