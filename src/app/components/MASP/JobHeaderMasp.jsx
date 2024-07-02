
import { useTranslation } from 'react-i18next';
import Title from "../../elements/title";
import NewHeaderTitle from '../../elements/newHeaderTitle';

const JobHeaderMasp = () => {

    const { t } = useTranslation("masp_operazioni");

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

    const descriptions = getIncrementalDescriptions("header.title_");

    return (<>


        <NewHeaderTitle
            title={t("header.header")}
            descList={descriptions}
            buttonText="Maggiori informazioni"
            imgSrc="assets/images/masp/robot.png"
            imgSrcRidimensionabile="/assets/images/masp/robot.png"
            imgSrcRidimensionabileBackground="/assets/images/masp/robotlogo.png"
        />

        {/*<Title title={t("header.header")}></Title>
        {/*<div className="section-full wow fadeInRight" data-wow-duration="2000ms">
            <h1 className="TitoloCapitolo">{t("header.header")}</h1>
        </div>*
        <div className="container">
            <div className="desccond">
                {descriptions.map((desc, index) => (
                    <p key={index}>{desc}</p>
                ))}
            </div>*/}
        <div className="width100 perflex">
            <div className="div-header-job-card width90 margin-top100">

                <div className="section-full wow fadeInLeft" data-wow-duration="1000ms">
                    <div className="header-job-card">
                        <div className='orange-circle'>
                            <i className="header-job-card-icona flaticon-development" />
                        </div>
                        <h1>
                            {t("header.automation_and_assembly_title")}
                        </h1>
                        <p>
                            {t("header.automation_and_assembly_desc")}
                        </p>
                    </div>
                </div>

                <div className="section-full wow fadeInLeft" data-wow-duration="1000ms">
                    <div className="header-job-card">
                        <div className='orange-circle'>
                            <i className="header-job-card-icona flaticon-skills" />
                        </div>
                        <h1>
                            {t("header.automotive_component_testing_title")}
                        </h1>
                        <p>
                            {t("header.automotive_component_testing_desc")}
                        </p>
                    </div>
                </div>

                <div className="section-full wow fadeInLeft" data-wow-duration="1000ms">
                    <div className="header-job-card">
                        <div className='orange-circle'>
                            <i className="header-job-card-icona flaticon-data" />
                        </div>
                        <h1>
                            {t("header.quality_control_and_verification_title")}
                        </h1>
                        <p>
                            {t("header.quality_control_and_verification_desc")}
                        </p>
                    </div>

                </div>

                <div className="section-full wow fadeInLeft" data-wow-duration="1000ms">
                    <div className="header-job-card">
                        <div className='orange-circle'>
                            <i className="header-job-card-icona flaticon-supply-chain" />
                        </div>
                        <h1>
                            {t("header.production_and_logistics_management_title")}
                        </h1>
                        <p>
                            {t("header.production_and_logistics_management_desc")}
                        </p>
                    </div>
                </div>

                <div className="section-full wow fadeInLeft" data-wow-duration="1000ms">
                    <div className="header-job-card">
                        <div className='orange-circle'>
                            <i className="header-job-card-icona flaticon-employee" />
                        </div>
                        <h1>
                            {t("header.station_and_procedure_management_title")}
                        </h1>
                        <p>
                            {t("header.station_and_procedure_management_desc")}
                        </p>
                    </div>
                </div>

                <div className="section-full wow fadeInLeft" data-wow-duration="1000ms">
                    <div className="header-job-card">
                        <div className='orange-circle'>
                            <i className="header-job-card-icona flaticon-touch" />
                        </div>
                        <h1>
                            {t("header.electronic_control_unit_for_automotive_title")}
                        </h1>
                        <p>
                            {t("header.electronic_control_unit_for_automotive_desc")}
                        </p>
                    </div>
                </div>
            </div>
        </div >
    </>
    );

};

export default JobHeaderMasp;