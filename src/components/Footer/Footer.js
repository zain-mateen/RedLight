import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.scss';

import brandLogo from '../../img/brand logo.png'
import leftPositionImage from '../../img/footer-position-img.png'
import ThemeBtn from '../ThemeBtn/ThemeBtn';
import ThemeInput from '../ThemeInput/ThemeInput';

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
                                        <li className='social_li'>
                                            <a className='social_a' href='/'>
                                                <i class="social_icon ri-facebook-fill"></i>
                                            </a>
                                        </li>
                                        <li className='social_li'>
                                            <a className='social_a' href='/'>
                                                <i class="social_icon ri-instagram-line"></i>
                                            </a>
                                        </li>
                                        <li className='social_li'>
                                            <a className='social_a' href='/'>
                                                <i class="social_icon ri-twitter-fill"></i>
                                            </a>
                                        </li>
                                        <li className='social_li'>
                                            <a className='social_a' href='/'>
                                                <i class="social_icon ri-linkedin-fill"></i>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className='col-lg-3 col-md-6 col-sm-6 col_navigation_otr'>
                            <div className='col_navigation_inr'>
                                <p className='heading heading-lm'>Services</p>
                                <ul className='navigation_ul'>
                                    <li className='navigation_li'>
                                        <Link className='navigation_linkk' to='/services'>
                                            <i class="icon ri-arrow-right-s-fill"></i>
                                            <span>
                                                Security Training
                                            </span>
                                        </Link>
                                    </li>
                                    <li className='navigation_li'>
                                        <Link className='navigation_linkk' to='/services'>
                                            <i class="icon ri-arrow-right-s-fill"></i>
                                            <span>
                                                Cloud Security
                                            </span>
                                        </Link>
                                    </li>
                                    <li className='navigation_li'>
                                        <Link className='navigation_linkk' to='/services'>
                                            <i class="icon ri-arrow-right-s-fill"></i>
                                            <span>
                                                Secure Mangaged IT
                                            </span>
                                        </Link>
                                    </li>
                                    <li className='navigation_li'>
                                        <Link className='navigation_linkk' to='/services'>
                                            <i class="icon ri-arrow-right-s-fill"></i>
                                            <span>
                                                Data Privacy
                                            </span>
                                        </Link>
                                    </li>
                                    <li className='navigation_li'>
                                        <Link className='navigation_linkk' to='/services'>
                                            <i class="icon ri-arrow-right-s-fill"></i>
                                            <span>
                                                Industry Certified
                                            </span>
                                        </Link>
                                    </li>
                                    <li className='navigation_li'>
                                        <Link className='navigation_linkk' to='/services'>
                                            <i class="icon ri-arrow-right-s-fill"></i>
                                            <span>
                                                Threat Intelligence
                                            </span>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className='col-lg-2 col-md-6 col-sm-6 col_navigation_otr'>
                            <div className='col_navigation_inr'>
                                <p className='heading heading-lm'>Support</p>
                                <ul className='navigation_ul'>
                                    <li className='navigation_li'>
                                        <Link className='navigation_linkk'>
                                            <i class="icon ri-arrow-right-s-fill"></i>
                                            <span>
                                                Support
                                            </span>
                                        </Link>
                                    </li>
                                    <li className='navigation_li'>
                                        <Link className='navigation_linkk' to='/contact-us'>
                                            <i class="icon ri-arrow-right-s-fill"></i>
                                            <span>
                                                Contact Us
                                            </span>
                                        </Link>
                                    </li>
                                    <li className='navigation_li'>
                                        <Link className='navigation_linkk'>
                                            <i class="icon ri-arrow-right-s-fill"></i>
                                            <span>
                                                Knowledge Base
                                            </span>
                                        </Link>
                                    </li>
                                    <li className='navigation_li'>
                                        <Link className='navigation_linkk' to='/about'>
                                            <i class="icon ri-arrow-right-s-fill"></i>
                                            <span>
                                                About Us
                                            </span>
                                        </Link>
                                    </li>
                                    <li className='navigation_li'>
                                        <Link className='navigation_linkk' to='/faq'>
                                            <i class="icon ri-arrow-right-s-fill"></i>
                                            <span>
                                                FAQ
                                            </span>
                                        </Link>
                                    </li>
                                    <li className='navigation_li'>
                                        <Link className='navigation_linkk' to='/pricing'>
                                            <i class="icon ri-arrow-right-s-fill"></i>
                                            <span>
                                                Partnerships
                                            </span>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className='col-lg-3 col_contact_otr'>
                            <div className='col_contact_inr'>
                                <p className='heading heading-lm'>Get in Touch</p>
                                <ul className='contact_ul'>
                                    <li className='contact_li'>
                                        <p className='text heading-sm'>Email:</p>
                                        <a className='text_link heading-s' href='mailto:zainmateen259@gmail.com'>zainmateen259@gmail.com</a>
                                    </li>
                                    <li className='contact_li'>
                                        <p className='text heading-sm'>Phone:</p>
                                        <a className='text_link heading-s' href='tel:03221713121'>03221713121</a>
                                    </li>
                                    <li className='contact_li'>
                                        <p className='text heading-sm'>Address:</p>
                                        <p className='text_address heading-s'>King Street Melbourne, 3000, Australia</p>
                                    </li>
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

export default Footer
