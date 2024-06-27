import ItodoImage from "../../elements/itodo-img";
import { useTranslation } from 'react-i18next';

const ServiziCard = () => {

    const { t } = useTranslation("servizi");

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

    const descriptionsFirst = getIncrementalDescriptions("first_container.desc_");
    const descriptionsSecond = getIncrementalDescriptions("second_container.desc_");
    const descriptionsThird = getIncrementalDescriptions("third_container.desc_");

    return (
        <>
            <div className="section-full p-t110 p-b80 sx-why-chooseus-outer sx-bg-light bg-white">
                <div className="container">
                    {/* TITLE START */}
                    <div className="section-head center">
                        <h1 className="TitoloCapitolo">{t("header")}</h1>
                    </div>

                    <div className="servizio-card-upper">
                        <div className="servizio-card">
                            <ItodoImage className="circuitcard" src="images/circuit.png" alt="circuit"></ItodoImage>
                            <ItodoImage className="servizio-card-img" src="images/servizi/projectt.png" alt="servizio-img"></ItodoImage>
                            <div className="servizio-card-secondaparte">
                                <div className="servizio-card-title">{t("first_container.header")}</div>
                                {descriptionsFirst.map((desc, index) => (
                                    <p className="font-primary" key={index}>{desc}</p>
                                ))}


                            </div>

                        </div>
                        <div className="servizio-card-lista">
                            <div className="servizio-card-lista-lowerdiv">
                                <i className="flaticon-profit primolista font-primary" />
                                <div className="servizio-card-lista-lowerdiv-title font-primary">{t("first_container.box_title_1")}</div>
                                <ul>
                                    <li className="font-primary">{t("first_container.box_desc_1.list_1")}</li>
                                    <li className="font-primary">{t("first_container.box_desc_1.list_2")}</li>
                                    <li className="font-primary">{t("first_container.box_desc_1.list_3")}</li>
                                </ul>
                            </div>

                            <div className="servizio-card-lista-lowerdiv">
                                <i className="flaticon-engineer primolista" />
                                <div className="font-primary servizio-card-lista-lowerdiv-title">{t("first_container.box_title_2")}</div>
                                <ul>
                                    <li>{t("first_container.box_desc_2.list_1")}</li>
                                    <li>{t("first_container.box_desc_2.list_2")}</li>
                                    <li>{t("first_container.box_desc_2.list_3")}</li>
                                </ul>
                            </div>
                        </div>
                    </div>


                    <div className="margin-top100 servizio-card-upper">
                        <div className="servizio-card">
                            <ItodoImage className="circuitcard" src="images/circuit.png" alt="circuit"></ItodoImage>

                            <ItodoImage className="servizio-card-img" src="images/servizi/hardware.png" alt="servizio-img"></ItodoImage>
                            <div className="servizio-card-secondaparte">
                                <div className="servizio-card-title">
                                    {t("second_container.header")}
                                </div>
                                {descriptionsSecond.map((desc, index) => (
                                    <p className="font-primary" key={index}>{desc}</p>
                                ))}



                            </div>

                        </div>

                        <div className="servizio-card-lista">
                            <div className="servizio-card-lista-lowerdiv">
                                <i className="flaticon-physics secondalista" />
                                <div className="servizio-card-lista-lowerdiv-title font-primary">{t("second_container.list_1")}</div>
                            </div>
                            <div className="servizio-card-lista-lowerdiv">
                                <i className="flaticon-physics secondalista" />
                                <div className="servizio-card-lista-lowerdiv-title font-primary">{t("second_container.list_2")}</div>
                            </div>
                            <div className="servizio-card-lista-lowerdiv">
                                <i className="flaticon-physics secondalista" />
                                <div className="servizio-card-lista-lowerdiv-title font-primary ">{t("second_container.list_3")}</div>
                            </div>
                            <div className="servizio-card-lista-lowerdiv">
                                <i className="flaticon-physics secondalista" />
                                <div className="servizio-card-lista-lowerdiv-title font-primary">{t("second_container.list_4")}</div>
                            </div>
                            <div className="servizio-card-lista-lowerdiv">
                                <i className="flaticon-physics secondalista" />
                                <div className="servizio-card-lista-lowerdiv-title font-primary">{t("second_container.list_5")}</div>
                            </div>


                        </div>
                    </div>

                    <div className="margin-top100 servizio-card-upper">
                        <div className="servizio-card">
                            {/*<ItodoImage className="circuitcard" src="images/circuit.png" alt="circuit"></ItodoImage>*/}

                            <ItodoImage className="servizio-card-img" src="images/servizi/software.png" alt="servizio-img"></ItodoImage>
                            <div className="servizio-card-secondaparte">
                                <div className="servizio-card-title font-primary">
                                    {t("third_container.header")}
                                </div>
                                {descriptionsThird.map((desc, index) => (
                                    <p className="font-primary" key={index}>{desc}</p>
                                ))}


                            </div>

                        </div>


                    </div>

                </div>









            </div>
        </>
    );
};

export default ServiziCard;