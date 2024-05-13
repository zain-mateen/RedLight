import React from 'react';
import './FaqSection.scss';

import faqImage from '../../img/faq-section-img.png'
import { FaqSectionData } from './FaqSectionArray';
import FaqCart from './FaqCart';
import Accordion from 'react-bootstrap/Accordion';

const FaqSection = () => {
    return (
        <section className='FaqSection'>
            <div className='container'>
                <div className='row row_custom'>
                    <div className='col-lg-6 col_img_otr'>
                        <div className='col_img_inr'>
                            <img className='img' src={faqImage} alt='img' />
                        </div>
                    </div>
                    <div className='col-lg-6 col_faq_otr'>
                        <div className='col_faq_inr'>
                            <h2 className='heading heading-h2'>General Questions Frequently Asked Questions?</h2>
                            {FaqSectionData.map((data)=>{
                                return (
                                    <Accordion defaultActiveKey="0">
                                        <FaqCart
                                            key={data.id}
                                            KeyNum={data.KeyNum}
                                            FaqCartNumber={data.FaqCartNumber}
                                            FaqCartHeading={data.FaqCartHeading}
                                            FAQCartDesc={data.FAQCartDesc}
                                        />
                                    </Accordion>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default FaqSection
