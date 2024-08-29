import React, { useContext } from 'react';
import './ShopPage.scss';
import PagesHeader from '../../components/Header/PagesHeader';
import ShopCart from './ShopCart';
import { ProductsContext } from '../../context/ProductContext';

const ShopPage = () => {
    const { products } = useContext(ProductsContext);

    return (
        <div className='ShopPage'>
            <div className='container'>
                <PagesHeader 
                    PagesWrapperHeading="Shop"
                    PagesWrapperCurrentPageLink="/shop"
                    PagesWrapperCurrentPageText="Shop"
                />
                <div className='row_custom'>
                    {products.map((product)=>{
                        return (
                            <ShopCart 
                                key={product.id}
                                product={product}
                            />
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default ShopPage
