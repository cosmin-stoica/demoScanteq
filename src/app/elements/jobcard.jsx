import ItodoImage from "./itodo-img";


const JobCard = ({title,description,imgSrc}) => {
    return (
        <>
            <div className="card-viewer-lower-part-card">
                <div className="primary-circle">
                    <ItodoImage className="immaginebianca" src={imgSrc}></ItodoImage>
                </div>
                <div className="card-viewer-lower-part-card-title">
                    {title}
                </div>
                <div className="card-viewer-lower-part-card-desc">
                    {description}
                </div>
            </div>
        </>
    );
}

export default JobCard;