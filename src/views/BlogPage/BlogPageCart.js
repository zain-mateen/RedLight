import React from 'react';
import { Link } from 'react-router-dom';
import './BlogPage.scss';

function BlogPageCart({ blog }) { 
    const { id, BlogPageCartClass, BlogPageCartImage, BlogPageCartHeading, BlogPageCartAuthorName, BlogPageCartBlogDate, BlogPageCartDescription } = blog;

    return (
        <div className={`blogPageCart_otr ${BlogPageCartClass}`}>
            <div className='blogPageCart_inr'>
                <Link className='img_otr' to={`/blog-detail/${id}`}>
                    <img className='img' src={BlogPageCartImage} alt={BlogPageCartHeading} />
                </Link>
                <div className='blog_content'>
                    <Link className='blog_content_heading heading-h4' to={`/blog-detail/${id}`}>{BlogPageCartHeading}</Link>
                    <div className='author_date_main'>
                        <div className='author_otr'>
                            <div className='icon_otr'>
                                <i className="icon ri-user-fill"></i>
                            </div>
                            <p className='author_text heading-m'>
                                By
                                <span className='author_text_inr heading-mb'>{BlogPageCartAuthorName}</span>
                            </p>
                        </div>
                        <div className='date_otr'>
                            <div className='icon_otr'>
                                <i className="icon ri-time-line"></i>
                            </div>
                            <p className='author_text heading-m'>{BlogPageCartBlogDate}</p>
                        </div>
                    </div>
                    <p className='blog_content_desc heading-xs'>{BlogPageCartDescription}</p>
                    <div className='action_otr'>
                        <Link className='read_btn heading-mb' to={`/blog-detail/${id}`}>Read More</Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default BlogPageCart;
