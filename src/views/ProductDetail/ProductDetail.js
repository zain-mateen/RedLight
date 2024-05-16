import React, { useState } from 'react';
import './ProductDetail.scss';
import BlogPagesHeader from '../../components/Header/BlogPagesHeader';
import ThemeBtn from '../../components/ThemeBtn/ThemeBtn'
import ShopCart from '../ShopPage/ShopCart'

import img from '../../img/shop-img1.jpg'
import { RelatedProductData } from './RelatedProductArray';
import ThemeInput from '../../components/ThemeInput/ThemeInput';

function ProductDetail() {
    const [quantity, setQuantity] = useState(1);

    const handleDecrement = () => {
        if(quantity > 1){
            setQuantity(prevCount => prevCount - 1)
        }
    }

    const handleIncrement = () => {
        if(quantity < 10){
            setQuantity(prevCount => prevCount + 1)
        }
    }

    return (
        <div className='ProductDetail'>
            <div className='container'>
                <BlogPagesHeader 
                    BlogPagesWrapperHeading="Data Center Rack Space"
                    BlogPagesWrapperPrevPageLink="/shop"
                    BlogPagesWrapperPrevPageText="Product"
                    BlogPagesWrapperCurrentPageText="Data Center Rack Space"
                />
                <div className='row row_custom'>
                    <div className='col-lg-6 col_img_otr'>
                        <div className='col_img_inr'>
                            <img className='img' src={img} alt='img' />
                        </div>
                    </div>
                    <div className='col-lg-6 col_content_otr'>
                        <div className='col_content_inr'>
                            <h3 className='heading heading-h3'>Data Center Rack Space</h3>
                            <p className='price'>$25.00</p>
                            <p className='desc heading-m'>This is a simple product.</p>
                            <div className='quantity_btn_otr'>
                                <div className='quantity_otr'>
                                    <button type='button' onClick={handleDecrement} className='increment_decrement_text'>
                                        <i class="icon ri-subtract-line"></i>
                                    </button>
                                    <div className='quantity_text heading-lb'>{quantity}</div>
                                    <button type='button' onClick={handleIncrement} className='increment_decrement_text'>
                                        <i class="icon ri-add-line"></i>
                                    </button>
                                </div>
                                <div className='action-otr'>
                                    <ThemeBtn 
                                        ButtonClass='border_btn'
                                        ButtonText='Add to Cart'
                                    />
                                </div>
                            </div>
                            <p className='text heading-mb'>SKU: <span className='text_inr heading-m'>data-center-rack-space</span></p>
                            <p className='text heading-mb'>Category: <span className='text_inr heading-m'>Hosting Solutions</span></p>
                        </div>
                    </div>
                </div>
                <div className='productDescription'>
                    <div className='product_heading_otr'>
                        <p className='product_heading heading-h4'>Product Description</p>
                    </div>
                    <p className='product_desc heading-m'>
                        Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.
                    </p>
                </div>
                <div className='RelatedProduct'>
                    <div className='RelatedProduct_wrapper'>
                        <h3 className='RelatedProduct_heading heading-h3'>Related Product</h3>
                    </div>
                    <div className='row row_custom2'>
                        {RelatedProductData.map((data)=>{
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
                <form className='form_otr'>
                    <h4 className='heading heading-h4'>Post Your Comment</h4>
                    <div className='input_main'>
                        <ThemeInput 
                            inputClass='NewsLetter_input'
                            inputType='name'
                            inputName='name'
                            inputPlaceholder='Your Full Name'
                        />
                        <ThemeInput 
                            inputClass='NewsLetter_input'
                            inputType='email'
                            inputName='email'
                            inputPlaceholder='Your Email'
                        />
                        <ThemeInput 
                            inputClass='NewsLetter_input'
                            inputType='text'
                            inputName='text'
                            inputPlaceholder='Subject'
                        />
                        <textarea 
                            className='textarea'
                            name='text'
                            defaultValue='Your Message Here'
                        />
                    </div>
                    <div className='action_otr'>
                        <ThemeBtn 
                            ButtonClass='primary_btn submit_btn'
                            ButtonText='Send Message'
                        />
                    </div>
                </form>
            </div>
        </div>
    )
}

export default ProductDetail
