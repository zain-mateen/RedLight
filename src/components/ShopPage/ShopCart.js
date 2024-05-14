import React from 'react';
import { Link } from 'react-router-dom';
import ThemeBtn from '../ThemeBtn/ThemeBtn';
import './ShopPage.scss';

function ShopCart(props) {
    return (
        <div className={`col_shopCart_otr ${props.ShopCartClass}`}>
            <div className='col_shopCart_inr'>
                <div className='img_main'>
                    <Link className='img_otr' to='/product-detail'>
                        <img className='img' src={props.ShopCartImage} alt='img' />
                    </Link>
                </div>
                <div className='content_otr'>
                    <Link className='heading heading-lb' to='/product-detail'>{props.ShopCartHeading}</Link>
                    <div className='price_otr'>
                        <span className='dis_price heading-mb'>{props.ShopCartPrice}</span>
                        <p className='price heading-mb'>{props.ShopCartDiscountPrice}</p>
                    </div>
                    <div className='action_otr'>
                        <Link className='action'>
                            <ThemeBtn 
                                ButtonClass='border_btn'
                                ButtonText='Add to Cart'
                            />
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ShopCart
