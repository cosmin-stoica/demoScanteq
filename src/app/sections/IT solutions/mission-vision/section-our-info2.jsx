import ItodoImage from "../../../elements/itodo-img";

import { useTranslation } from 'react-i18next';

function SectionOurInfo2() {

    const { t } = useTranslation("vision");

    return (
        <>
            <div className="section-full p-t110 p-b80 sx-bg-light sx-our-info-outer ">
                <div className="container">
                    <div className="section-content">
                        <div className="row sx-our-info-content-wrap">
                            {/*One block*/}
                            <div className="col-lg-4 col-md-4">
                                <div className="sx-our-info-content">
                                    <ul>
                                        <li>
                                            <div className="sx-our-info-content-list left">
                                                <span className="sx-sub-title">{t("list.area_of_interest_title")}</span>
                                                <h3 className="sx-bx-title">{t("list.area_of_interest_desc")}</h3>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="sx-our-info-content-list left">
                                                <span className="sx-sub-title">{t("list.automation_1_title")}</span>
                                                <h3 className="sx-bx-title">{t("list.automation_1_desc")}</h3>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="sx-our-info-content-list left">
                                                <span className="sx-sub-title">{t("list.automation_2_title")}</span>
                                                <h3 className="sx-bx-title">{t("list.automation_2_desc")}</h3>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            {/*One two*/}
                            <div className="col-lg-4 col-md-4">
                                <div className="sx-our-info-media-wrap">
                                    <div className="sx-our-info-media">
                                        <ItodoImage src="images/our-info.jpg" alt="image" />
                                    </div>
                                </div>
                            </div>
                            {/*One three*/}
                            <div className="col-lg-4 col-md-4">
                                <div className="sx-our-info-content">
                                    <ul>
                                    <li>
                                            <div className="sx-our-info-content-list right">
                                                <span className="sx-sub-title">{t("list.experience_title")}</span>
                                                <h3 className="sx-bx-title">{t("list.experience_desc")}</h3>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="sx-our-info-content-list right">
                                                <span className="sx-sub-title">{t("list.contacts_title")}</span>
                                                <h3 className="sx-bx-title">
                                                {t("list.contacts_desc")}
                                                </h3>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="sx-our-info-content-list right">
                                                <span className="sx-sub-title">{t("list.location_title")}</span>
                                                <h3 className="sx-bx-title">{t("list.location_desc")}</h3>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default SectionOurInfo2;