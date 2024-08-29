import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import './ProductDetail.scss';
import BlogPagesHeader from '../../components/Header/BlogPagesHeader';
import ThemeBtn from '../../components/ThemeBtn/ThemeBtn';
import { ProductsContext } from '../../context/ProductContext';
import { CartContext } from '../../context/CartContext';

function ProductDetail() {
    const { id } = useParams(); 
    const { products } = useContext(ProductsContext); 
    const product = products.find((p) => p.id === id);
    
    const { cartItems, addItemToCart, removeItemToCart } = useContext(CartContext);

    // Find the cart item corresponding to the current product, or default to a quantity of 0
    const cartItem = cartItems.find((item) => item.id === product?.id);
    const quantity = cartItem ? cartItem.quantity : 1;

    const addItemHandler = () => addItemToCart(product);
    const removeItemHandler = () => removeItemToCart(product);

    if (!product) {
        return <h2>Product not found</h2>;
    }

    return (
        <div className='ProductDetail'>
            <div className='container'>
                <BlogPagesHeader 
                    BlogPagesWrapperHeading={product.ShopCartHeading}
                    BlogPagesWrapperPrevPageLink="/shop"
                    BlogPagesWrapperPrevPageText="Product"
                    BlogPagesWrapperCurrentPageText={product.ShopCartHeading}
                />
                <div className='row row_custom'>
                    <div className='col-lg-6 col_img_otr'>
                        <div className='col_img_inr'>
                            <img className='img' src={product.ShopCartImage} alt={product.ShopCartHeading} />
                        </div>
                    </div>
                    <div className='col-lg-6 col_content_otr'>
                        <div className='col_content_inr'>
                            <h3 className='heading heading-h3'>{product.ShopCartHeading}</h3>
                            <p className='price'>${product.ShopCartDiscountPrice || product.ShopCartPrice}</p>
                            <p className='desc heading-m'>This is a simple product.</p>
                            <div className='quantity_btn_otr'>
                                <div className="quantity_main">
                                    <div className="icon_otr" onClick={removeItemHandler}>
                                        <i className="icon ri-subtract-line"></i>
                                    </div>
                                    <span className="value heading-xsm">{quantity}</span>
                                    <div className="icon_otr" onClick={addItemHandler}>
                                        <i className="icon ri-add-line"></i>
                                    </div>
                                </div>
                                <div className='action-otr'>
                                    <ThemeBtn 
                                        ButtonClass='border_btn'
                                        ButtonText='Add to Cart'
                                    />
                                </div>
                            </div>
                            <p className='text heading-mb'>SKU: <span className='text_inr heading-m'>product-sku-{product.id}</span></p>
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
            </div>
        </div>
    );
}

export default ProductDetail;
