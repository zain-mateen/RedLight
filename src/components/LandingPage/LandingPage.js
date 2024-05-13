import React from 'react';
import ChooseUsSection from '../ChooseUsSection/ChooseUsSection';
import CompanySection from '../CompanySection/CompanySection';
import CyberSecurityProviderSection from '../CyberSecurityProviderSection/CyberSecurityProviderSection';
import CyberSecuritySolutionSection from '../CyberSecuritySolutionSection/CyberSecuritySolutionSection';
import WhatWeOfferSection from '../WhatWeOfferSection/WhatWeOfferSection';
import BlogSection from '../BlogSection/BlogSection';
import TeamSection from '../TeamSection/TeamSection';
import HeroSection from '../HeroSection/HeroSection';
import PricingSection from '../PricingSection/PricingSection';
import FaqSection from '../FaqSection/FaqSection';


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
