import React from 'react';
import { Link } from 'react-router-dom';
import './BlogPage.scss';

function BlogPageCart(props) {
    return (
        <div className={`blogPageCart_otr ${props.BlogPageCartClass}`}>
            <div className='blogPageCart_inr'>
                <Link className='img_otr' to='/blog-detail'>
                    <img className='img' src={props.BlogPageCartImage} alt='img' />
                </Link>
                <div className='blog_content'>
                    <Link className='blog_content_heading heading-h4' to='/blog-detail'>{props.BlogPageCartHeading}</Link>
                    <div className='author_date_main'>
                        <div className='author_otr'>
                            <div className='icon_otr'>
                                <i class="icon ri-user-fill"></i>
                            </div>
                            <p className='author_text heading-m'>
                                By
                                <span className='author_text_inr heading-mb'>{props.BlogPageCartAuthorName}</span>
                            </p>
                        </div>
                        <div className='date_otr'>
                            <div className='icon_otr'>
                                <i class="icon ri-time-line"></i>
                            </div>
                            <p className='author_text heading-m'>{props.BlogPageCartBlogDate}</p>
                        </div>
                    </div>
                    <p className='blog_content_desc heading-xs'>{props.BlogPageCartDescription}</p>
                    <div className='action_otr'>
                        <Link className='read_btn heading-mb' to='/blog-detail'>Read More</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BlogPageCart
