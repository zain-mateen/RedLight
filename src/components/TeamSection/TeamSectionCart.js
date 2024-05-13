import React from 'react';
import { Link } from 'react-router-dom';
import './TeamSection.scss';

function TeamSectionCart(props) {
    return (
        <div className={`col_teamCart_otr ${props.TeamSectionCartCLass}`}>
            <div className='col_teamCart_inr'>
                <Link className='img_otr'>
                    <img className='img' src={props.TeamSectionCartImage} alt='Creator' />
                </Link>
                <div className='content_otr'>
                    <Link className='heading heading-h4'>{props.TeamSectionCartCreatorName}</Link>
                    <p className='text heading-s'>{props.TeamSectionCartProfession}</p>
                    <p className='desc heading-s'>{props.TeamSectionCartDescription}</p>
                    <ul className="social_ul">
                        {props.TeamCart_Instagram && (
                            <li className="social_li">
                                <a className="social_linkk" href={props.TeamCart_Instagram}>
                                    <i class="social_icon ri-instagram-line"></i>
                                </a>
                            </li>
                        )}
                        {props.TeamCart_Facebook && (
                            <li className="social_li">
                                <a className="social_linkk" href={props.TeamCart_Facebook}>
                                    <i class="social_icon ri-facebook-fill"></i>
                                </a>
                            </li>
                        )}
                        {props.TeamCart_Twitter && (
                            <li className="social_li">
                                <a className="social_linkk" href={props.TeamCart_Twitter}>
                                    <i class="social_icon ri-twitter-fill"></i>
                                </a>
                            </li>
                        )}
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default TeamSectionCart
