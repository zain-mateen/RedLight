import React from 'react'
import ThemeInput from '../../components/ThemeInput/ThemeInput';
import ThemeBtn from '../../components/ThemeBtn/ThemeBtn';
import { Link } from 'react-router-dom';
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
                            <li className='post_li'>
                                <Link className='post_text heading-s'>
                                    <span>
                                        Avoid Mistakes In Social Media Posts
                                    </span>
                                </Link>
                            </li>
                            <li className='post_li'>
                                <Link className='post_text heading-s'>
                                    <span>
                                        The Security Risks Of Changing Package Owners
                                    </span>
                                </Link>
                            </li>
                            <li className='post_li'>
                                <Link className='post_text heading-s'>
                                    <span>
                                        Protect Your Workplace From Cyber Attacks
                                    </span>
                                </Link>
                            </li>
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
                            <li className='archive_li'>
                                <i class="icon ri-arrow-right-s-fill"></i>
                                <Link className='archive_text heading-s'>November 2022</Link>
                            </li>
                            <li className='archive_li'>
                                <i class="icon ri-arrow-right-s-fill"></i>
                                <Link className='archive_text heading-s'>February 2023</Link>
                            </li>
                            <li className='archive_li'>
                                <i class="icon ri-arrow-right-s-fill"></i>
                                <Link className='archive_text heading-s'>April 2023</Link>
                            </li>
                            <li className='archive_li'>
                                <i class="icon ri-arrow-right-s-fill"></i>
                                <Link className='archive_text heading-s'>September 2023</Link>
                            </li>
                            <li className='archive_li'>
                                <i class="icon ri-arrow-right-s-fill"></i>
                                <Link className='archive_text heading-s'>December 2023</Link>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className='category_box_otr'>
                    <div className='category_box_inr'>
                        <h4 className='category_heading heading-h4'>Categories</h4>
                        <ul className='category_ul'>
                            <li className='category_li'>
                                <i class="icon ri-arrow-right-s-fill"></i>
                                <Link className='category_text heading-s'>Social Media</Link>
                            </li>
                            <li className='category_li'>
                                <i class="icon ri-arrow-right-s-fill"></i>
                                <Link className='category_text heading-s'>Ethical Hacking</Link>
                            </li>
                            <li className='category_li'>
                                <i class="icon ri-arrow-right-s-fill"></i>
                                <Link className='category_text heading-s'>Cyber Attack</Link>
                            </li>
                            <li className='category_li'>
                                <i class="icon ri-arrow-right-s-fill"></i>
                                <Link className='category_text heading-s'>Security</Link>
                            </li>
                            <li className='category_li'>
                                <i class="icon ri-arrow-right-s-fill"></i>
                                <Link className='category_text heading-s'>Recover Hacked Accounts</Link>
                            </li>
                            <li className='category_li'>
                                <i class="icon ri-arrow-right-s-fill"></i>
                                <Link className='category_text heading-s'>Youtube Monetization</Link>
                            </li>
                            <li className='category_li'>
                                <i class="icon ri-arrow-right-s-fill"></i>
                                <p className='category_text heading-s'>Facebook Moetization</p>
                            </li>
                            <li className='category_li'>
                                <i class="icon ri-arrow-right-s-fill"></i>
                                <p className='category_text heading-s'>Instagram Moetization</p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BlogPageRightContent
