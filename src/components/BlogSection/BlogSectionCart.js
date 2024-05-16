import React from 'react';
import { Link } from 'react-router-dom';

import './BlogSection.scss';

function BlogSectionCart(props) {
    return (
        <div className={`col_blogCart_otr ${props.BlogSectionCartClass}`}>
            <div className='col_blogCart_inr'>
                <Link className='img_otr' to='/blog-detail'>
                    <img className='img' src={props.BlogSectionCartImage} alt='img' />
                </Link>
                <div className='content_otr'>
                    <Link className='heading heading-lb' to='/blog-detail'>{props.BlogSectionCartHeading}</Link>
                    <p className='desc heading-s'>{props.BlogSectionCartDescription}</p>
                </div>
            </div>
        </div>
    )
}

export default BlogSectionCart
