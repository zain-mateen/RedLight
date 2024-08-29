import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.scss';

import brandLogo from '../../img/brand logo.png';
import leftPositionImage from '../../img/footer-position-img.png';
import ThemeBtn from '../ThemeBtn/ThemeBtn';
import ThemeInput from '../ThemeInput/ThemeInput';
import { FooterContactData, FooterNavigationData, SocialIcons } from '../../Data';

const Footer = () => {
    return (
        <>
            <section className='NewsLetter'>
                <div className='container'>
                    <div className='NewsLetter_wrapper'>
                        <div className='NewsLetter_content'>
                            <h2 className='heading heading-h2'>Subscribe Our Newsletter</h2>
                            <p className='desc heading-m'>Lorem ipsum dolor sit amet consectetuer adipiscing elitenean commodo ligula eget dolorenean massa.</p>
                            <div className='input_main'>
                                <ThemeInput 
                                    inputClass='NewsLetter_input'
                                    inputType='email'
                                    inputName='email'
                                    inputPlaceholder='Enter your Email Address'
                                />
                                <div className='action_otr'>
                                    <ThemeBtn 
                                        ButtonClass='primary_btn'
                                        ButtonText='Subscribe'
                                    />
                                </div>
                            </div>
                            <div className='responsive_action_otr'>
                                <ThemeBtn 
                                    ButtonClass='primary_btn'
                                    ButtonText='Subscribe'
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <footer className='footer'>
                <div className='container'>
                    <div className='row row_custom'>
                        <div className='col-lg-4 col_logo_otr'>
                            <div className='col_logo_inr'>
                                <Link className='logo_otr' to='/'>
                                    <img className='logo' src={brandLogo} alt='Brand LOGO' />
                                </Link>
                                <p className='desc heading-s'>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elitsed do eiusmod tempororem ipsum dolor sit am econsect ametconsectetetur adipiscing.
                                </p>
                                <div className='social_otr'>
                                    <ul className='social_ul'>
                                        {SocialIcons.map((icon) => (
                                            <li className='social_li' key={icon.id}>
                                                <a className='social_a' href='/'>{icon.icon}</a>
                                            </li>    
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                        {FooterNavigationData.map((item) => (
                            <div key={item.id} className={`col_navigation_otr ${item.className}`}>
                                <div className="col_navigation_inr">
                                    <p className='heading heading-lm'>{item.heading}</p>
                                    <ul className="navigation_ul">
                                        {item.NavigationItems.map((navigate) => (
                                            <li className="navigation_li" key={navigate.id}>
                                                <Link className="navigation_linkk" to={navigate.link}>
                                                    {navigate.icon}
                                                    <span>{navigate.name}</span>
                                                </Link>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        ))}
                        <div className='col-lg-3 col_contact_otr'>
                            <div className='col_contact_inr'>
                                <p className='heading heading-lm'>Get in Touch</p>
                                <ul className='contact_ul'>
                                    {FooterContactData.map((item) => (
                                        <li key={item.id} className='contact_li'>
                                            <p className='text heading-sm'>{item.heading}</p>
                                            {item.link ? (
                                                <a className='text_link heading-s' href={item.link}>{item.text}</a>
                                            ) : (
                                                <p className='text_address heading-s'>{item.text}</p>
                                            )}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className='copyright'>
                        <p className='copyright_text heading-s'>
                            Copyright 
                            <span className='copyright_text_inr heading-sm'>© Redlight</span>
                            2023. All rights reserved
                        </p>
                    </div>
                </div>
                <img className='pos_img' src={leftPositionImage} alt='img' />
            </footer>
        </>
    )
}

export default Footer;
