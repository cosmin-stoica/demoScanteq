import CarouselJobs from "./carouseljobs";
import JobsHome from "./jobshome";
import MaspIntro from "./maspintro";

function HomeAutomazione({titolo,carousel}) {
    return (
        <>
            <div id="homeautomazionedivcolor" className="section-full p-t110 p-b80 sx-why-choose-outer sx-bg-light">
                {titolo && <div className="section-head center">
                    <h1 className="TitoloCapitolo">Prodotti in primo piano</h1>
                </div>}
                {<MaspIntro></MaspIntro>}
                <JobsHome></JobsHome>
                {carousel && <CarouselJobs></CarouselJobs>}
            </div>
        </>
    )
}

export default HomeAutomazione;

