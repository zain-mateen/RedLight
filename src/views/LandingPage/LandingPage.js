import React from 'react';
import ChooseUsSection from '../../components/ChooseUsSection/ChooseUsSection';
import CompanySection from '../../components/CompanySection/CompanySection';
import CyberSecurityProviderSection from '../../components/CyberSecurityProviderSection/CyberSecurityProviderSection';
import CyberSecuritySolutionSection from '../../components/CyberSecuritySolutionSection/CyberSecuritySolutionSection';
import WhatWeOfferSection from '../../components/WhatWeOfferSection/WhatWeOfferSection';
import BlogSection from '../../components/BlogSection/BlogSection';
import TeamSection from '../../components/TeamSection/TeamSection';
import HeroSection from '../../components/HeroSection/HeroSection';
import PricingSection from '../../components/PricingSection/PricingSection';
import FaqSection from '../../components/FaqSection/FaqSection';


const LandingPage = () => {
    return (
        <>
            <HeroSection />
            <CompanySection />
            <ChooseUsSection />
            <CyberSecurityProviderSection />
            <CyberSecuritySolutionSection />
            <WhatWeOfferSection />
            <FaqSection />
            <PricingSection />
            <TeamSection />
            <BlogSection />
        </>
    )
}

export default LandingPage
