import React from 'react';
import FaqSection from '../../components/FaqSection/FaqSection';
import CompanySection from '../../components/CompanySection/CompanySection';
import './PricingPlanPage.scss';
import PagesHeader from '../../components/Header/PagesHeader';
import { PricingSectionData } from '../../components/PricingSection/PricingSectionArray';
import PricingCart from '../../components/PricingSection/PricingCart';

const PricingPlanPage = () => {
    return (
        <>
            <section className='PricingPage'>
                <div className='container'>
                    <PagesHeader 
                        PagesWrapperHeading="Plan and Pricing"
                        PagesWrapperDescription="Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusm tempor incididunt ut labore et dolore magna aliqua."
                        PagesWrapperCurrentPageLink='/pricing'
                        PagesWrapperCurrentPageText="Plan and Pricing"
                    />
                    <div className='row row_custom'>
                        {PricingSectionData.map((data)=>{
                            return (
                                <PricingCart 
                                    key={data.id}
                                    PricingCartClass='col-lg-4 col-md-6'
                                    PricingCartIcon={data.PricingCartIcon}
                                    PricingCartPricingLevel={data.PricingCartPricingLevel}
                                    PricingCartPricingRate={data.PricingCartPricingRate}
                                    PricingCartPricingRateMonth={data.PricingCartPricingRateMonth}
                                    PricingCartText1={data.PricingCartText1}
                                    PricingCartText2={data.PricingCartText2}
                                    PricingCartText3={data.PricingCartText3}
                                    PricingCartText4={data.PricingCartText4}
                                    PricingCartText5={data.PricingCartText5}
                                    PricingCartText6={data.PricingCartText6}
                                />
                            )
                        })}
                    </div>
                </div>
            </section>
            <CompanySection />
            <FaqSection />
        </>
    )
}

export default PricingPlanPage
