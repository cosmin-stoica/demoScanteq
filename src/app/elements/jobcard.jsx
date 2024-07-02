import { useState, useEffect } from "react";
import ItodoImage from "./itodo-img";
import JobViewerCard from "./jobViewerCard";
import axios from "axios";

const JobCard = ({ title, description, imgSrc }) => {
    const [openView, setOpenView] = useState(false);
    const [hasImages, setHasImages] = useState(false);

    useEffect(() => {
        const checkImages = async () => {
            try {
                const response = await axios.get(`/assets/images/jobs/carousel/${title}`);
                setHasImages(response.status === 200);
            } catch (error) {
                setHasImages(false);
            }
        };

        checkImages();
    }, [title]);

    const openJobViewerCard = () => {
        setOpenView(!openView);
    };

    return (
        <>
            <div className="card-viewer-lower-part-card">
                <div className="primary-circle">
                    <ItodoImage className="immaginebianca" src={imgSrc}></ItodoImage>
                </div>
                {hasImages && <button onClick={openJobViewerCard} id="button-third">Vedi di più</button>}
                <div className="card-viewer-lower-part-card-title">
                    {title}
                </div>
                <div className="card-viewer-lower-part-card-desc">
                    {description}
                </div>
            </div>

            {openView && <JobViewerCard title={title} desc={description} exitCallback={openJobViewerCard}></JobViewerCard>}
        </>
    );
}

export default JobCard;
