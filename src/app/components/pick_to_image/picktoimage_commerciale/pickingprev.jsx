import React from "react";
import PickingHome from "./pickinghome";
import ItodoImage from "../../../elements/itodo-img";
import { useState } from "react";
import { useEffect } from "react";


function PickingPev() {
    const [shrinkImage, setShrinkImage] = useState(false);
    const [shrinkImageSecond, setShrinkImageSecond] = useState(false);

    const [isStart, setIsStart] = useState(true);
    
    useEffect(() => {
        const timer = setTimeout(() => {
            setShrinkImage(true);
        }, 1000); // Set timer for 1 second

        return () => clearTimeout(timer); // Clean up the timer on component unmount
    }, []);

    useEffect(() => {
        const timer = setTimeout(() => {
            setShrinkImageSecond(true);
        }, 1000); // Set timer for 1 second

        return () => clearTimeout(timer); // Clean up the timer on component unmount
    }, []);




    useEffect(() => {
        const timer = setTimeout(() => {
            setIsStart(false);
        }, 3000); // Set timer for 1 second

        return () => clearTimeout(timer); // Clean up the timer on component unmount
    }, []);


    return (
        <>
            <div className="pickingprevdiv">
                
                {isStart && <div className="PreviewPick">
                    <div className="squarepick">
                    <div className={`logoroundimg-container ${shrinkImageSecond ? "shrink" : ""}`}>
                        <ItodoImage className={`logoroundimg ${shrinkImage ? "shrink" : ""}`} src="images/prodottiprimo/logoround.png"></ItodoImage>
                    </div>
                    </div>
                </div>}
                {!isStart && <PickingHome></PickingHome>              
                }
            </div>
        </>
    );
}

export default PickingPev;