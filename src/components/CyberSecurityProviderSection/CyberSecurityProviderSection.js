import React from 'react';
import ThemeBtn from '../ThemeBtn/ThemeBtn'
import './CyberSecurityProviderSection.scss';

import cyberSecurityImage from '../../img/cyber-security-img.png';
import { CyberSecurityProviderSectionStateCartData } from './CyberSecurityProviderSectionStateCartArray';
import CyberSecuritySectionStateCart from './CyberSecurityProviderSectionStateCart';
import { Link } from 'react-router-dom';

const CyberSecurityProviderSection = () => {
    return (
        <section className='CyberSecuritySection'>
            <div className='container'>
                <div className='row row_custom'>
                    <div className='col-lg-6 col_img_otr'>
                        <div className='col_img_inr'>
                            <img className='img' src={cyberSecurityImage} alt='Cyber Security img' />
                        </div>
                    </div>
                    <div className='col-lg-6 col_content_otr'>
                        <div className='col_content_inr'>
                            <h2 className='heading heading-h2'>Advanced <span className='heading_inr'>Cyber Security</span> Provider</h2>
                            <p className='desc desc_1 heading-m'>Lorem ipsum dolor sit amet consectetuer adipiscing elitenean commo doligula eget dolorenean massa.In enim justo, rhoncus ut, imperdiet avene natis vitae justo nullam dictum felis eu pede mollis pretium Inte ger tincid unt cras dapibus</p>
                            <p className='desc desc_2 heading-m'>Vamus elementum semper nisi aenean vulputate eleife nd tellus onsec tet ueradip.</p>
                            <Link className='action_otr' to='/contact-us'>
                                <ThemeBtn 
                                    ButtonClass='border_btn'
                                    ButtonText='Contact Us'
                                />
                            </Link>
                        </div>
                    </div>
                </div>
                <div className='row state_row_custom'>
                    {CyberSecurityProviderSectionStateCartData.map((data)=>{
                        return (
                            <CyberSecuritySectionStateCart 
                                key={data.id}
                                CyberSecuritySectionStateCartClass='col-lg-3 col-md-6 col-sm-6'
                                CyberSecuritySectionStateCartIcon={data.CyberSecuritySectionStateCartIcon}
                                CyberSecuritySectionStateCartHeading={data.CyberSecuritySectionStateCartHeading}
                                CyberSecuritySectionStateCartText={data.CyberSecuritySectionStateCartText}
                            />
                        )
                    })}
                </div>
            </div>
        </section>
    )
}

export default CyberSecurityProviderSection;
