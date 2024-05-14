import React from 'react';
import ThemeBtn from '../ThemeBtn/ThemeBtn'
import './PricingSection.scss';
import { Link } from 'react-router-dom';

function PricingCart(props) {
    return (
        <div className={`col_pricingCart_otr ${props.PricingCartClass}`}>
            <div className='col_pricingCart_inr'>
                <div className='icon_otr'>
                    <img className='icon' src={props.PricingCartIcon} alt='Icon' />
                </div>
                <h4 className='heading heading-h4'>{props.PricingCartPricingLevel}</h4>
                <h2 className='price heading-h2'>{props.PricingCartPricingRate}
                    <span className='price_inr heading-lb'>{props.PricingCartPricingRateMonth}</span>
                </h2>
                <ul className='pricing_ul'>
                    <li className='pricing_li'>
                        <p className='pricing_text heading-m'>{props.PricingCartText1}</p>
                    </li>
                    <li className='pricing_li'>
                        <p className='pricing_text heading-m'>{props.PricingCartText2}</p>
                    </li>
                    <li className='pricing_li'>
                        <p className='pricing_text heading-m'>{props.PricingCartText3}</p>
                    </li>
                    <li className='pricing_li'>
                        <p className='pricing_text heading-m'>{props.PricingCartText4}</p>
                    </li>
                    <li className='pricing_li'>
                        <p className='pricing_text heading-m'>{props.PricingCartText5}</p>
                    </li>
                    <li className='pricing_li'>
                        <p className='pricing_text heading-m'>{props.PricingCartText6}</p>
                    </li>
                </ul>
                <Link className='action_otr' to='/pricing'>
                    <ThemeBtn 
                        ButtonClass='border_btn'
                        ButtonText='Order Now'
                    />
                </Link>
            </div>
        </div>
    )
}

export default PricingCart
