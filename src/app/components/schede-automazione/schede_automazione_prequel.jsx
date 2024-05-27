import ItodoImage from "../../elements/itodo-img";
import prequelData from "../../../globals/DataTEXT/Hardware/Schede_Automazione/prequelData";

const SchedeAutomazionePrequel = () => {

    return (
        <>


            <div className="schede-automazione-prequel margin-top100">

                {prequelData.map((data,index) => (
                     <div className="section-full wow fadeInRight" data-wow-delay={data.delay} data-wow-duration="1500ms">
                     <div className="schede-automazione-prequel-div" >
                         <ItodoImage src={data.imgSrc}></ItodoImage>
                         <p>{data.descrizione}</p>
                     </div>
                 </div>
                ))}
            </div>
        </>
    );

};

export default SchedeAutomazionePrequel;
