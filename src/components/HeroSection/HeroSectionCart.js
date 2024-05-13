import React from 'react';
import './HeroSection.scss';

function HeroSectionCart(props) {
    return (
        <div className={`col_heroSectionCart_otr ${props.HeroSectionCartClass}`}>
            <div className='col_heroSectionCart_inr'>
                <div className='title_otr'>
                    <p className='title heading-xsm'>{props.HeroSectionCartTitle}</p>
                </div>
                <p className='desc heading-xs'>{props.HeroSectionCartDescription}</p>
                <p className='date heading-xs'>{props.HeroSectionCartDate}</p>
            </div>
        </div>
    )
}

export default HeroSectionCart
