import ItodoImage from "../../../elements/itodo-img";

function SectionBlogComments() {
    return (
        <>
            <div className="clear comment-section-outer" id="comment-list">
                <div className="comments-area" id="comments">
                    <h2 className="comments-title m-b30">Comments<span>(02)</span></h2>
                    <div className="comments-outer p-b30">
                        {/* COMMENT LIST START */}
                        <ol className="comment-list">
                            <li className="comment">
                                {/* COMMENT BLOCK */}
                                <div className="comment-body">
                                    <div className="comment-author vcard">
                                        <ItodoImage className="avatar photo" src="images/blog/blog-comment/av1.jpg" alt="" />
                                        <cite className="fn">By: Monsur Rahman Lito</cite>
                                    </div>
                                    <div className="comment-meta">
                                        <a href="#"><i className="fa fa-calendar" />25 January 2023</a>
                                    </div>
                                    <p>Phasellus ac consequat turpis, sit amet fermentum nulla. Donec dignissim augue nunc. Praesent bibendum erat ac lectus molestie lobortis.</p>
                                    <div className="reply">
                                        <a href="#" className="comment-reply-link">Reply <i className="fa  fa-long-arrow-right" /></a>
                                    </div>
                                </div>
                                {/* SUB COMMENT BLOCK */}
                                <ol className="children">
                                    <li className="comment odd parent">
                                        <div className="comment-body">
                                            <div className="comment-author vcard">
                                                <ItodoImage className="avatar photo" src="images/blog/blog-comment/av2.jpg" alt="" />
                                                <cite className="fn">By: Devid Cop</cite>
                                            </div>
                                            <div className="comment-meta">
                                                <a href="#"><i className="fa fa-calendar" />28 January 2023</a>
                                            </div>
                                            <p>Phasellus ac consequat turpis, sit amet fermentum nulla. Donec dignissim augue nunc. Praesent bibendum erat ac lectus molestie lobortis.</p>
                                            <div className="reply">
                                                <a href="#" className="comment-reply-link">Reply <i className="fa  fa-long-arrow-right" /></a>
                                            </div>
                                        </div>
                                    </li>
                                </ol>
                            </li>
                        </ol>
                        {/* COMMENT LIST END */}
                        {/* LEAVE A REPLY START */}
                        <div className="comment-respond m-t30" id="respond">
                            <h2 className="comment-reply-title m-b30" id="reply-title">Leave a Replay
                            </h2>
                            <p>Phasellus ac consequat turpis, sit amet.Please Required fields mark *</p>
                            <form className="comment-form row" id="commentform" method="post">
                                <p className="comment-form-author col-lg-6 col-md-6">
                                    <label htmlFor="author">Your Name <span className="required">*</span></label>
                                    <input className="form-control" type="text" defaultValue={""} name="user-comment" placeholder="Your Name *" id="author" />
                                </p>
                                <p className="comment-form-email col-lg-6 col-md-6">
                                    <label htmlFor="url">Phone Number</label>
                                    <input className="form-control" type="text" defaultValue={""} name="url" placeholder="Phone Number *" id="url" />
                                </p>
                                <p className="comment-form-url col-lg-12 col-md-12">
                                    <label htmlFor="email">Email <span className="required">*</span></label>
                                    <input className="form-control" type="text" defaultValue={""} name="email" placeholder="Your Email *" id="email" />
                                </p>
                                <p className="comment-form-comment col-lg-12 col-md-12">
                                    <label htmlFor="comment">Comment</label>
                                    <textarea className="form-control" rows={8} name="comment" placeholder="Message" id="comment" defaultValue={""} />
                                </p>
                                <p className="comment-form-cookies-consent"><input id="wp-comment-cookies-consent" name="wp-comment-cookies-consent" type="checkbox" defaultValue="yes" /><label htmlFor="wp-comment-cookies-consent">Save my name, email, and website in this browser for the next time I comment.</label></p>
                                <p className="form-submit">
                                    <button type="button" className="site-button sx-btn-primary icon sx-btn-lg"><i className="fa  fa-long-arrow-right" /> Post Comment </button>
                                </p>
                            </form>
                        </div>
                        {/* LEAVE A REPLY END */}
                    </div>
                </div>
            </div>
        </>
    )
}

export default SectionBlogComments;