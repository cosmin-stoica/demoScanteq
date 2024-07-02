import React, { useState, useEffect } from 'react';
import { Carousel } from "react-responsive-carousel";
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import axios from 'axios';
import Loader from "./loader";

const JobViewerCard = ({ exitCallback, title, desc }) => {
    const [images, setImages] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const loadImages = async () => {
            const imageList = [];
            let imageIndex = 1;
            let formattedTitle = title.toLowerCase();
            let imagePath = `/assets/images/jobs/carousel/${formattedTitle}/image${imageIndex}.png`;

            while (true) {
                try {
                    await axios.head(imagePath);
                    imageList.push(imagePath);
                    imageIndex++;
                    imagePath = `/assets/images/jobs/carousel/${formattedTitle}/image${imageIndex}.png`;
                } catch (error) {
                    break;
                }
            }

            setImages(imageList);
            setLoading(false);
        };

        loadImages();
    }, [title]);

    return (
        <>
            <div className="modal-overlay">
                <div className="job-viewer-card">
                    <div className="job-viewer-card-title">
                        {title}
                    </div>
                    <div className='width100 perflex'>
                        <div className="job-viewer-card-desc">
                            {desc}
                        </div>
                    </div>
                    {loading ? (
                        <Loader />
                    ) : (
                        <div className='carousel-job-viewer-wrapper'>
                            <Carousel className='carousel-job-viewer' showStatus={false}>
                                {images.map((image, index) => (
                                    <div className='job-viewer-card-title-imgdiv' key={index}>
                                        <img className='job-viewer-card-title-img' src={image} alt={`Image ${index + 1}`} />
                                    </div>
                                ))}
                            </Carousel>
                        </div>
                    )}
                    <button className="job-viewer-card-closer" onClick={exitCallback}>X</button>
                </div>
            </div>
        </>
    );
}

export default JobViewerCard;