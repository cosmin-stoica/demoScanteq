const LavorazioniEsempio = () => {
    return (
        <>
            <div className="tracctable-preview-upper width100 overflow-auto">
                <table className='tracctable-preview overflow-auto'>
                    <thead>
                        <tr>
                            <th>Seleziona</th>
                            <th>Postazione</th>
                            <th>Commessa</th>
                            <th>Data</th>
                        </tr>
                    </thead>
                    <tbody>
            <tr>
                <td><input className='checkboxreal' type="checkbox" /></td>
                <td>Postazione 1</td>
                <td>Commessa 1</td>
                <td>2024-01-02 09:40:07</td>
            </tr>
            <tr>
                <td><input className='checkboxreal' type="checkbox" /></td>
                <td>Postazione 2</td>
                <td>Commessa 2</td>
                <td>2024-01-02 09:07:35</td>
            </tr>
            <tr>
                <td><input className='checkboxreal' type="checkbox" /></td>
                <td>Postazione 3</td>
                <td>Commessa 3</td>
                <td>2024-01-02 09:08:06</td>
            </tr>
            <tr>
                <td><input className='checkboxreal' type="checkbox" /></td>
                <td>Postazione 4</td>
                <td>Commessa 4</td>
                <td>2024-01-02 09:08:15</td>
            </tr>
        </tbody>
                </table>
            </div>
        </>
    );
};

export default LavorazioniEsempio;