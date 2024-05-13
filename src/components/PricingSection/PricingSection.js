import React from 'react';
import HeaderInner from '../Header/HeaderInner';
import './PricingSection.scss';
import { PricingSectionData } from './PricingSectionArray';
import PricingCart from './PricingCart';

import positionImage from '../../img/chooseUs-position-img.png'

const PricingSection = () => {
    return (
        <section className='PricingSection'>
            <div className='container'>
                <HeaderInner 
                    HeaderWrapperHeading="Your Pricing Plan"
                    HeaderWrapperDescription="Lorem ipsum dolor sit amet consectetuer adipiscing elitenean commodo ligula eget dolorenean massa."
                />
                <div className='row row_custom'>
                    {PricingSectionData.map((data)=>{
                        return (
                            <PricingCart 
                                key={data.id}
                                PricingCartClass='col-lg-4 col-md-6'
                                PricingCartIcon={data.PricingCartIcon}
                                PricingCartPricingLevel={data.PricingCartPricingLevel}
                                PricingCartPricingRate={data.PricingCartPricingRate}
                                PricingCartPricingRateMonth={data.PricingCartPricingRateMonth}
                                PricingCartText1={data.PricingCartText1}
                                PricingCartText2={data.PricingCartText2}
                                PricingCartText3={data.PricingCartText3}
                                PricingCartText4={data.PricingCartText4}
                                PricingCartText5={data.PricingCartText5}
                                PricingCartText6={data.PricingCartText6}
                            />
                        )
                    })}
                </div>
            </div>
            <img className='pos_img' src={positionImage} alt='Position img' />
        </section>
    )
}

export default PricingSection
