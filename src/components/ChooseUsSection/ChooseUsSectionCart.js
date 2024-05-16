import React from 'react';
import { Link } from 'react-router-dom';

import './ChooseUsSection.scss';

function ChooseUsSectionCart(props) {
    return (
        <div className={`col_chooseUsCart_otr ${props.ChooseUsCartClass}`}>
            <div className='col_chooseUsCart_inr'>
                <figure className='icon_otr'>
                    <img decoding='async' className='icon' src={props.ChooseUsCartIcon} alt='Icon' />
                </figure>
                <div className='content_otr'>
                    <Link className='heading heading-h4' to='/services'>{props.ChooseUsCartHeading}</Link>
                    <p className='desc heading-s'>{props.ChooseUsCartDescription}</p>
                    <div className='action_otr'>
                        <Link className='learnMore_btn' to='/services'>
                            <p className='learnMore_btn_text heading-s'>Learn More</p>
                            <i class="learnMore_btn_icon ri-arrow-drop-right-line"></i>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ChooseUsSectionCart
