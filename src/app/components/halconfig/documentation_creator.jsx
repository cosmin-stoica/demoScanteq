import React, { useState } from 'react';
import { Document, Packer, Paragraph, Table, TableCell, TableRow, TextRun, WidthType, ShadingType, AlignmentType, ImageRun } from 'docx';
import { saveAs } from 'file-saver';
import ConfermaAction from '../global/confermaAction';

const DocumentationCreator = ({ halArrays, className }) => {
    const [visible, setVisibile] = useState(false);

    const AvviaCreazione = () => {
        setVisibile(true);
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

            const desiredWidth = 400;
            const calculatedHeight = (originalHeight / originalWidth) * desiredWidth;

            const arrayHal = doc.data_hal;
            const arrayJob = doc.data_job;

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

            const splitTextIntoParagraphs = (text) => {
                let singleLineText = text.replace(/\n/g, ' ');
                let normalizedText = singleLineText.replace(/\s+/g, ' ');
                const sentences = normalizedText.match(/[^.?!]+[.!?]*/g) || [];
                return sentences.map(sentence => new Paragraph({
                    children: [new TextRun({ text: sentence.trim(), size: 18, font: "Arial" })]
                }));
            };

            const splitTextIntoParagraphsEsempioJob = (text) => {
                if (!text) {
                    return [];
                }
                const lines = text.split('\n');
                return lines.map(line => new Paragraph({
                    children: [new TextRun({ text: line.trim(), size: 18, font: "Arial" })]
                }));
            };

            return [
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
                }),
                ...splitTextIntoParagraphsEsempioJob(doc.esempio_job),
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
                }),
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
                            text: `La tabella seguente presenta il contenuto del file “HAL Config ${doc.title}.ini”, con i
                            parametri di configurazione delle periferiche identificati dalle sezioni e dai loro nomi.`,
                            bold: false,
                            size: 20,
                            color: "383838",
                            font: "Arial"
                        })
                    ]
                }),
                createTable(halRows),
                new Paragraph({ spacing: { after: 400 } })
            ];
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

        setVisibile(false);
    };

    return (
        <>
            <button className={className} onClick={AvviaCreazione}>Crea Documentazione</button>
            {visible &&
                <ConfermaAction
                    title="Conferma"
                    text="Vuoi creare una documentazione?"
                    onConferma={createDocument}
                    onAnnulla={() => setVisibile(false)}
                >
                </ConfermaAction>
            }
        </>
    );
};

export default DocumentationCreator;
