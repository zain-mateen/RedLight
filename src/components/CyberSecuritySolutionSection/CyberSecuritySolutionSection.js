import React from 'react';
import ThemeBtn from '../ThemeBtn/ThemeBtn';
import './CyberSecuritySolutionSection.scss';

import cyberSecuritySolutionImage from '../../img/cyber-security-right-img.png'

const CyberSecuritySolutionSection = () => {
    return (
        <section className='CyberSecuritySolutionSection'>
            <div className='container'>
                <div className='row row_custom'>
                    <div className='col-lg-6 col_content_otr'>
                        <div className='col_content_inr'>
                            <h2 className='heading heading-h2'>Providing Best <span className='heading_inr'>Cyber Security</span> Solutions</h2>
                            <p className='desc desc_1 heading-m'>Lorem ipsum dolor sit amet consectetuer adipiscing elitenean commo doligula eget dolorenean massa.In enim justo, rhoncus ut, imperdiet avene natis vitae justo nullam dictum felis eu pede mollis pretium Inte ger tincid unt cras dapibus</p>
                            <p className='desc desc_2 heading-m'>Vamus elementum semper nisi aenean vulputate eleife nd tellus onsec tet ueradip.</p>
                            <div className='action_otr'>
                                <ThemeBtn 
                                    ButtonClass='border_btn'
                                    ButtonText='Contact Us'
                                />
                            </div>
                        </div>
                    </div>
                    <div className='col-lg-6 col_img_otr'>
                        <div className='col_img_inr'>
                            <img className='img' src={cyberSecuritySolutionImage} alt='Cyber Security img' />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default CyberSecuritySolutionSection;
