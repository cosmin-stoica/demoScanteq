import { useState } from "react";
import CommessaDue from "../mes/commessadue";

const CommesseEsempio = () => {

    const [isDivAperto2, setDivAperto2] = useState(false);

    const apriChiudiDiv2 = () => {
        setDivAperto2(!isDivAperto2);
    };




    return (
        <>
            <div className={'section-full wow fadeInDown'} data-wow-duration="1500ms">
                <div className="tracctable-preview-upper width100 overflow-auto">
                    <table className='tracctable-preview overflow-auto'>
                        <thead>
                            <tr>
                                <th>Seleziona</th>
                                <th>Postazione</th>
                                <th>Codice</th>
                                <th>Componenti</th>
                                <th>Ausiliari</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td><input className='checkboxreal' type="checkbox" /></td>
                                <td>Postazione1</td>
                                <td>Codice1</td>
                                <td>A54+F43+GH1</td>
                                <td>AF1+BV4</td>
                            </tr>
                            <tr>
                                <td><input className='checkboxreal' type="checkbox" /></td>
                                <td>Postazione2</td>
                                <td>Codice2</td>
                                <td>B12+X89+LMN</td>
                                <td>K78+OPQ</td>
                            </tr>
                            <tr>
                                <td><input className='checkboxreal' type="checkbox" /></td>
                                <td>Postazione3</td>
                                <td>Codice3</td>
                                <td>C32+K78+OPQ</td>
                                <td>Y23+RST</td>
                            </tr>
                            <tr>
                                <td><input className='checkboxreal' type="checkbox" /></td>
                                <td>Postazione4</td>
                                <td>Codice4</td>
                                <td>D98+Y23+RST</td>
                                <td>Q87+DEF</td>
                            </tr>
                        </tbody>
                    </table>

                </div>
            </div>


            <div className={'section-full wow fadeInDown width100 perflex margin-top50'} data-wow-duration="1500ms">
                <div onClick={apriChiudiDiv2} className='creacommessa-btn'>
                    <h2>Crea Commessa</h2>
                </div>
                {isDivAperto2 && (
                    <div className='divAperto'>
                        <span onClick={apriChiudiDiv2} className='chiudiDiv'>
                            &times;
                        </span>
                        <CommessaDue></CommessaDue>
                    </div>
                )}
            </div>
        </>
    );
};

export default CommesseEsempio;