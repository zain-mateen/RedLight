import React from 'react';
import './TestimonialsPage.scss';
import PagesHeader from '../../components/Header/PagesHeader';
import { TestimonialPageData } from './TestimonialsPageArray';
import TestimonialCart from '../../components/TestimonialSection/TestimonialCart';

const TestimonialsPage = () => {
    return (
        <div className='TestimonialsPage'>
            <div className='container'>
                <PagesHeader 
                    PagesWrapperHeading="Testimonials"
                    PagesWrapperDescription="Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusm tempor incididunt ut labore et dolore magna aliqua."
                    PagesWrapperCurrentPageLink="/testimonials"
                    PagesWrapperCurrentPageText="Testimonials"
                />
                <div className='row row_custom'>
                    {TestimonialPageData.map((data) => {
                        return (
                            <TestimonialCart 
                                key={data.id}
                                TestimonialCartClass="col-lg-6"
                                TestimonialCartCreatorProfileImage={data.TestimonialCartCreatorProfileImage}
                                TestimonialCartHeading={data.TestimonialCartHeading}
                                TestimonialCartProfession={data.TestimonialCartProfession}
                                TestimonialCartDescription={data.TestimonialCartDescription}
                            />
                        )    
                    })}
                </div>
            </div>
        </div>
    );
}

export default TestimonialsPage;
