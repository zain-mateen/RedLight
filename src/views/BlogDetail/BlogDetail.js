import React from 'react';
import { useParams } from 'react-router-dom';
import './BlogDetail.scss';
import BlogPageRightContent from '../BlogPage/BlogPageRightContent';
import BlogPagesHeader from '../../components/Header/BlogPagesHeader';
import ThemeInput from '../../components/ThemeInput/ThemeInput';
import ThemeBtn from '../../components/ThemeBtn/ThemeBtn';
import { BlogPageData } from '../../Data';
import { BlogArticleData } from '../../Data'; // Assuming BlogArticleData is imported correctly

const BlogDetail = () => {
    const { id } = useParams(); 
    const blog = BlogPageData.find((b) => b.id === id);

    if (!blog) {
        return <h2>Blog not found</h2>;
    }

    return (
        <div className='BlogDetail'>
            <div className='container'>
                <BlogPagesHeader 
                    BlogPagesWrapperHeading={blog.BlogPageCartHeading}
                    BlogPagesWrapperPrevPageLink="/blog"
                    BlogPagesWrapperPrevPageText="Blog"
                    BlogPagesWrapperCurrentPageText={blog.BlogPageCartHeading}
                />
                <div className='row row_custom'>
                    <div className='col-lg-8 col_blogContent_otr'>
                        <div className='col_blogContent_inr'>
                            <div className='img_otr'>
                                <img className='img' src={blog.BlogPageCartImage} alt={blog.BlogPageCartHeading} />
                            </div>
                            <div className='blogContent_detail'>
                                <h2 className='heading heading-h2'>{blog.BlogPageCartHeading}</h2>
                                <div className='author_date_main'>
                                    <div className='author_otr'>
                                        <div className='icon_otr'>
                                            <i className="icon ri-user-fill"></i>
                                        </div>
                                        <p className='author_text heading-m'>
                                            By
                                            <span className='author_text_inr heading-mb'>{blog.BlogPageCartAuthorName}</span>
                                        </p>
                                    </div>
                                    <div className='date_otr'>
                                        <div className='icon_otr'>
                                            <i className="icon ri-time-line"></i>
                                        </div>
                                        <p className='author_text heading-m'>{blog.BlogPageCartBlogDate}</p>
                                    </div>
                                </div>
                                <div className='article_container'>
                                    <p className='desc heading-m'>{BlogArticleData.introduction}</p>
                                    {BlogArticleData.sections.map((section) => (
                                        <div className='heading_desc_main' key={section.id}>
                                            <h3 className='heading heading-h3'>{section.subHeading}</h3>
                                            <p className='desc heading-m'>{section.description}</p>
                                            <ul className='list_ul'>
                                                {section.tips.map((tip, index) => (
                                                    <li className='list_li' key={index}>{tip}</li>
                                                ))}
                                            </ul>
                                        </div>
                                    ))}
                                    <p className='desc heading-m'>{BlogArticleData.conclusion}</p>
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
                    <div className='col-lg-4'>
                        <BlogPageRightContent />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BlogDetail;
