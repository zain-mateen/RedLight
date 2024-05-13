import React from 'react';
import HeaderInner from '../Header/HeaderInner';
import { WhatWeOfferSectionData } from './WhatWeOfferSectionArray';
import ChooseUsSectionCart from '../ChooseUsSection/ChooseUsSectionCart';
import './WhatWeOfferSection.scss';

import positionImage from '../../img/footer-position-img.png'

const WhatWeOfferSection = () => {
    return (
        <section className='WhatWeOfferSection'>
            <div className='container'>
                <HeaderInner 
                    HeaderWrapperHeading="What We Offer"
                    HeaderWrapperDescription="Lorem ipsum dolor sit amet consectetuer adipiscing elitenean commodo ligula eget dolorenean massa."
                />
                <div className='row row_custom'>
                    {WhatWeOfferSectionData.map((data)=>{
                        return (
                            <ChooseUsSectionCart 
                                key={data.id}
                                ChooseUsCartClass='col-lg-4 col-md-6'
                                ChooseUsCartIcon={data.ChooseUsCartIcon}
                                ChooseUsCartHeading={data.ChooseUsCartHeading}
                                ChooseUsCartDescription={data.ChooseUsCartDescription}
                            />
                        )
                    })}
                </div>
            </div>
            <img className='pos_img' src={positionImage} alt='Position img' />
        </section>
    )
}

export default WhatWeOfferSection
