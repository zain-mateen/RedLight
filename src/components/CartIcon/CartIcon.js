import React, { useContext } from 'react';

import { CartContext } from '../../context/CartContext';

import './CartIcon.scss';

const CartIcon = () => {
    const { cartCount } = useContext(CartContext);

    return (
        <div className='cart_icon_container'>
            <i className="shopping_icon ri-shopping-bag-line"></i>
            <span className='item_count'>{cartCount}</span>
        </div>
    );
}

export default CartIcon;
