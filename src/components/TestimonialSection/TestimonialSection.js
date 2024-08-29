import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import './TestimonialSection.scss';

import 'swiper/css';
import HeaderInner from '../Header/HeaderInner';
import TestimonialCart from './TestimonialCart';

import { TestimonialData } from '../../Data';

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
                        {TestimonialData.map((testimonial) => (
                            <SwiperSlide key={testimonial.id}>
                                <TestimonialCart
                                    TestimonialCartCreatorProfileImage={testimonial.profileImage}
                                    TestimonialCartHeading={testimonial.heading}
                                    TestimonialCartProfession={testimonial.profession}
                                    TestimonialCartDescription={testimonial.description}
                                />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </div>
    )
}

export default TestimonialSection
