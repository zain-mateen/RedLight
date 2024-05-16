import React from 'react';
import ChooseUsSection from '../../components/ChooseUsSection/ChooseUsSection';
import CyberSecurityProviderSection from '../../components/CyberSecurityProviderSection/CyberSecurityProviderSection';
import TeamSection from '../../components/TeamSection/TeamSection';
import AboutSection from '../../components/AboutSection/AboutSection';
import './AboutPage.scss';
import PagesHeader from '../../components/Header/PagesHeader';
import TestimonialSection from '../../components/TestimonialSection/TestimonialSection';

const AboutPage = () => {
    return (
        <>
            <section className='AboutPage'>
                <div className='container'>
                    <PagesHeader 
                        PagesWrapperHeading="About Us"
                        PagesWrapperDescription="Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusm tempor incididunt ut labore et dolore magna aliqua."
                        PagesWrapperCurrentPageLink='/about'
                        PagesWrapperCurrentPageText="About Us"
                    />
                    <AboutSection />
                </div>
            </section>
            <ChooseUsSection />
            <CyberSecurityProviderSection />
            <TestimonialSection />
            <TeamSection />  
        </>
    )
}

export default AboutPage;
