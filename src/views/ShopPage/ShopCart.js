import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import ThemeBtn from '../../components/ThemeBtn/ThemeBtn';
import { CartContext } from '../../context/CartContext';
import './ShopPage.scss';

function ShopCart({ product, ShopCartClass }) {  // Destructuring props
    const { addItemToCart } = useContext(CartContext);
    const { id, ShopCartImage, ShopCartHeading, ShopCartPrice, ShopCartDiscountPrice } = product;

    return (
        <div className={`col_shopCart_otr ${ShopCartClass}`}>
            <div className='col_shopCart_inr'>
                <div className='img_main'>
                    <Link className='img_otr' to={`/product-detail/${id}`}>
                        <img className='img' src={ShopCartImage} alt='img' />
                    </Link>
                </div>
                <div className='content_otr'>
                    <Link className='heading heading-lb' to={`/product-detail/${id}`}>{ShopCartHeading}</Link>
                    <div className='price_otr'>
                        {ShopCartPrice && <span className='dis_price heading-mb'>${ShopCartPrice}</span>}
                        <p className='price heading-mb'>${ShopCartDiscountPrice}</p>
                    </div>
                    <div className='action_otr' onClick={() => addItemToCart(product)}>
                        <ThemeBtn 
                            ButtonClass='border_btn'
                            ButtonText='Add to Cart'
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ShopCart;
