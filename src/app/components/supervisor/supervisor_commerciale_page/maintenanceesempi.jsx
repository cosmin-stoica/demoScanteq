import { useState } from "react";
import { useTranslation } from 'react-i18next';
import AnalysisOptionBox from "../../supervisor/supervisor_tecnico/maintenance/optionbox.js";
import GaussianChart from "../../supervisor/supervisor_tecnico/maintenance/GaussianChart.jsx";

const MaintenanceEsempi = () => {

  const { t } = useTranslation("supervisor");


  const selectedLog = "======================================================\r\n" +
    "<RW>Log File\r\n" +
    "======================================================\r\n" +
    "<GW>Application: Aston Martin Marriage 2.1.2\r\n" +
    "<RW>Date: 23-11-2023\r\n" +
    "<RW>Hour: 08:24:07.903\r\n" +
    "======================================================\r\n\r\n" +
    "<YK>08:24:07.903: New Log file after line number overflow\r\n" +
    "<IW>08:24:07.728: JOB-BC: Job End\r\n" +
    "<IW>08:24:07.738: MAIN-TH: Job End\r\n" +
    "<GW>08:24:07.803: MAIN-TH: Barcode job end correctly. Job ID = 1\r\n" +
    "<IW>08:24:07.803: MAIN-TH: First barcode job OK -> Disable first job barcode\r\n" +
    "<VK>08:24:07.843: MAIN-TH: Next Job\r\n" +
    "<IW>08:24:07.843: MAIN-TH: LoadNextJobIdAndTypeFromIni()\r\n" +
    "<IW>08:24:07.938: MAIN-TH: No block needed\r\n" +
    "<YW>08:24:08.003: MAIN-TH: Load Job 2 config from INI: BLOCKING\r\n" +
    "<IW>08:24:08.058: MAIN-TH: Job BLOCKING config loaded from INI\r\n" +
    "<RW>08:24:08.058: ==============================================================\r\n" +
    "<RW>08:24:08.058: Job Config BLOCCAGGIO\r\n" +
    "<RW>08:24:08.058: ==============================================================\r\n" +
    "<YW>08:24:08.058: Tipo job = bloccaggio\r\n" +
    "<YW>08:24:08.058: Task =\r\n" +
    "<IW>08:24:08.058: Nome job = Bloccaggio struttura\r\n" +
    "<VW>08:24:08.058: Salta job = 0\r\n" +
    "<IW>08:24:08.058: Numero ripetizioni = 0\r\n";

  const [searchText, setSearchText] = useState('');
  const [searchTextDef, setSearchTextDef] = useState('');
  const [textAreaContent, setTextAreaContent] = useState('');

  const handleSearch = () => {
    if (selectedLog) {
      setSearchTextDef(searchText);
      const highlightedText = highlightText(selectedLog, searchTextDef);
      setTextAreaContent(highlightedText);
    }
  };

  const handleClearSearch = () => {
    setSearchText('');
    setSearchTextDef(searchText);
    setTextAreaContent(selectedLog ? selectedLog : 'Nessun Log selezionato');
  };

  const highlightText = (text, searchText) => {
    if (text) {
      const regex = new RegExp(`(${searchText})`, 'gi');
      return text.split('\n').map((line, index) => {
        // Remove <RW>, <GW>, <YK>, <VK>, <VW>, <IW>, etc.
        const cleanedLine = line.replace(/<([RGYVIWK]+)W?>/g, '');



        const isRedBackground = line.trim().startsWith('<RW>');
        const isGreenBackground = line.trim().startsWith('<GW>');
        const isYellowBackground = line.trim().startsWith('<YK>');
        const isPurpleBackground = line.trim().startsWith('<VK>');
        const isPurpleBackground2 = line.trim().startsWith('<VW>');
        const isGreyBackground = line.trim().startsWith('<IW>');
        const isWhiteBackground = !isRedBackground && !isGreenBackground && !isYellowBackground &&
          !isPurpleBackground && !isGreyBackground && !isPurpleBackground2;

        const formattedLine = regex.test(line) ? (
          <mark
            key={index}
            className={`highlighted-text
      ${isRedBackground ? 'red-background' : ''}
      ${isGreenBackground ? 'green-background' : ''}
      ${isYellowBackground ? 'yellow-background' : ''}
      ${isPurpleBackground ? 'purple-background' : ''}
      ${isPurpleBackground2 ? 'purple-background2' : ''}
      ${isGreyBackground ? 'grey-background' : ''}
      ${isWhiteBackground ? 'white-background' : ''}`}
          >
            {cleanedLine}
          </mark>
        ) : (
          cleanedLine
        );

        return (
          <div key={index} className={`log-line
            ${isRedBackground ? 'red-background' : ''}
            ${isGreenBackground ? 'green-background' : ''}
            ${isYellowBackground ? 'yellow-background' : ''}
            ${isPurpleBackground ? 'purple-background' : ''}
            ${isPurpleBackground2 ? 'purple-background2' : ''}
            ${isGreyBackground ? 'grey-background' : ''}
            ${isWhiteBackground ? 'white-background' : ''}`}
          >
            {formattedLine}
          </div>
        );
      });
    }
    return text;
  };


  const formatDate = (timestamp) => {
    const date = new Date(timestamp);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  };


  const renderHighlightedLog = () => {
    return (
      <div className="log-content">
        {selectedLog ? highlightText(selectedLog, searchTextDef) : ''}
      </div>
    );
  };





  const AvvitatureDataset = [
    { ValoreFinale: 1.2 }, { ValoreFinale: 2.5 }, { ValoreFinale: 3.1 }, { ValoreFinale: 4.7 }, { ValoreFinale: 5.6 },
    { ValoreFinale: 6.3 }, { ValoreFinale: 7.8 }, { ValoreFinale: 8.4 }, { ValoreFinale: 9.0 }, { ValoreFinale: 10.2 },
    { ValoreFinale: 11.3 }, { ValoreFinale: 12.1 }, { ValoreFinale: 13.8 }, { ValoreFinale: 14.2 }, { ValoreFinale: 15.6 },
    { ValoreFinale: 16.4 }, { ValoreFinale: 17.7 }, { ValoreFinale: 18.5 }, { ValoreFinale: 19.9 }, { ValoreFinale: 20.3 },
    { ValoreFinale: 21.4 }, { ValoreFinale: 22.7 }, { ValoreFinale: 23.6 }, { ValoreFinale: 24.1 }, { ValoreFinale: 25.3 },
    { ValoreFinale: 26.8 }, { ValoreFinale: 27.5 }, { ValoreFinale: 28.7 }, { ValoreFinale: 29.4 }, { ValoreFinale: 30.9 },
    { ValoreFinale: 31.1 }, { ValoreFinale: 32.4 }, { ValoreFinale: 33.8 }, { ValoreFinale: 34.2 }, { ValoreFinale: 35.5 },
    { ValoreFinale: 36.3 }, { ValoreFinale: 37.9 }, { ValoreFinale: 38.1 }, { ValoreFinale: 39.6 }, { ValoreFinale: 40.2 },
    { ValoreFinale: 41.7 }, { ValoreFinale: 42.4 }, { ValoreFinale: 43.8 }, { ValoreFinale: 44.6 }, { ValoreFinale: 45.1 },
    { ValoreFinale: 46.3 }, { ValoreFinale: 47.8 }, { ValoreFinale: 48.9 }, { ValoreFinale: 49.2 }, { ValoreFinale: 50.7 }
  ];


  const TermoforoDataset = [
    { ValoreFinale: 1.1 }, { ValoreFinale: 2.4 }, { ValoreFinale: 3.6 }, { ValoreFinale: 4.0 }, { ValoreFinale: 5.5 },
    { ValoreFinale: 6.7 }, { ValoreFinale: 7.3 }, { ValoreFinale: 8.8 }, { ValoreFinale: 9.5 }, { ValoreFinale: 10.1 },
    { ValoreFinale: 11.4 }, { ValoreFinale: 12.2 }, { ValoreFinale: 13.9 }, { ValoreFinale: 14.6 }, { ValoreFinale: 15.8 },
    { ValoreFinale: 16.5 }, { ValoreFinale: 17.7 }, { ValoreFinale: 18.4 }, { ValoreFinale: 19.8 }, { ValoreFinale: 20.2 },
    { ValoreFinale: 21.9 }, { ValoreFinale: 22.6 }, { ValoreFinale: 23.1 }, { ValoreFinale: 24.8 }, { ValoreFinale: 25.9 },
    { ValoreFinale: 26.7 }, { ValoreFinale: 27.4 }, { ValoreFinale: 28.1 }, { ValoreFinale: 29.5 }, { ValoreFinale: 30.3 },
    { ValoreFinale: 31.8 }, { ValoreFinale: 32.7 }, { ValoreFinale: 33.4 }, { ValoreFinale: 34.1 }, { ValoreFinale: 35.9 },
    { ValoreFinale: 36.2 }, { ValoreFinale: 37.7 }, { ValoreFinale: 38.5 }, { ValoreFinale: 39.3 }, { ValoreFinale: 40.8 },
    { ValoreFinale: 41.5 }, { ValoreFinale: 42.1 }, { ValoreFinale: 43.7 }, { ValoreFinale: 44.5 }, { ValoreFinale: 45.3 },
    { ValoreFinale: 46.9 }, { ValoreFinale: 47.6 }, { ValoreFinale: 48.1 }, { ValoreFinale: 49.7 }, { ValoreFinale: 50.5 }
  ];



  const CoppiaDataset = [
    { ValoreFinale: 1.3 }, { ValoreFinale: 2.1 }, { ValoreFinale: 3.9 }, { ValoreFinale: 4.2 }, { ValoreFinale: 5.8 },
    { ValoreFinale: 6.4 }, { ValoreFinale: 7.1 }, { ValoreFinale: 8.6 }, { ValoreFinale: 9.7 }, { ValoreFinale: 10.0 },
    { ValoreFinale: 11.1 }, { ValoreFinale: 12.6 }, { ValoreFinale: 13.3 }, { ValoreFinale: 14.7 }, { ValoreFinale: 15.2 },
    { ValoreFinale: 16.9 }, { ValoreFinale: 17.4 }, { ValoreFinale: 18.8 }, { ValoreFinale: 19.6 }, { ValoreFinale: 20.3 },
    { ValoreFinale: 21.5 }, { ValoreFinale: 22.2 }, { ValoreFinale: 23.4 }, { ValoreFinale: 24.9 }, { ValoreFinale: 25.1 },
    { ValoreFinale: 26.7 }, { ValoreFinale: 27.8 }, { ValoreFinale: 28.3 }, { ValoreFinale: 29.6 }, { ValoreFinale: 30.4 },
    { ValoreFinale: 31.9 }, { ValoreFinale: 32.1 }, { ValoreFinale: 33.8 }, { ValoreFinale: 34.5 }, { ValoreFinale: 35.3 },
    { ValoreFinale: 36.7 }, { ValoreFinale: 37.4 }, { ValoreFinale: 38.1 }, { ValoreFinale: 39.5 }, { ValoreFinale: 40.2 },
    { ValoreFinale: 41.3 }, { ValoreFinale: 42.7 }, { ValoreFinale: 43.1 }, { ValoreFinale: 44.8 }, { ValoreFinale: 45.6 },
    { ValoreFinale: 46.9 }, { ValoreFinale: 47.3 }, { ValoreFinale: 48.5 }, { ValoreFinale: 49.8 }, { ValoreFinale: 50.4 }
  ];


  const [selectedData, setSelectedData] = useState(AvvitatureDataset);

  const mean = 25;
  const standardDeviation = 2
  const threshold = 1.5;






  const onClickDemoOption = (datachoose) => {
    setSelectedData(datachoose)
  }







  return (
    <>
      <div className="titolo-supervisor-preview width100 perflex margin-top50">
        {t("declaration.maintenance_hub_example.title")}
      </div>
      <div className="paneanalisiscegli-preview">
        <div className='paneanalisiscegli'>
          <AnalysisOptionBox text={t("declaration.maintenance_hub_example.first_title")} isDemo={true} onClickDemo={() => onClickDemoOption(AvvitatureDataset)} />
          <AnalysisOptionBox text={t("declaration.maintenance_hub_example.second_title")}isDemo={true} onClickDemo={() => onClickDemoOption(TermoforoDataset)} />
          <AnalysisOptionBox text={t("declaration.maintenance_hub_example.third_title")} isDemo={true} onClickDemo={() => onClickDemoOption(CoppiaDataset)} />
        </div>
      </div>

      <div className="margin-top50">
        <GaussianChart
          dataset={selectedData}
          mean={mean}
          standardDeviation={standardDeviation}
          threshold={threshold}>

        </GaussianChart>
      </div>


      <div className="titolo-supervisor-preview width100 perflex margin-top50">
      {t("declaration.maintenance_hub_example.log_title")}
      </div>

      <div className='textareadiv'>
        <div className='textarealog'>
          <div className='search-container'>
            <input
              type='text'
              placeholder={t("declaration.maintenance_hub_example.find_input")}
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
            />
            <div>
              <button onClick={handleSearch}>{t("declaration.maintenance_hub_example.search_button")}</button>
              <button onClick={handleClearSearch}>{t("declaration.maintenance_hub_example.cancel_button")}</button>
            </div>

            {selectedLog != null && <p>22/05/2024</p>}
          </div>
          {renderHighlightedLog()}
        </div>
      </div>

    </>
  );
};

export default MaintenanceEsempi;