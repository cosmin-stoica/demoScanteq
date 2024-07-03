
import CaratteristicheMASP from "./caratteristicheMasp";
import Title from "../../elements/title";
import { useTranslation } from 'react-i18next';
import MaspHomeCard from "../home/masp_homecard";

function HomeAutomazione({ titolo, carousel }) {

    const { t } = useTranslation();

    return (
        <>
            <div id="homeautomazionedivcolor" className="section-full p-t110 p-b80 sx-why-choose-outer sx-bg-light">
                <Title title={t("home.primo_piano.header")}></Title>
                {/*<MaspIntro></MaspIntro>*/}
                {/*<JobsHome></JobsHome>*/}
                <MaspHomeCard></MaspHomeCard>
                <div className="width100 perflex">
                    <div className="margin-top50 width80">
                        <CaratteristicheMASP></CaratteristicheMASP>
                    </div>
                </div>
            </div>
        </>
    )
}

export default HomeAutomazione;

