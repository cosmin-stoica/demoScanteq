import ItodoImage from "../../elements/itodo-img";
import { useTranslation } from 'react-i18next';
import Title from "../../elements/title";

const PercheSceglierciNew = () => {

    const { t } = useTranslation();
    const lista = t('home.perche_sceglierci.lista', { returnObjects: true });

    if (Array.isArray(lista) && lista !== null) {
        lista.forEach(item => {
            console.log(item);
        });
    } else {
        console.error('La lista non è disponibile o non è un array.');
    }

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

    const descriptions = getIncrementalDescriptions("home.perche_sceglierci.desc_");

    return (
        <>
            <Title title={t('home.perche_sceglierci.header')} addClass="margin-top100"></Title>
            <div className="perche-sceglierci-div">
                {/*<div className="perche-sceglierci-div-imgdiv">
                <ItodoImage className="perche-sceglierci-div-img equal-height" src="images/about/sceglierci.jpg"></ItodoImage>
                </div>*/}
                <div className="demo-sceglierci">
                    <div className="demo-sceglierci-inner">
                    </div>
                </div>
                <div className="col-lg-6 col-md-12 perche-sceglierci-div-text equal-height">
                    <div className="sx-about-bx3-content">
                        {descriptions.map((desc, index) => (
                            <p key={index}>{desc}</p>
                        ))}

                        {Array.isArray(lista) && lista !== null && (
                            <ul id="ulprodotto" className="sx-arrow-circle-checked">
                                {lista.map((data, index) => (
                                    <li key={index}>{data.desc}</li>
                                ))}
                            </ul>
                        )}
                        {/* <NavLink to="/why-choose-us" className="site-button sx-btn-primary icon sx-btn-lg">
                            <i className="fa  fa-long-arrow-right" />
                            Vedi tutto
                        </NavLink> */}
                    </div>
                </div>
            </div>
        </>
    );
};

export default PercheSceglierciNew;
