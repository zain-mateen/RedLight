import React, { Fragment, useState } from 'react';
import { Link } from 'react-router-dom';

import Offcanvas from 'react-bootstrap/Offcanvas';
import brandLogo from '../../img/brand logo.png'
import Accordion from 'react-bootstrap/Accordion';

import ThemeBtn from '../ThemeBtn/ThemeBtn';

import './Header.scss';

const Header = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <Fragment>
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
                                                <Link className='dropdown_linkk heading-s' to='/testimonials'>
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
                            <div className='menu_icon_otr' onClick={handleShow}>
                                <i class="icon ri-menu-4-fill"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
            <Offcanvas show={show} onHide={handleClose}>
                <Offcanvas.Header>
                    <Link className='logo_otr'>
                        <img className='logo' src={brandLogo} alt='Brand Logo' />
                    </Link>
                    <div className='close_icon_otr' onClick={handleClose}>
                        <i class="icon ri-close-fill"></i>
                    </div>
                </Offcanvas.Header>
                <Offcanvas.Body>
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
                            <li className='menu_li'>
                                <Accordion>
                                    <Accordion.Item eventKey='0'>
                                        <Accordion.Header>
                                            <span className='text heading-m'>Pages</span>
                                            <i class="arrow ri-arrow-down-s-line"></i>
                                        </Accordion.Header>
                                        <Accordion.Body>
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
                                                    <Link className='dropdown_linkk heading-s' to='/testimonials'>
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
                                        </Accordion.Body>
                                    </Accordion.Item>
                                </Accordion>
                            </li>
                        </ul>
                    </nav>
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
                    <div className='action_otr'>
                        <Link className='action_inr'>
                            <ThemeBtn 
                                ButtonClass='contact_btn header_btn'
                                ButtonText='Contact Us'
                            />
                        </Link>
                    </div>
                </Offcanvas.Body>
            </Offcanvas>
        </Fragment>
    )
}

export default Header
