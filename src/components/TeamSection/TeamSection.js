import React from 'react';
import './TeamSection.scss';
import HeaderInner from '../Header/HeaderInner';
import { TeamSectionData } from './TeamSectionArray';
import TeamSectionCart from './TeamSectionCart';

const TeamSection = () => {
    return (
        <section className='TeamSection'>
            <div className='container'>
                <HeaderInner 
                    HeaderWrapperHeading="Our Professional Team"
                    HeaderWrapperDescription="Lorem ipsum dolor sit amet consectetuer adipiscing elitenean commodo ligula eget dolorenean massa."
                />
                <div className='row row_custom'>
                    {TeamSectionData.map((data)=>{
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

export default TeamSection
