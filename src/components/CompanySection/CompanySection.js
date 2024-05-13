import React from 'react';
import { Link } from 'react-router-dom';
import './CompanySection.scss';

import companyLogo1 from '../../img/companies-logo1.png'
import companyLogo2 from '../../img/companies-logo2.png'
import companyLogo3 from '../../img/companies-logo3.png'
import companyLogo4 from '../../img/companies-logo4.png'
import companyLogo5 from '../../img/companies-logo5.png'
import companyLogo6 from '../../img/companies-logo6.png'

const CompanySection = () => {
    return (
        <section className='CompanySection'>
            <div className='container'>
                <div className='wrapper'>
                    <h4 className='heading heading-h4'>Trusted Over 2300+ Companies in the World</h4>
                </div>
                <div className='logo_otr'>
                    <ul className='logo_ul'>
                        <li className='logo_li'>
                            <Link className='logo_linkk'>
                                <img className='logo_img' src={companyLogo1} alt='Craft Company LOGO' />
                            </Link>
                        </li>
                        <li className='logo_li'>
                            <Link className='logo_linkk'>
                                <img className='logo_img' src={companyLogo2} alt='Minimum Company LOGO' />
                            </Link>
                        </li>
                        <li className='logo_li'>
                            <Link className='logo_linkk'>
                                <img className='logo_img' src={companyLogo3} alt='Hype Company LOGO' />
                            </Link>
                        </li>
                        <li className='logo_li'>
                            <Link className='logo_linkk'>
                                <img className='logo_img' src={companyLogo4} alt='Power XR2 Modules Company LOGO' />
                            </Link>
                        </li>
                        <li className='logo_li'>
                            <Link className='logo_linkk'>
                                <img className='logo_img' src={companyLogo5} alt='Company LOGO' />
                            </Link>
                        </li>
                        <li className='logo_li'>
                            <Link className='logo_linkk'>
                                <img className='logo_img' src={companyLogo6} alt='Hyper Best Company LOGO' />
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    )
}

export default CompanySection
