import { NavLink } from "react-router-dom";
import { useTranslation } from 'react-i18next';

const CaratteristicheMASP = () => {

    const { t } = useTranslation("masp_caratteristiche");

    return (<>
        <div className="section-full wow fadeInRight" data-wow-duration="2000ms">

        </div>
        <div className="div-header-job-card">

            <div className="section-full wow fadeInLeft" data-wow-duration="1000ms">
                <div className="header-job-card caratteristiche-card">
                    <div className="orange-circle">
                        <i className="header-job-card-icona flaticon-employee" />
                    </div>
                    <h1 >
                        {t("characteristics.peripheral_configuration_title")}
                    </h1>
                    <p>
                        {t("characteristics.peripheral_configuration_desc")}
                    </p>
                </div>
            </div>



            <div className="section-full wow fadeInLeft" data-wow-duration="1000ms">
                <div className="header-job-card caratteristiche-card">
                    <div className="orange-circle">
                        <i className="header-job-card-icona flaticon-support" />
                    </div>
                    <h1>
                        {t("characteristics.guided_conduct_title")}
                    </h1>
                    <p>
                        {t("characteristics.guided_conduct_desc")}
                    </p>
                </div>
            </div>

            <div className="section-full wow fadeInLeft" data-wow-duration="1000ms">
                <div className="header-job-card caratteristiche-card">
                    <div className="orange-circle">
                        <i className="header-job-card-icona flaticon-smart-contracts" />
                    </div>
                    <h1>
                        {t("characteristics.traceability_of_results_title")}
                    </h1>
                    <p>
                        {t("characteristics.traceability_of_results_desc")}
                    </p>
                    {/*<NavLink to="/supervisor" ><button id="seemoreUpgrade">{t("characteristics.traceability_of_results_button")}</button></NavLink>*/}
                </div>

            </div>

            <div className="section-full wow fadeInLeft" data-wow-duration="1000ms">
                <div className="header-job-card caratteristiche-card">
                    <div className="orange-circle">
                        <i className="header-job-card-icona flaticon-web-design" />
                    </div>
                    <h1>
                        {t("characteristics.customization_of_operations_title")}
                    </h1>
                    <p>
                        {t("characteristics.customization_of_operations_desc")}
                    </p>
                </div>
            </div>


            <div className="section-full wow fadeInLeft" data-wow-duration="1000ms">
                <div className="header-job-card caratteristiche-card">
                    <div className="orange-circle">
                        <i className="header-job-card-icona flaticon-development" />
                    </div>
                    <h1>
                        {t("characteristics.automation_of_procedures_title")}
                    </h1>
                    <p>
                        {t("characteristics.automation_of_procedures_desc")}
                    </p>
                </div>
            </div>


            <div className="section-full wow fadeInLeft" data-wow-duration="1000ms">
                <div className="header-job-card caratteristiche-card">
                    <div className="orange-circle">
                        <i className="header-job-card-icona flaticon-security" />
                    </div>
                    <h1>
                        {t("characteristics.operator_safety_title")}
                    </h1>
                    <p>
                        {t("characteristics.operator_safety_desc")}
                    </p>
                </div>
            </div>
        </div>
    </>
    );

};

export default CaratteristicheMASP;