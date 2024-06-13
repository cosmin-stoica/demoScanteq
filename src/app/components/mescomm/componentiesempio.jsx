import { useState } from "react";
import { useTranslation } from 'react-i18next';

const ComponentiEsempio = () => {

    const { t } = useTranslation("mes");

    const [isDivAperto, setDivAperto] = useState(false);
    const [selectedImmagine,setselectedImmagine] = useState('');
    const [selectedCodice,setselectedCodice] = useState('');
    const [selectedDescrizione,setselectedDescrizione] = useState('');

    const apriChiudiDiv = () => {
        setDivAperto(!isDivAperto);
      };

      
    const handleVisualizza = (immagine,codice,descrizione) => {
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
                                <td>TS4</td>
                                <td>Descrizione...</td>
                                <td><button className='visualizzabutton' onClick={() => handleVisualizza("/assets/images/mes/volante.png", "TS4", "Descrizione...")}>Visualizza</button></td>
                            </tr>
                            <tr>
                                <td><input className='checkboxreal' type="checkbox" /></td>
                                <td>GT3</td>
                                <td>Descrizione...</td>
                                <td><button className='visualizzabutton' onClick={() => handleVisualizza("/assets/images/mes/motore.png","GT3", "Descrizione...")}>Visualizza</button></td>
                            </tr>
                            <tr>
                                <td><input className='checkboxreal' type="checkbox" /></td>
                                <td>R54</td>
                                <td>Descrizione...</td>
                                <td><button className='visualizzabutton' onClick={() => handleVisualizza("/assets/images/mes/cintura.png", "R54", "Descrizione...")}>Visualizza</button></td>
                            </tr>
                            <tr>
                                <td><input className='checkboxreal' type="checkbox" /></td>
                                <td>PT4</td>
                                <td>Descrizione....</td>
                                <td><button className='visualizzabutton' onClick={() => handleVisualizza("/assets/images/mes/ingranaggio.png", "PT4", "Descrizione...")}>Visualizza</button></td>
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

export default ComponentiEsempio;