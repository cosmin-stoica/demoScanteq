function SectionSearch() {
    return (
        <>
            <div className="widget">
                <h4 className="widget-title ">Search</h4>
                <div className="search-bx">
                    <form role="search" method="post">
                        <div className="input-group">
                            <input name="news-letter" type="text" className="form-control bg-gray" placeholder="Write your text" />
                            <span className="input-group-btn">
                                <button type="submit" className="btn"><i className="flaticon-search" /></button>
                            </span>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}
export default SectionSearch;