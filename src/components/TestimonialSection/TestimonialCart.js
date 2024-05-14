import { Star } from 'phosphor-react';
import React from 'react';
import { Link } from 'react-router-dom';
import './TestimonialSection.scss'

function TestimonialCart(props) {
    return (
        <div className='col_testimonialCart_otr'>
            <div className='col_testimonialCart_inr'>
                <div className='profile_content'>
                    <div className='profile_otr'>
                        <img className='profile' src={props.TestimonialCartCreatorProfileImage} alt='Creator' />
                    </div>
                    <div className='content'>
                        <Link className='heading heading-h4'>{props.TestimonialCartHeading}</Link>
                        <p className='text heading-s'>{props.TestimonialCartProfession}</p>
                    </div>
                </div>
                <div className='desc_star'>
                    <p className='desc heading-s'>{props.TestimonialCartDescription}</p>
                    <div className='star_otr'>
                        <ul className='star_ul'>
                            <li className='star_li'>
                                <Star size={24} weight='fill' />
                            </li>
                            <li className='star_li'>
                                <Star size={24} weight='fill' />
                            </li>
                            <li className='star_li'>
                                <Star size={24} weight='fill' />
                            </li>
                            <li className='star_li'>
                                <Star size={24} weight='fill' />
                            </li>
                            <li className='star_li'>
                                <Star size={24} weight='fill' />
                            </li>
                        </ul>
                    </div>
                </div>
                <div className='pos_icon'>
                    <i class="icon ri-double-quotes-l"></i>
                </div>
            </div>
        </div>
    )
}

export default TestimonialCart
