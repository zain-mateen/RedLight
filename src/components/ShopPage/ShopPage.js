import React from 'react';
import './ShopPage.scss';
import PagesHeader from '../Header/PagesHeader';
import { ShopPageData } from './ShopPageArray';
import ShopCart from './ShopCart';

const ShopPage = () => {
    return (
        <div className='ShopPage'>
            <div className='container'>
                <PagesHeader 
                    PagesWrapperHeading="Shop"
                    PagesWrapperCurrentPageLink="/shop"
                    PagesWrapperCurrentPageText="Shop"
                />
                <div className='row row_custom'>
                    {ShopPageData.map((data)=>{
                        return (
                            <ShopCart 
                                key={data.id}
                                ShopCartClass='col-lg-4 col-md-6 col-sm-6'
                                ShopCartImage={data.ShopCartImage}
                                ShopCartHeading={data.ShopCartHeading}
                                ShopCartPrice={data.ShopCartPrice}
                                ShopCartDiscountPrice={data.ShopCartDiscountPrice}
                            />
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default ShopPage
