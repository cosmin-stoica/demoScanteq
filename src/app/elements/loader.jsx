import { publicUrlFor } from "../../globals/constants";

function Loader() {
    return (
        <>
            <div className="loading-area">
                <div className="loading-box" />
                <div className="loading-pic">
                    <div className="loading">
                        <h2><img src={publicUrlFor("images/logo.png")} id = "logoscanteqloading" alt="#" /></h2>
                        <span />
                        <span />
                        <span />
                        <span />
                        <span />
                        <span />
                        <span />
                    </div>
                </div>
            </div>

        </>
    )
}

export default Loader;