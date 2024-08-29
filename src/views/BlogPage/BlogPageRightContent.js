import React from 'react'
import ThemeInput from '../../components/ThemeInput/ThemeInput';
import ThemeBtn from '../../components/ThemeBtn/ThemeBtn';
import { Link } from 'react-router-dom';
import { BlogPostData, BlogArchiveData, BlogCategoryData } from '../../Data';
import './BlogPage.scss';

function BlogPageRightContent(props) {
    return (
        <div className='col_blogRightContent_otr'>
            <div className='col_blogRightContent_inr'>
                <div className='search_box_otr'>
                    <div className='search_box_inr'>
                        <h4 className='search_heading heading-h4'>Search</h4>
                        <div className='input_main'>
                            <ThemeInput 
                                inputClass='search_input'
                                inputType='search'
                                inputName='search'
                                inputPlaceholder='Search Here'
                            />
                            <div className='action_otr'>
                                <ThemeBtn 
                                    ButtonClass='primary_btn search_btn'
                                    ButtonText='Search'
                                />
                            </div>
                        </div>
                        <div className='responsive_action_otr'>
                            <ThemeBtn 
                                ButtonClass='primary_btn'
                                ButtonText='Subscribe'
                            />
                        </div>
                    </div>
                </div>
                <div className='post_box_otr'>
                    <div className='post_box_inr'>
                        <h4 className='post_heading heading-h4'>Recent Posts</h4>
                        <ul className='post_ul'>
                            {BlogPostData.map((post) => (
                                <li className='post_li' key={post.id}>
                                    <Link className='post_text heading-s'>
                                        <span>{post.text}</span>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
                <div className='comments_box_otr'>
                    <div className='comments_box_inr'>
                        <h4 className='comments_heading heading-h4'>Recent Comments</h4>
                        <p className='comment_text heading-s'>No Comments to show</p>
                    </div>
                </div>
                <div className='archive_box_otr'>
                    <div className='archive_box_inr'>
                        <h4 className='archive_heading heading-h4'>Archives</h4>
                        <ul className='archive_ul'>
                            {BlogArchiveData.map((archive) => (
                                <li className='archive_li' key={archive.id}>
                                    <i className="icon ri-arrow-right-s-fill"></i>
                                    <Link className='archive_text heading-s'>{archive.month}</Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
                <div className='category_box_otr'>
                    <div className='category_box_inr'>
                        <h4 className='category_heading heading-h4'>Categories</h4>
                        <ul className='category_ul'>
                            {BlogCategoryData.map((category) => (
                                <li className='category_li' key={category.id}>
                                    <i className="icon ri-arrow-right-s-fill"></i>
                                    <Link className='category_text heading-s'>{category.category}</Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BlogPageRightContent
