
import { useTranslation } from 'react-i18next';

const ControlEsempi = () => {

    const { t } = useTranslation("supervisor");

    return (
        <>
            <div className="titolo-supervisor-preview width100 perflex margin-top50">
                {t("declaration.control_hub_example.title")}
            </div>
            <div className="postazioni-supervisorcomm-div-upper">

                <div
                    className={`postazionediv attivo`}
                >
                    <h5>{t("declaration.control_hub_example.station_1_name")}</h5>
                    <p>{t("declaration.control_hub_example.station_1_code")}</p>
                    <p>{t("declaration.control_hub_example.station_1_status")}</p>
                    <p>{t("declaration.control_hub_example.station_1_operator")}</p>
                    <p>{t("declaration.control_hub_example.station_1_operation")}</p>

                    <div>
                        <p className='analisipred' style={{ backgroundColor: 'green' }}>
                        {t("declaration.control_hub_example.station_1_analysis")}
                        </p>
                    </div>
                    <div>
                        <p className='analisipred'>&nbsp;</p>
                    </div>
                    <p>{t("declaration.control_hub_example.station_1_advancement")} {Math.floor(100 / 60)} min / {Math.floor(650 / 60)} min</p>
                    <div id={`progressBar${3}`} style={{ width: '100%', height: '100%' }}></div>


                </div>

                <div
                    className={`postazionediv iserrore`}
                >
                    <h5>{t("declaration.control_hub_example.station_2_name")}</h5>
                    <p>{t("declaration.control_hub_example.station_2_code")}</p>
                    <p>{t("declaration.control_hub_example.station_2_status")}</p>
                    <p>{t("declaration.control_hub_example.station_2_operator")}</p>
                    <p>{t("declaration.control_hub_example.station_2_operation")}</p>

                    <div>
                        <p className='analisipred' style={{ backgroundColor: 'red' }}>
                        {t("declaration.control_hub_example.station_2_analysis")}
                        </p>
                    </div>
                    <div>
                        <p className='analisipred'>&nbsp;</p>
                    </div>
                    <p>{t("declaration.control_hub_example.station_2_advancement")} {Math.floor(1000 / 60)} min / {Math.floor(650 / 60)} min</p>
                    <div id={`progressBar${3}`} style={{ width: '100%', height: '100%' }}></div>


                </div>

                <div
                    className={`postazionediv stopppee`}
                >
                     <h5>{t("declaration.control_hub_example.station_3_name")}</h5>
                    <p>{t("declaration.control_hub_example.station_3_code")}</p>
                    <p>{t("declaration.control_hub_example.station_3_status")}</p>
                    <p>{t("declaration.control_hub_example.station_3_operator")}</p>
                    <p>{t("declaration.control_hub_example.station_3_operation")}</p>

                    <div>
                        <p className='analisipred'>&nbsp;</p>
                    </div>
                    <p>{t("declaration.control_hub_example.station_3_advancement")} {Math.floor(1000 / 60)} min / {Math.floor(650 / 60)} min</p>
                    <div id={`progressBar${3}`} style={{ width: '100%', height: '100%' }}></div>


                </div>

            </div>
        </>
    );
};

export default ControlEsempi;