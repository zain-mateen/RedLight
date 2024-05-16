import React from 'react';

import ThemeBtn from '../ThemeBtn/ThemeBtn';

import './AboutSection.scss';

import img from '../../img/about-section-img.png'

const AboutSection = () => {
    return (
        <div className='About'>
            <div className='container'>
                <div className='row_custom_otr'>
                    <div className='row row_custom'>
                        <div className='col-lg-6 col_content_otr'>
                            <div className='col_content_inr'>
                                <h2 className='heading heading-h2'>24/7 Cyber Security Operation Center</h2>
                                <p className='desc heading-m'>
                                    Lorem ipsum dolor sit amet consectetuer adipiscing elitenean commodoligula egetmassa.
                                </p>
                                <ul className='list_ul'>
                                    <li className='list_li'>
                                        <div className='icon_otr'>
                                            <i class="icon ri-shield-star-fill"></i>
                                        </div>
                                        <p className='list_text heading-xs'>Website Security Services</p>
                                    </li>
                                    <li className='list_li'>
                                        <div className='icon_otr'>
                                            <i class="icon ri-shield-star-fill"></i>
                                        </div>
                                        <p className='list_text heading-xs'>SIEM Threat Detection</p>
                                    </li>
                                    <li className='list_li'>
                                        <div className='icon_otr'>
                                            <i class="icon ri-shield-star-fill"></i>
                                        </div>
                                        <p className='list_text heading-xs'>Content Delivery Network</p>
                                    </li>
                                    <li className='list_li'>
                                        <div className='icon_otr'>
                                            <i class="icon ri-shield-star-fill"></i>
                                        </div>
                                        <p className='list_text heading-xs'>24/7 Hours services</p>
                                    </li>
                                    <li className='list_li'>
                                        <div className='icon_otr'>
                                            <i class="icon ri-shield-star-fill"></i>
                                        </div>
                                        <p className='list_text heading-xs'>Security Management</p>
                                    </li>
                                    <li className='list_li'>
                                        <div className='icon_otr'>
                                            <i class="icon ri-shield-star-fill"></i>
                                        </div>
                                        <p className='list_text heading-xs'>Instant Malware Removal</p>
                                    </li>
                                    <li className='list_li'>
                                        <div className='icon_otr'>
                                            <i class="icon ri-shield-star-fill"></i>
                                        </div>
                                        <p className='list_text heading-xs'>Website Hack Repair</p>
                                    </li>
                                    <li className='list_li'>
                                        <div className='icon_otr'>
                                            <i class="icon ri-shield-star-fill"></i>
                                        </div>
                                        <p className='list_text heading-xs'>Instant Malware Removal</p>
                                    </li>
                                </ul>
                                <div className='action_main'>
                                    <div className='action_otr'>
                                        <ThemeBtn 
                                            ButtonClass='primary_btn'
                                            ButtonText='Order Sercices'
                                        />
                                    </div>
                                    <div className='action_otr'>
                                        <ThemeBtn 
                                            ButtonClass='border_btn'
                                            ButtonText='Free Quote'
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='col-lg-6 col_img_otr'>
                            <div className='col_img_inr'>
                                <img className='img' src={img} alt='img' />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutSection
