import { NavLink } from "react-router-dom";
import React, { useEffect } from 'react';
import Banner from "../../sections/common/banner";
import { bannerData } from "../../../globals/banner";
import TracciaUno from "./tracciauno";
import TracciaDue from "./tracciadue";
import TracciaTre from "./tracciatre";
import TracciaQuattro from "./tracciaquattro";

function TracciaHome() {
    return (
        <>
         <Banner _data={bannerData.tracciabilita} />
        <div className="tracciahomepane">
            {/*<TracciaUno></TracciaUno>}*/}
            <TracciaDue></TracciaDue>
            <TracciaTre></TracciaTre>
            <TracciaQuattro></TracciaQuattro>
        </div>
        </>
    );
}

export default TracciaHome;