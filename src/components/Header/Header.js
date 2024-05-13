import React from 'react';
import { Link } from 'react-router-dom';
import ThemeBtn from '../ThemeBtn/ThemeBtn';
import './Header.scss';

import brandLogo from '../../img/brand logo.png'

const Header = () => {
    return (
        <header className='header'>
            <div className='container'>
                <div className='header_wrapper'>
                    <div className='logo_main'>
                        <Link className='logo_otr' to='/'>
                            <img className='logo' src={brandLogo} alt='Brand LOGO' />
                        </Link>
                    </div>
                    <nav className='nav_otr'>
                        <ul className='menu_ul'>
                            <li className='menu_li'>
                                <Link className='menu_linkk heading-m' to='/'>
                                    <span>
                                        Home
                                    </span>
                                </Link>
                            </li>
                            <li className='menu_li'>
                                <Link className='menu_linkk heading-m' to='/about'>
                                    <span>
                                        About
                                    </span>
                                </Link>
                            </li>
                            <li className='menu_li'>
                                <Link className='menu_linkk heading-m' to='/services'>
                                    <span>
                                        Services
                                    </span>
                                </Link>
                            </li>
                            <li className='menu_li'>
                                <Link className='menu_linkk heading-m' to='/pricing'>
                                    <span>
                                        Pricing
                                    </span>
                                </Link>
                            </li>
                            <li className='menu_li dropdown_hold_li'>
                                <div className='menu_linkk heading-m'>
                                    <span>
                                        Pages
                                    </span>
                                    <i class="icon ri-arrow-down-s-fill"></i>
                                </div>
                                <div className='dropdown_otr'>
                                    <ul className='dropdown_ul'>
                                        <li className='dropdown_li'>
                                            <Link className='dropdown_linkk heading-s' to='/team'>
                                                <span>
                                                    Team
                                                </span>
                                            </Link>
                                        </li>
                                        <li className='dropdown_li'>
                                            <Link className='dropdown_linkk heading-s' to='/faq'>
                                                <span>
                                                    Faq
                                                </span>
                                            </Link>
                                        </li>
                                        <li className='dropdown_li'>
                                            <Link className='dropdown_linkk heading-s'>
                                                <span>
                                                    Testimonials
                                                </span>
                                            </Link>
                                        </li>
                                        <li className='dropdown_li'>
                                            <Link className='dropdown_linkk heading-s' to='/shop'>
                                                <span>
                                                    Shop
                                                </span>
                                            </Link>
                                        </li>
                                        <li className='dropdown_li'>
                                            <Link className='dropdown_linkk heading-s' to='/blog'>
                                                <span>
                                                    Blog
                                                </span>
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </li>
                        </ul>
                    </nav>
                    <div className='action_main'>
                        <Link className='action_otr' to='/contact-us'>
                            <ThemeBtn 

                                ButtonClass='header_btn'
                                ButtonText='Contact Us'
                            />
                        </Link>
                        <div className='cart_main'>
                            <Link className='cart_otr'>
                                <i class="icon ri-shopping-bag-line"></i>
                            </Link>
                        </div>
                        <div className='menu_icon_otr'>
                            <i class="icon ri-menu-4-fill"></i>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header
