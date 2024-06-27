const Title = ({title,description,addClass}) => {
    return (
        <>
            <div className={`card-viewer-upper-part ${addClass}`}>

                {title !== null && <div className="for-mobile-view">
                    <div className="card-viewer-upper-part-title">
                       {title}
                    </div>

                </div>}

                {description !== null && <div className="for-mobile-view">
                    <div className="card-viewer-upper-part-desc ">
                       {description}
                    </div>
                </div>}

            </div>
        </>
    );
};

export default Title;