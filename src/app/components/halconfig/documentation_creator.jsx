import React, { useState } from 'react';
import { Document, Packer, Paragraph, Table, TableCell, TableRow, TextRun, WidthType, ShadingType, AlignmentType, ImageRun, BorderStyle } from 'docx';
import { saveAs } from 'file-saver';
import ConfermaAction from '../global/confermaAction';

const DocumentationCreator = ({ halArrays, className }) => {
    const [visible, setVisible] = useState(false);

    const AvviaCreazione = () => {
        setVisible(true);
    }

    const createDocument = async () => {
        const arrayWithTitles = Object.entries(halArrays);

        const elementsPromises = arrayWithTitles.map(async ([title, doc], index) => {
            // Preload the image
            let imageData;
            try {
                const response = await fetch(doc.img_src);
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                imageData = await response.blob();
                console.log(imageData);
            } catch (error) {
                console.error("Error loading image:", error);
                return [];
            }

            let DiagnosticaimageData;
            let originalWidth, originalHeight;
            if (doc.diagnostica_img_src.length !== 0) {
                try {
                    const response = await fetch(doc.diagnostica_img_src);
                    if (!response.ok) {
                        throw new Error('Network response was not ok');
                    }
                    DiagnosticaimageData = await response.blob();

                    const image = new Image();
                    const imageLoadPromise = new Promise((resolve, reject) => {
                        image.onload = () => {
                            originalWidth = image.width;
                            originalHeight = image.height;
                            resolve();
                        };
                        image.onerror = (e) => {
                            reject(new Error('Error loading image.'));
                        };
                    });
                    image.src = URL.createObjectURL(DiagnosticaimageData);
                    await imageLoadPromise;
                    console.log('Image loaded:', DiagnosticaimageData);
                } catch (error) {
                    console.error("Error loading image:", error);
                    return [];
                }
            }
            const desiredWidth = 500;
            const calculatedHeight = (originalHeight / originalWidth) * desiredWidth;

            const arrayHal = doc.data_hal;
            const arrayJob = doc.data_job;
            let arrayAvvitatureProgrammi;

            if (doc.title === "Avvitatura") {
                arrayAvvitatureProgrammi = doc.programmi;
            }

            const createRows = (array) => {
                return array.map(item => {
                    return new TableRow({
                        children: [
                            new TableCell({
                                children: [new Paragraph({
                                    children: [new TextRun({ text: item.nome, size: 18, font: "Arial" })]
                                })],
                                width: { size: 33.33, type: WidthType.PERCENTAGE },
                                margins: { top: 100, bottom: 100 }
                            }),
                            new TableCell({
                                children: [new Paragraph({
                                    children: [new TextRun({ text: item.tipo, size: 18, font: "Arial" })]
                                })],
                                width: { size: 33.33, type: WidthType.PERCENTAGE },
                                margins: { top: 100, bottom: 100 }
                            }),
                            new TableCell({
                                children: [new Paragraph({
                                    children: [new TextRun({ text: item.tooltip, size: 18, font: "Arial" })]
                                })],
                                width: { size: 33.33, type: WidthType.PERCENTAGE },
                                margins: { top: 100, bottom: 100 }
                            }),
                        ],
                    });
                });
            };

            const createTable = (rows) => {
                const headerRow = new TableRow({
                    children: [
                        new TableCell({
                            children: [new Paragraph({
                                children: [new TextRun({ text: "Nome", color: "383838", bold: true, size: 24, font: "Arial" })]
                            })],
                            width: { size: 33.33, type: WidthType.PERCENTAGE },
                            shading: { fill: "FFFFFF", type: ShadingType.CLEAR },
                            margins: { top: 200, bottom: 200 }
                        }),
                        new TableCell({
                            children: [new Paragraph({
                                children: [new TextRun({ text: "Tipo", color: "383838", bold: true, size: 24, font: "Arial" })]
                            })],
                            width: { size: 33.33, type: WidthType.PERCENTAGE },
                            shading: { fill: "FFFFFF", type: ShadingType.CLEAR },
                            margins: { top: 200, bottom: 200 }
                        }),
                        new TableCell({
                            children: [new Paragraph({
                                children: [new TextRun({ text: "Tooltip", color: "383838", bold: true, size: 24, font: "Arial" })]
                            })],
                            width: { size: 33.33, type: WidthType.PERCENTAGE },
                            shading: { fill: "FFFFFF", type: ShadingType.CLEAR },
                            margins: { top: 200, bottom: 200 }
                        }),
                    ],
                });

                return new Table({
                    width: { size: 100, type: WidthType.PERCENTAGE },
                    rows: [
                        headerRow,
                        ...rows,
                    ],
                });
            };

            const halRows = createRows(arrayHal);
            const jobRows = createRows(arrayJob);

            let arrayAvvitatureProgrammiRow;

            if (doc.title === "Avvitatura") {
                arrayAvvitatureProgrammiRow = createRows(arrayAvvitatureProgrammi);
            }


            const splitTextIntoParagraphs = (text) => {
                // Funzione per identificare se una parola è un'abbreviazione che termina con "ini"
                const isAbbreviation = (word) => {
                    return /\b\w+ini\b/.test(word);
                };

                // Rimuovi i newline e normalizza gli spazi
                let singleLineText = text.replace(/\n/g, ' ');
                let normalizedText = singleLineText.replace(/\s+/g, ' ');

                // Suddividi il testo in parole per gestire le abbreviazioni
                const words = normalizedText.split(' ');
                let sentence = '';
                const sentences = [];

                words.forEach((word, index) => {
                    if (isAbbreviation(word)) {
                        sentence += word + ' ';
                    } else {
                        if (/[.!?]$/.test(word)) {
                            sentence += word;
                            sentences.push(sentence.trim());
                            sentence = '';
                        } else {
                            sentence += word + ' ';
                        }
                    }
                });

                if (sentence.trim().length > 0) {
                    sentences.push(sentence.trim());
                }

                // Mappa le frasi in paragrafi, aggiungendo una riga vuota tra di esse
                const paragraphs = [];
                sentences.forEach((sentence, index) => {
                    paragraphs.push(new Paragraph({
                        children: [new TextRun({ text: sentence, size: 20, font: "Arial" })]
                    }));
                    // Aggiungi un paragrafo vuoto dopo ogni frase tranne l'ultima
                    if (index < sentences.length - 1) {
                        paragraphs.push(new Paragraph({ children: [] }));
                    }
                });

                return paragraphs;
            };

            const splitTextIntoParagraphsEsempioJob = (text) => {
                if (!text) {
                    return [];
                }

                const lines = text.split('\n');
                const paragraphs = lines.map(line => new Paragraph({
                    children: [new TextRun({ text: line.trim(), size: 16, font: "Arial" })]
                }));

                const table = new Table({
                    width: { size: 100, type: WidthType.PERCENTAGE },
                    rows: [
                        new TableRow({
                            children: [
                                new TableCell({
                                    children: paragraphs,
                                    borders: {
                                        top: { style: BorderStyle.SINGLE, size: 1, color: "000000" },
                                        bottom: { style: BorderStyle.SINGLE, size: 1, color: "000000" },
                                        left: { style: BorderStyle.SINGLE, size: 1, color: "000000" },
                                        right: { style: BorderStyle.SINGLE, size: 1, color: "000000" },
                                    },
                                    margins: {
                                        top: 100, // Aggiungi 100 "twip" (1/20 di punto tipografico) di margine superiore
                                        bottom: 100, // Aggiungi 100 "twip" di margine inferiore
                                        left: 100, // Aggiungi 100 "twip" di margine sinistro
                                        right: 100, // Aggiungi 100 "twip" di margine destro
                                    }
                                })
                            ]
                        })
                    ]
                });

                return [table];
            };

            const paragraphs = [
                new Paragraph({
                    alignment: AlignmentType.CENTER,
                    spacing: { after: 200 },
                    children: [
                        new TextRun({
                            text: `Prova ${doc.title}`,
                            bold: false,
                            size: 48,
                            color: "000000",
                            font: "Arial"
                        })
                    ]
                }),
                ...splitTextIntoParagraphs(doc.text),
                new Paragraph({
                    alignment: AlignmentType.CENTER,
                    spacing: { before: 500, after: 10 },
                    children: [
                        new ImageRun({
                            data: imageData,
                            transformation: {
                                width: 600,
                                height: 400
                            }
                        })
                    ]
                }),
                new Paragraph({
                    alignment: AlignmentType.CENTER,
                    spacing: { after: 500 },
                    children: [
                        new TextRun({
                            text: `Esempio di videata durante il job: ${doc.title}`,
                            bold: false,
                            size: 20,
                            color: "383838",
                            font: "Arial"
                        })
                    ]
                }),
                new Paragraph({
                    alignment: AlignmentType.CENTER,
                    spacing: { before: 200, after: 200 },
                    children: [
                        new TextRun({
                            text: `Job: ${doc.title}`,
                            bold: false,
                            size: 32,
                            color: "383838",
                            font: "Arial"
                        })
                    ]
                }),
                createTable(jobRows),
            ];

            const cleanText = (text) => {
                // Rimuove newline e normalizza gli spazi
                return text.replace(/\s+/g, ' ').trim();
            };

            if (doc.title === "Avvitatura") {
                paragraphs.push(
                    new Paragraph({
                        alignment: AlignmentType.CENTER,
                        spacing: { before: 500, after: 100 },
                        children: [
                            new TextRun({
                                text: `Programmi di avvitatura`,
                                bold: false,
                                size: 32,
                                color: "383838",
                                font: "Arial"
                            })
                        ]
                    }),
                    new Paragraph({
                        alignment: AlignmentType.LEFT,
                        spacing: { before: 100, after: 100 },
                        children: [
                            new TextRun({
                                text: cleanText(doc.programmi_text),
                                bold: false,
                                size: 20,
                                color: "383838",
                                font: "Arial"
                            })
                        ]
                    }),

                    createTable(arrayAvvitatureProgrammiRow),
                );
            }
            paragraphs.push(
                new Paragraph({
                    alignment: AlignmentType.CENTER,
                    spacing: { before: 500, after: 500 },
                    children: [
                        new TextRun({
                            text: `Esempio di implementazione job: ${doc.title}`,
                            bold: false,
                            size: 20,
                            color: "383838",
                            font: "Arial"
                        })
                    ]
                })
            );











/*<----------------------------------------ESEMPI JOB--------------------------------------------------->*/
            if (doc.esempio_job1_text && doc.esempio_job1_text.length !== 0) {

                paragraphs.push(
                    new Paragraph({
                        alignment: AlignmentType.LEFT,
                        spacing: { after: 200 },
                        children: [
                            new TextRun({
                                text: doc.esempio_job1_title,
                                bold: true,
                                size: 20,
                                color: "383838",
                                font: "Arial"
                            })
                        ]
                    }),
                    ...splitTextIntoParagraphsEsempioJob(doc.esempio_job1_text));
            }

            if (doc.esempio_job2_text && doc.esempio_job2_text.length !== 0) {

                paragraphs.push(
                    new Paragraph({
                        alignment: AlignmentType.LEFT,
                        spacing: { before: 200, after: 40},
                        children: [
                            new TextRun({
                                text: doc.esempio_job2_title,
                                bold: true,
                                size: 20,
                                color: "383838",
                                font: "Arial"
                            })
                        ]
                    }),
                    ...splitTextIntoParagraphsEsempioJob(doc.esempio_job2_text));
            }

            if (doc.esempio_job3_text && doc.esempio_job3_text.length !== 0) {

                paragraphs.push(
                    new Paragraph({
                        alignment: AlignmentType.LEFT,
                        spacing: { before: 200, after: 40},
                        children: [
                            new TextRun({
                                text: doc.esempio_job3_title,
                                bold: true,
                                size: 20,
                                color: "383838",
                                font: "Arial"
                            })
                        ]
                    }),
                    ...splitTextIntoParagraphsEsempioJob(doc.esempio_job3_text));
            }


            if (doc.esempio_job4_text && doc.esempio_job4_text.length !== 0) {

                paragraphs.push(
                    new Paragraph({
                        alignment: AlignmentType.LEFT,
                        spacing: { before: 200, after: 40},
                        children: [
                            new TextRun({
                                text: doc.esempio_job4_title,
                                bold: true,
                                size: 20,
                                color: "383838",
                                font: "Arial"
                            })
                        ]
                    }),
                    ...splitTextIntoParagraphsEsempioJob(doc.esempio_job4_text));
            }























            if (doc.diagnostica_img_src.length !== 0) {
                paragraphs.push(
                    new Paragraph({
                        alignment: AlignmentType.CENTER,
                        spacing: { before: 500, after: 200 },
                        children: [
                            new TextRun({
                                text: `Diagnostica: ${doc.title}`,
                                bold: false,
                                size: 32,
                                color: "383838",
                                font: "Arial"
                            })
                        ]
                    }),
                    new Paragraph({
                        alignment: AlignmentType.CENTER,
                        spacing: { before: 500, after: 10 },
                        children: [
                            new ImageRun({
                                data: DiagnosticaimageData,
                                transformation: {
                                    width: desiredWidth,
                                    height: calculatedHeight
                                }
                            })
                        ]
                    }),
                    new Paragraph({
                        alignment: AlignmentType.CENTER,
                        spacing: { after: 500 },
                        children: [
                            new TextRun({
                                text: `Pannello della diagnostica ${doc.title}`,
                                bold: false,
                                size: 20,
                                color: "383838",
                                font: "Arial"
                            })
                        ]
                    })
                );
            }

            paragraphs.push(

                new Paragraph({
                    alignment: AlignmentType.CENTER,
                    spacing: { before: 200, after: 200 },
                    children: [
                        new TextRun({
                            text: `Hal Config: ${doc.title}`,
                            bold: false,
                            size: 32,
                            color: "383838",
                            font: "Arial"
                        })
                    ]
                }),
                new Paragraph({
                    alignment: AlignmentType.LEFT,
                    spacing: { after: 200 },
                    children: [
                        new TextRun({
                            text: `La tabella seguente presenta il contenuto del file “HAL Config ${doc.title}.ini”, con i parametri di configurazione delle periferiche identificati dalle sezioni e dai loro nomi.`,
                            bold: false,
                            size: 20,
                            color: "383838",
                            font: "Arial"
                        })
                    ]
                }),
                createTable(halRows),
                new Paragraph({ spacing: { after: 400 } })
            );

            return paragraphs;
        });

        const elements = await Promise.all(elementsPromises).then(results => results.flat());

        const doc = new Document({
            sections: [{
                children: elements,
            }],
        });

        Packer.toBlob(doc).then(blob => {
            saveAs(blob, "Documentazione Hal.docx");
        });

        setVisible(false);
    };

    return (
        <>
            <button className={className} onClick={AvviaCreazione}>Crea Documentazione</button>
            {visible &&
                <ConfermaAction
                    title="Conferma"
                    text="Vuoi creare una documentazione?"
                    onConferma={createDocument}
                    onAnnulla={() => setVisible(false)}
                >
                </ConfermaAction>
            }
        </>
    );
};

export default DocumentationCreator;
