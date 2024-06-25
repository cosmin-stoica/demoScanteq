import ItodoImage from "../../elements/itodo-img";
import { useTranslation } from 'react-i18next';

export function SectionWhyChooseUs2Inner() {

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
            <div className="row">
                <h1 className="TitoloCapitolo">{t('home.perche_sceglierci.header')}</h1>
                <div className="col-lg-6 col-md-12">
                    <div className="sx-about-bx4-media">
                        <div className="sx-ab4-img-outer">
                            <div className="sx-ab4-media">
                                <ItodoImage src="images/about/sceglierci.png" alt="media" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-6 col-md-12">
                    <div className="sx-about-bx3-content">
                        {descriptions.map((desc, index) => (
                            <p key={index}>{desc}</p>
                        ))}

                        <ul id="ulprodotto" className="sx-arrow-circle-checked">
                            {lista.map((data, index) => (
                                <li>{data.desc}</li>
                            ))}
                        </ul>
                        {/* <NavLink to="/why-choose-us" className="site-button sx-btn-primary icon sx-btn-lg">
                            <i className="fa  fa-long-arrow-right" />
                            Vedi tutto
    </NavLink> */}
                    </div>
                </div>
            </div>
        </>
    )
}

function SectionWhyChooseUs2() {
    return (
        <>
            <div id="perche" className="section-full  p-t110 p-b80 sx-bg-light sx-about-bx4-outer">
                <div className="container">
                    <div className="section-content">
                        <div className="sx-about-bx4-content-wrap p-b70">
                            <SectionWhyChooseUs2Inner />
                        </div>
                        {/*testimonial section */}
                    </div>
                </div>
            </div>
        </>
    )
}

export default SectionWhyChooseUs2;