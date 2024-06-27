import React from "react";
import ItodoImage from "../../elements/itodo-img";
import BannerJob from "./BannerJob";
import { NavLink } from "react-router-dom";
import { useTranslation } from 'react-i18next';
import JobCard from "../../elements/jobcard";

function JobCardsDef() {

    const { t, i18n } = useTranslation(["job", "masp_operazioni"]);
    const currentLanguage = i18n.language;
    const jobs = t('job:data', { returnObjects: true });


    return (
        <>
            <div className="perflexcolumn marginmenotop200">

                <BannerJob
                    icon="flaticon-development"
                    title={t("masp_operazioni:jobs.automation_and_assembly_title")}
                    primoP={t("masp_operazioni:jobs.automation_and_assembly_desc_1")}
                    secondoP={t("masp_operazioni:jobs.automation_and_assembly_desc_2")}
                ></BannerJob>

                <div className="card-viewer-lower-part-card-list for-mobile-view">
                    {jobs.filter(job => job.category === (currentLanguage === "it" ? "Automazione e Assemblaggio" : currentLanguage === "en" ? "Automation and Assembly" : currentLanguage === "ro" ? "Automatizare și Asamblare" : "Automatisation et Assemblage")).map(job => (
                        <JobCard title={job.title} description={job.description_Home} imgSrc={job.imgSrc}></JobCard>
                    ))}
                </div>

                <BannerJob
                    icon="flaticon-skills"
                    title={t("masp_operazioni:jobs.automotive_component_testing_title")}
                    primoP={t("masp_operazioni:jobs.automotive_component_testing_desc_1")}
                    secondoP={t("masp_operazioni:jobs.automotive_component_testing_desc_2")}
                ></BannerJob>


                <div className="card-viewer-lower-part-card-list for-mobile-view">
                    {jobs.filter(job => job.category === (currentLanguage === "it" ? "Collaudo Componenti Automotive" : currentLanguage === "en" ? "Automotive Component Testing" : currentLanguage === "ro" ? "Testarea componentelor auto" : "Test des Composants Automobiles")).map(job => (
                        <JobCard title={job.title} description={job.description_Home} imgSrc={job.imgSrc}></JobCard>
                    ))}
                </div>

                <BannerJob
                    icon="flaticon-touch"
                    title={t("masp_operazioni:jobs.electronic_control_unit_for_automotive_title")}
                    primoP={t("masp_operazioni:jobs.electronic_control_unit_for_automotive_desc_1")}
                    secondoP={t("masp_operazioni:jobs.electronic_control_unit_for_automotive_desc_2")}
                ></BannerJob>

                <div className="card-viewer-lower-part-card-list for-mobile-view">
                    {jobs.filter(job => job.category === (currentLanguage === "it" ? "Unità di Controllo Elettronico" : currentLanguage === "en" ? "Electronic Control Units" : currentLanguage === "ro" ? "Unități de control electronic" : "Unité de Contrôle Électronique")).map(job => (
                        <JobCard title={job.title} description={job.description_Home} imgSrc={job.imgSrc}></JobCard>
                    ))}
                </div>

                <BannerJob
                    icon="flaticon-data"
                    title={t("masp_operazioni:jobs.quality_control_and_verification_title")}
                    primoP={t("masp_operazioni:jobs.quality_control_and_verification_desc_1")}
                    secondoP={t("masp_operazioni:jobs.quality_control_and_verification_desc_2")}
                ></BannerJob>

                <div className="card-viewer-lower-part-card-list for-mobile-view">
                    {jobs.filter(job => job.category === (currentLanguage === "it" ? "Controllo di Qualità e Verifica" : currentLanguage === "en" ? "Quality Control and Verification" : currentLanguage === "ro" ? "Controlul calității și verificare" : "Contrôle de Qualité et Vérification")).map(job => (
                        <JobCard title={job.title} description={job.description_Home} imgSrc={job.imgSrc}></JobCard>
                    ))}
                </div>

                <BannerJob
                    icon="flaticon-supply-chain"
                    title={t("masp_operazioni:jobs.production_and_logistics_management_title")}
                    primoP={t("masp_operazioni:jobs.production_and_logistics_management_desc_1")}
                    secondoP={t("masp_operazioni:jobs.production_and_logistics_management_desc_2")}
                ></BannerJob>

                <div className="card-viewer-lower-part-card-list for-mobile-view">
                    {jobs.filter(job => job.category === (currentLanguage === "it" ? "Gestione Produzione e Logistica" : currentLanguage === "en" ? "Production Management and Logistics" : currentLanguage === "ro" ? "Gestionarea producției și logistică" : "Gestion de la Production et Logistique")).map(job => (
                        <JobCard title={job.title} description={job.description_Home} imgSrc={job.imgSrc}></JobCard>
                    ))}
                </div>

                <BannerJob
                    icon="flaticon-employee"
                    title={t("masp_operazioni:jobs.station_and_procedure_management_title")}
                    primoP={t("masp_operazioni:jobs.station_and_procedure_management_desc_1")}
                    secondoP={t("masp_operazioni:jobs.station_and_procedure_management_desc_2")}
                ></BannerJob>

                <div className="card-viewer-lower-part-card-list for-mobile-view">
                    {jobs.filter(job => job.category === (currentLanguage === "it" ? "Gestione Postazioni e Procedure" : currentLanguage === "en" ? "Workstation and Procedure Management" : currentLanguage === "ro" ? "Gestionarea posturilor de lucru și proceduri" : "Gestion des Postes et Procédures")).map(job => (
                        <JobCard title={job.title} description={job.description_Home} imgSrc={job.imgSrc}></JobCard>
                    ))}
                </div>

                <div className="width100 perflex margin-top100">
                    <NavLink to="/masp-caratteristiche"><button className="masp-btn-indietro">{t("masp_operazioni:jobs.button_indietro")}</button></NavLink>
                    <NavLink to="/masp-tracciabilita"><button className="masp-btn-avanti">{t("masp_operazioni:jobs.button_avanti")}</button></NavLink>
                </div>


            </div >
        </>
    )
}
export default JobCardsDef;