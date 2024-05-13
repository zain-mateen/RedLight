import React from 'react';
import HeaderInner from '../Header/HeaderInner'
import { BlogSectionData } from './BlogSectionArray';
import BlogSectionCart from './BlogSectionCart';

const BlogSection = () => {
    return (
        <section className='BlogSection'>
            <div className='container'>
                <HeaderInner 
                    HeaderWrapperHeading="Latest News & Blog"
                    HeaderWrapperDescription="Lorem ipsum dolor sit amet consectetuer adipiscing elitenean commodo ligula eget dolorenean massa."
                />
                <div className='row row_custom'>
                    {BlogSectionData.map((data)=>{
                        return (
                            <BlogSectionCart 
                                key={data.id}
                                BlogSectionCartClass='col-lg-4 col-md-6'
                                BlogSectionCartImage={data.BlogSectionCartImage}
                                BlogSectionCartHeading={data.BlogSectionCartHeading}
                                BlogSectionCartDescription={data.BlogSectionCartDescription}
                            />
                        )
                    })}
                </div>
            </div>
        </section>
    )
}

export default BlogSection
