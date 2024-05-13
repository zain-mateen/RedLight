import React from 'react';
import './HeroSection.scss';

import heroSectionImage from '../../img/hero-img.png'
import { HeroSectionCartData } from './HeroSectionCartArray';
import HeroSectionCart from './HeroSectionCart';
import ThemeBtn from '../ThemeBtn/ThemeBtn';
import { Link } from 'react-router-dom';

const HeroSection = () => {
    return (
        <section className='HeroSection'>
            <div className='container'>
                <div className='row row_custom'>
                    <div className='col-lg-7 col_content_otr'>
                        <div className='col_content_inr'>
                            <p className='title heading-lb'>Cyber Security Solutions for</p>
                            <h1 className='heading heading-h1'>Organizations with Critical Infrastructure</h1>
                            <p className='desc heading-l'>
                                Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusm tempor incididunt ut labore et dolore magna aliqua.
                            </p>
                            <div className='action_main'>
                                <Link className='action_otr' to='/services'>
                                    <ThemeBtn 
                                        ButtonClass='primary_btn'
                                        ButtonText='Discover More'
                                    />
                                </Link>
                                <div className='action_otr'>
                                    <div className='play_btn'>
                                        <i class="icon ri-play-fill"></i>
                                    </div>
                                </div>
                            </div>
                            <div className='social_otr'>
                                <div className='social_line'></div>
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
                    <div className='col-lg-5 col_img_otr'>
                        <div className='col_img_inr'>
                            <img className='img' src={heroSectionImage} alt='img' />
                        </div>
                    </div>
                </div>
                <div className='row row_custom2'>
                    {HeroSectionCartData.map((data)=>{
                        return (
                            <HeroSectionCart 
                                key={data.id}
                                HeroSectionCartClass='col-lg-4 col-md-4'
                                HeroSectionCartTitle={data.HeroSectionCartTitle}
                                HeroSectionCartDescription={data.HeroSectionCartDescription}
                                HeroSectionCartDate={data.HeroSectionCartDate}
                            />
                        )
                    })}
                </div>
            </div>
        </section>
    )
}

export default HeroSection
