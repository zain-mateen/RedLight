import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import './TestimonialSection.scss';

import 'swiper/css';
import HeaderInner from '../Header/HeaderInner';
import TestimonialCart from './TestimonialCart';

import creatorImage1 from '../../img/testimonial-img1.png'

const TestimonialSection = () => {
    return (
        <div className='TestimonialSection'>
            <div className='container'>
                <HeaderInner 
                    HeaderWrapperHeading="What Clients Says"
                    HeaderWrapperDescription="Lorem ipsum dolor sit amet consectetuer adipiscing elitenean commodo ligula eget dolorenean massa."
                />
                <div className='swiper_main'>
                    <Swiper
                        spaceBetween={24}
                        slidesPerView={2}
                        onSlideChange={() => console.log('slide change')}
                        onSwiper={(swiper) => console.log(swiper)}
                    >
                        <SwiperSlide>
                            <TestimonialCart 
                                TestimonialCartCreatorProfileImage={creatorImage1}
                                TestimonialCartHeading="Spencer Simpson"
                                TestimonialCartProfession="CEO - Company"
                                TestimonialCartDescription="Lorem ipsum dolor sit amet consectetuer adipiscing elitenea ncom modo ligula eget dolor aenean massa cum sociis nato que penatibus etmagnis dis parturient montes"
                            />
                        </SwiperSlide>
                        <SwiperSlide>
                            <TestimonialCart 
                                TestimonialCartCreatorProfileImage={creatorImage1}
                                TestimonialCartHeading="Spencer Simpson"
                                TestimonialCartProfession="CEO - Company"
                                TestimonialCartDescription="Lorem ipsum dolor sit amet consectetuer adipiscing elitenea ncom modo ligula eget dolor aenean massa cum sociis nato que penatibus etmagnis dis parturient montes"
                            />
                        </SwiperSlide>
                        <SwiperSlide>
                            <TestimonialCart 
                                TestimonialCartCreatorProfileImage={creatorImage1}
                                TestimonialCartHeading="Spencer Simpson"
                                TestimonialCartProfession="CEO - Company"
                                TestimonialCartDescription="Lorem ipsum dolor sit amet consectetuer adipiscing elitenea ncom modo ligula eget dolor aenean massa cum sociis nato que penatibus etmagnis dis parturient montes"
                            />
                        </SwiperSlide>
                        <SwiperSlide>
                            <TestimonialCart 
                                TestimonialCartCreatorProfileImage={creatorImage1}
                                TestimonialCartHeading="Spencer Simpson"
                                TestimonialCartProfession="CEO - Company"
                                TestimonialCartDescription="Lorem ipsum dolor sit amet consectetuer adipiscing elitenea ncom modo ligula eget dolor aenean massa cum sociis nato que penatibus etmagnis dis parturient montes"
                            />
                        </SwiperSlide>
                    </Swiper>
                </div>
            </div>
        </div>
    )
}

export default TestimonialSection
