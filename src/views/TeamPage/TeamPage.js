import React from 'react';
import './TeamPage.scss';

import PagesHeader from '../../components/Header/PagesHeader'
import { TeamPageData } from './TeamPageArray';
import TeamSectionCart from '../../components/TeamSection/TeamSectionCart'


const TeamPage = () => {
    return (
        <section className='TeamPage'>
            <div className='container'>
                <PagesHeader 
                    PagesWrapperHeading="Our Expert Team"
                    PagesWrapperDescription="Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusm tempor incididunt ut labore et dolore magna aliqua."
                    PagesWrapperCurrentPageLink='/team'
                    PagesWrapperCurrentPageText="Our Expert Team"
                />
                <div className='row row_custom'>
                    {TeamPageData.map((data)=>{
                        return (
                            <TeamSectionCart 
                                key={data.id}
                                TeamSectionCartCLass='col-lg-4 col-md-6 col-sm-6'
                                TeamSectionCartImage={data.TeamSectionCartImage}
                                TeamSectionCartCreatorName={data.TeamSectionCartCreatorName}
                                TeamSectionCartProfession={data.TeamSectionCartProfession}
                                TeamSectionCartDescription={data.TeamSectionCartDescription}
                                TeamCart_Instagram={data.TeamCart_Instagram}
                                TeamCart_Facebook={data.TeamCart_Facebook}
                                TeamCart_Twitter={data.TeamCart_Twitter}
                            />
                        )
                    })}
                </div>
            </div>
        </section>
    )
}

export default TeamPage
