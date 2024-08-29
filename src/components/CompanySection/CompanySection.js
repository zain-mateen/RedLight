import React from 'react';
import { Link } from 'react-router-dom';

import './CompanySection.scss';

import { CompanySectionData } from '../../Data';

const CompanySection = () => {
    return (
        <section className='CompanySection'>
            <div className='container'>
                <div className='wrapper'>
                    <h4 className='heading heading-h4'>Trusted Over 2300+ Companies in the World</h4>
                </div>
                <div className='logo_otr'>
                    <ul className='logo_ul'>
                        {CompanySectionData.map((item) => (
                            <li className='logo_li' key={item.id}>
                                <Link className='logo_linkk'>
                                    <img className='logo_img' src={item.logoImage} alt={item.companyTitle} />
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    )
}

export default CompanySection
