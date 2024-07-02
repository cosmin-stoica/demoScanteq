import { useTranslation } from 'react-i18next';
import NewHeaderTitle from '../../elements/newHeaderTitle';

const NewTracciabilita = () => {

    const { t } = useTranslation("masp_tracciabilita");

    const getIncrementalDescriptions = (variabile) => {
        let descriptions = [];
        let i = 1;
        let desc;

        while ((desc = t(`${variabile}${i}`)) && desc !== `${variabile}${i}`) {
            descriptions.push(desc);
            i++;
        }

        return descriptions;
    };

    const descriptions = getIncrementalDescriptions("desc_");

    return (
        <>

            <NewHeaderTitle
                title={t("header")}
                descList={descriptions}
                buttonText="Maggiori informazioni"
                imgSrc="assets/images/masp/tracciabilita/circolare.png"
                imgSrcRidimensionabile="assets/images/masp/tracciabilita/circolare.png"
                imgSrcRidimensionabileBackground="assets/images/masp/tracciabilita/circolarelogo.png"
            />

            {/*<div className='container'>
                <div className="tracciabilita-div">
                    <div className="tracciabilita-div-inner">

                        <i className="flaticon-smart-contracts"></i>
                        <p className='font-primary'>
                            {t("desc_1")}
                        </p>
                    </div>
                    <div className="tracciabilita-div-inner">
                        <i className="flaticon-cloud-computing"></i>
                        <p className='font-primary'>
                            {t("desc_2")}
                        </p>
                    </div>
                </div>
    </div>*/}

        </>
    );
};

export default NewTracciabilita;