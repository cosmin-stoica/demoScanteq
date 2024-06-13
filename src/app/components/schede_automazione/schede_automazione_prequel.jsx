import ItodoImage from "../../elements/itodo-img";
import { useTranslation } from 'react-i18next';

const SchedeAutomazionePrequel = () => {

    const { t } = useTranslation("schede_automazione");
    const prequelData = t('prequel.data', { returnObjects: true });

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
