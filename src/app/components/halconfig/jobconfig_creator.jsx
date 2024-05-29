import { useState } from "react";

const JobConfigCreator = ({ array, job }) => {
    const initialState = array.reduce((acc, item) => {
        if (item.tipo === "boolean") {
            acc[item.nome] = '1';
        } else if (item.tipo === "intero") {
            acc[item.nome] = 0;
        } else if (item.tipo === "string") {
            acc[item.nome] = '';
        }
        return acc;
    }, {});

    const [formData, setFormData] = useState(initialState);

    const handleChange = (event, nome, tipo) => {
        const value = tipo === "boolean" ? event.target.value : tipo === "intero" ? parseInt(event.target.value, 10) : event.target.value;
        setFormData({
            ...formData,
            [nome]: value
        });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        
        const divisoreGrosso = ";=============================================";
        const jobHeader = "[JOB 1]";
        const iniContentArray = array.map(item => 
            item.tipo === "divisore" ? ';-----------------------------------------------------------' : `${item.nome}= ${formData[item.nome]}`
        );
        const iniContent = divisoreGrosso + "\n" + jobHeader + "\n" + divisoreGrosso + "\n" + iniContentArray.join('\n');
    
        console.log(iniContent);  // Controlla il contenuto qui
    
        const blob = new Blob([iniContent], { type: 'text/plain' });
        const url = URL.createObjectURL(blob);
    
        const a = document.createElement('a');
        a.href = url;
        a.download = `Job Config ${job}.ini`;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
    
        console.log(formData);
    };
    
    

    return (
        <div className="halconfigprova-div">
            <form onSubmit={handleSubmit}>
                {array.map(item => (
                    item.tipo !== "divisore" && (
                        <div key={item.nome}>
                            <label>
                                <div>
                                    {item.nome}:
                                </div>
                                {item.tipo === "boolean" ? (
                                    <select
                                        value={formData[item.nome]}
                                        onChange={(e) => handleChange(e, item.nome, item.tipo)}
                                    >
                                        <option value="1">Sì</option>
                                        <option value="0">No</option>
                                    </select>
                                ) : item.tipo === "intero" ? (
                                    <input
                                        type="number"
                                        min="0"
                                        value={formData[item.nome]}
                                        onChange={(e) => handleChange(e, item.nome, item.tipo)}
                                    />
                                ) : item.tipo === "string" ? (
                                    <input
                                        type="text"
                                        value={formData[item.nome]}
                                        onChange={(e) => handleChange(e, item.nome, item.tipo)}
                                    />
                                ) : null}
                            </label>
                            <div className="tooltipHalConfig">
                                <div className="iconHalConfig">i</div>
                                <div className="tooltiptextHalConfig">{item.tooltip}</div>
                            </div>
                        </div>
                    )
                ))}
                <div className="width100 perflex margin-top50">
                    <button className="creahal-btn" type="submit">Crea Hal</button>
                </div>
            </form>
        </div>
    );
};

export default JobConfigCreator;
