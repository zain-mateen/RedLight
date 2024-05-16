import React from 'react'
import './FaqPage.scss'
import PagesHeader from '../../components/Header/PagesHeader'

import faqImage from '../../img/faq-section-img.png'
import { Accordion } from 'react-bootstrap'
import FaqCart from '../../components/FaqSection/FaqCart'
import { FaqPageData } from './FaqPageArray'
import { FaqPageSecondData } from './FaqPageArray2'
import { FaqPageThirdData } from './FaqPageArray3'

const FaqPage = () => {
    return (
        <section className='FaqPage'>
            <div className='container'>
                <PagesHeader 
                    PagesWrapperHeading="FAQ"
                    PagesWrapperDescription="Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusm tempor incididunt ut labore et dolore magna aliqua."
                    PagesWrapperCurrentPageLink='/faq'
                    PagesWrapperCurrentPageText="FAQ"
                />
                <div className='row row_custom'>
                    <div className='col-lg-6 col_img_otr'>
                        <div className='col_img_inr'>
                            <img className='img' src={faqImage} alt='img' />
                        </div>
                    </div>
                    <div className='col-lg-6 col_faq_otr'>
                        <div className='col_faq_inr'>
                            <h2 className='heading heading-h2'>General Questions Frequently Asked Questions?</h2>
                            {FaqPageData.map((data)=>{
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
                <div className='row row_custom2'>
                    <div className='col-lg-6 col_faq_otr'>
                        <div className='col_faq_inr'>
                            {FaqPageSecondData.map((data)=>{
                                return (
                                    <Accordion>
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
                    <div className='col-lg-6 col_faq_otr'>
                        <div className='col_faq_inr'>
                            {FaqPageThirdData.map((data)=>{
                                return (
                                    <Accordion>
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
                    <div className='col-lg-6 col_responsive_img_otr'>
                        <div className='col_responsive_img_inr'>
                            <img className='responsive_img' src={faqImage} alt='img' />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default FaqPage
