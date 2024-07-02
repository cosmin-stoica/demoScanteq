import ItodoImage from "../itodo-img";

const NewHeaderTitle = ({ title, descList, buttonText, imgSrc }) => {
    return (
        <>
            <div className="new-header-div">

                <div className="new-header-div-first">
                    <div className="new-header-title">
                        {title}
                    </div>

                    <div className="new-header-desc">
                        {descList && descList.map((desc,index) => (
                            <p>{desc}</p>
                        ))}
                    </div>

                    <button>{buttonText}</button>
                </div>
                <div className="new-header-div-second">
                    <ItodoImage src={imgSrc}></ItodoImage>
                </div>

            </div>

        </>
    );
};

export default NewHeaderTitle;