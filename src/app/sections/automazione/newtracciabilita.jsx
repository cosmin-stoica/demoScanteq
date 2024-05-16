const NewTracciabilita = () => {
    return (
        <>
            <div className="section-full wow fadeInLeft" data-wow-duration="1500ms">
                <h1 className="TitoloCapitolo">Tracciabilità</h1>
            </div>

            <div className="tracciabilita-div">
                <div className="tracciabilita-div-inner">
                    <i className="flaticon-smart-contracts"></i>
                    <p>
La piattaforma MASP (Mounting Assistance Software Platform) garantisce una tracciabilità completa delle operazioni durante il ciclo di lavoro. Il sistema registra tutte le informazioni fondamentali, assicurando una dettagliata tracciabilità di ogni fase del processo di lavorazione e collaudo.
                    </p>
                </div>
                <div className="tracciabilita-div-inner">
                    <i className="flaticon-cloud-computing"></i>
                    <p>Al termine di ogni ciclo, i dati vengono memorizzati in vari formati come file CSV, tabelle di database (MySQL o SQL Server), o inviati a sistemi MES (Manufacturing Execution System). È anche possibile stampare etichette su carta termica.
                    </p>
                </div>
            </div>

        </>
    );
};

export default NewTracciabilita;