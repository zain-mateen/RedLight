import React from 'react';
import HeaderInner from '../Header/HeaderInner';
import { ChooseUsSectionData } from './ChooseUsSectionArray';
import ChooseUsSectionCart from './ChooseUsSectionCart';

import positionImage from '../../img/chooseUs-position-img.png'

const ChooseUsSection = () => {
    return (
        <section className='ChooseUsSection'>
            <div className='container'>
                <HeaderInner 
                    HeaderWrapperHeading="Why Choose Us"
                    HeaderWrapperDescription="Lorem ipsum dolor sit amet consectetuer adipiscing elitenean commodo ligula eget dolorenean massa."
                />
                <div className='row row_custom'>
                    {ChooseUsSectionData.map((data)=>{
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
            <img className='pos_img' src={positionImage} alt='Postion img' />
        </section>
    )
}

export default ChooseUsSection
