import { useState } from "react";
import { useTranslation } from 'react-i18next';

const InfoEsempio = () => {

    const { t } = useTranslation("mes");

    const [isDivAperto, setDivAperto] = useState(false);
    const [selectedImmagine, setselectedImmagine] = useState('');
    const [selectedCodice, setselectedCodice] = useState('');
    const [selectedDescrizione, setselectedDescrizione] = useState('');

    const apriChiudiDiv = () => {
        setDivAperto(!isDivAperto);
    };


    const handleVisualizza = (immagine, codice, descrizione) => {
        apriChiudiDiv();
        setselectedImmagine(immagine);
        setselectedCodice(codice);
        setselectedDescrizione(descrizione);
    }

    return (
        <>
            <div className={'section-full wow fadeInDown'} data-wow-duration="1500ms">
                <div className="tracctable-preview-upper width100 overflow-auto">
                    <table className='tracctable-preview overflow-auto'>
                        <thead>
                            <tr>
                                <th>{t("declaration.components_example.select_column_title")}</th>
                                <th>{t("declaration.components_example.code_column_title")}</th>
                                <th>{t("declaration.components_example.description_column_title")}</th>
                                <th>{t("declaration.components_example.visualize_column_title")}</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td><input className='checkboxreal' type="checkbox" /></td>
                                <td>GT2</td>
                                <td>Descrizione...</td>
                                <td><button className='visualizzabutton' onClick={() => handleVisualizza("/assets/images/mes/volante.png", "GT2", "Descrizione...")}>Visualizza</button></td>
                            </tr>
                            <tr>
                                <td><input className='checkboxreal' type="checkbox" /></td>
                                <td>HG3</td>
                                <td>Descrizione...</td>
                                <td><button className='visualizzabutton' onClick={() => handleVisualizza("/assets/images/mes/motore.png", "HG3", "Descrizione...")}>Visualizza</button></td>
                            </tr>
                            <tr>
                                <td><input className='checkboxreal' type="checkbox" /></td>
                                <td>PT6</td>
                                <td>Descrizione...</td>
                                <td><button className='visualizzabutton' onClick={() => handleVisualizza("/assets/images/mes/cintura.png", "PT6", "Descrizione...")}>Visualizza</button></td>
                            </tr>
                            <tr>
                                <td><input className='checkboxreal' type="checkbox" /></td>
                                <td>RV2</td>
                                <td>Descrizione....</td>
                                <td><button className='visualizzabutton' onClick={() => handleVisualizza("/assets/images/mes/ingranaggio.png", "RV2", "Descrizione...")}>Visualizza</button></td>
                            </tr>
                        </tbody>
                    </table>

                </div>
            </div>

            {isDivAperto && (
                <div className='divApertoComponenti'>
                    <span onClick={apriChiudiDiv} className='chiudiDiv'>
                        &times;
                    </span>
                    <div className='infocomponentediv'>
                        <p className='componentetitolo'>{selectedCodice}</p>
                        <p className='componentedescrizione'>{selectedDescrizione}</p>
                        <div className="width100 perflex">
                            <img className='img-componente-demo' src={selectedImmagine}></img>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default InfoEsempio;