import React from 'react';
import './ServicesPage.scss';
import CompanySection from '../../components/CompanySection/CompanySection';
import AboutSection from '../../components/AboutSection/AboutSection';
import { WhatWeOfferSectionData } from '../../components/WhatWeOfferSection/WhatWeOfferSectionArray';
import ChooseUsSectionCart from '../../components/ChooseUsSection/ChooseUsSectionCart';
import PagesHeader from '../../components/Header/PagesHeader';

const ServicesPage = () => {
    return (
        <>
            <section className='ServicePage'>
                <div className='container'>
                    <PagesHeader 
                        PagesWrapperHeading="Our Services"
                        PagesWrapperDescription="Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusm tempor incididunt ut labore et dolore magna aliqua."
                        PagesWrapperCurrentPageLink='/services'
                        PagesWrapperCurrentPageText="Our Services"
                    />
                    <div className='row row_custom'>
                        {WhatWeOfferSectionData.map((data)=>{
                            return (
                                <ChooseUsSectionCart 
                                     key={data.id}
                                    ChooseUsCartClass='col-lg-6 col-md-6'
                                    ChooseUsCartIcon={data.ChooseUsCartIcon}
                                    ChooseUsCartHeading={data.ChooseUsCartHeading}
                                    ChooseUsCartDescription={data.ChooseUsCartDescription}
                                />
                            )
                        })}
                    </div>
                </div>
            </section>
            <CompanySection />
            <AboutSection />
        </>
    )
}

export default ServicesPage
