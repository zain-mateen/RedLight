import React from 'react';
import './BlogPage.scss';
import PagesHeader from '../../components/Header/PagesHeader';
import { BlogPageData} from '../../Data';
import BlogPageCart from './BlogPageCart';
import BlogPageRightContent from './BlogPageRightContent';

const BlogPage = () => {
    return (
        <section className='BlogPage'>
            <div className='container'>
                <PagesHeader 
                    PagesWrapperHeading="Blog"
                    PagesWrapperDescription="Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusm tempor incididunt ut labore et dolore magna aliqua."
                    PagesWrapperCurrentPageLink='/blog'
                    PagesWrapperCurrentPageText="Blog"
                />
                <div className='row row_custom'>
                    <div className='col-lg-8 col_blogContent_otr'>
                        <div className='col_blogContent_inr'>
                            {BlogPageData.map((blog) => (
                                <BlogPageCart key={blog.id} blog={blog} />
                            ))}
                        </div>
                    </div>
                    <div className='col-lg-4'>
                        <BlogPageRightContent />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default BlogPage
