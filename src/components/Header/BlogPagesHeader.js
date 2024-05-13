import React from 'react';

import './Header.scss';
import { Link } from 'react-router-dom';

function BlogPagesHeader(props) {
    return (
        <div className='blog_pages_wrapper'>
            <h1 className='blog_pages_wrapper_heading heading-h1-2'>{props.BlogPagesWrapperHeading}</h1>
            <div className='blog_pages_wrapper_text_main'>
                <Link className='blog_pages_wrapper_home_text heading-sb' to='/'>Home</Link>
                <p className='blog_pages_wrapper_slash heading-mb'>/</p>
                <Link className='blog_pages_wrapper_blog_text heading-sb' to={props.BlogPagesWrapperPrevPageLink}>{props.BlogPagesWrapperPrevPageText}</Link>
                <p className='blog_pages_wrapper_slash heading-mb'>/</p>
                <p className='blog_pages_wrapper_current_text heading-sb'>{props.BlogPagesWrapperCurrentPageText}</p>
            </div>
        </div>
    )
}

export default BlogPagesHeader
