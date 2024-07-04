import ItodoImage from "../../elements/itodo-img";
import { useTranslation } from 'react-i18next';

    const CarsBanner = () => {

        const {t} = useTranslation("chi_siamo");

        const getIncrementalDescriptions = () => {
            let descriptions = [];
            let i = 1;
            let desc;
    
            while ((desc = t(`cars.desc_${i}`)) && desc !== `cars.desc_${i}`) {
                descriptions.push(desc);
                i++;
            }
    
            return descriptions;
        };
    
        const descriptions = getIncrementalDescriptions();


        return (
            <>
                <div className="cars-banner">
                    <ItodoImage src="/images/about/cars.png"></ItodoImage>
                    <div className="cars-banner-content">
                        <div className="cars-banner-title">
                            {t("cars.title")}
                        </div>
                        <div className="cars-banner-text">
                            {descriptions && descriptions.map((desc,index) => (
                                <p key={index}>{desc}</p>
                            ))}
                        </div>
                    </div>
                </div>
            </>
        );
    };

    export default CarsBanner;