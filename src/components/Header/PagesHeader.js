import React from 'react';

import './Header.scss';
import { Link } from 'react-router-dom';

function PagesHeader(props) {
    return (
        <div className='pages_wrapper'>
            <h1 className='pages_wrapper_heading heading-h1-2'>{props.PagesWrapperHeading}</h1>
            <p className='pages_wrapper_desc heading-l'>{props.PagesWrapperDescription}</p>
            <div className='pages_wrapper_text_main'>
                <Link className='pages_wrapper_home_text heading-sb' to='/'>Home</Link>
                <p className='pages_wrapper_slash heading-mb'>/</p>
                <Link className='pages_wrapper_about_text heading-sb' to={props.PagesWrapperCurrentPageLink}>{props.PagesWrapperCurrentPageText}</Link>
            </div>
        </div>
    )
}

export default PagesHeader
