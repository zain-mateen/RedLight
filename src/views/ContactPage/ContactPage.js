import React from 'react';
import './ContactPage.scss';
import PagesHeader from '../../components/Header/PagesHeader';
import ThemeInput from '../../components/ThemeInput/ThemeInput';
import ThemeBtn from '../../components/ThemeBtn/ThemeBtn';
import { ContactPageData } from '../../Data';

const ContactPage = () => {
    return (
        <section className='ContactPage'>
            <div className='container'>
                <PagesHeader 
                    PagesWrapperHeading="Contact Us"
                    PagesWrapperDescription="Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusm tempor incididunt ut labore et dolore magna aliqua."
                    PagesWrapperCurrentPageLink='/contact-us'
                    PagesWrapperCurrentPageText="Contact Us"
                />
                <div className='row_custom_otr'>
                    <div className='row row_custom'>
                        <div className='col-lg-6 col_content_otr'>
                            <div className='col_content_inr'>
                                <h2 className='heading heading-h2'>Drop Us A Message For Any Query</h2>
                                <p className='desc heading-m'>
                                    Lorem ipsum dolor sit amet consectetuer adipiscing elitenean commodoligula egetmassa.
                                </p>
                                <ul className='contact_ul'>
                                    {ContactPageData.map((item) => (
                                        <li className='contact_li' key={item.id}>
                                            <div className='icon_otr'>
                                                {item.icon}
                                            </div>
                                            <div className='content'>
                                                <p className='contact_heading heading-lb'>{item.heading}</p>
                                                <div className='contact_text heading-m'>{item.text}</div>
                                            </div>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                        <div className='col-lg-6 col_input_otr'>
                            <div className='col_input_inr'>
                                <div className='input_main'>
                                    <ThemeInput 
                                        inputClass='Primary_input'
                                        inputType='name'
                                        inputName='name'
                                        inputPlaceholder='Your Full Name'
                                    />
                                    <ThemeInput 
                                        inputClass='Primary_input'
                                        inputType='email'
                                        inputName='email'
                                        inputPlaceholder='Your Email'
                                    />
                                    <ThemeInput 
                                        inputClass='Primary_input'
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
                            </div>
                        </div>
                    </div>
                </div>
                <div className='iframe_otr'>
                    <iframe 
                        className='iframe' 
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.838528738879!2d144.9532000765898!3d-37.817250971974744!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad65d4dd5a05d97%3A0x3e64f855a564844d!2s121%20King%20St%2C%20Melbourne%20VIC%203000%2C%20Australia!5e0!3m2!1sen!2s!4v1706010238388!5m2!1sen!2s" 
                        width="100%" 
                        height="100%" 
                        style={{border: "0"}}                        
                        allowfullscreen="" 
                        loading="lazy" 
                        title='121 King Street Melbourne, 3000, Australia Google Map'
                        referrerpolicy="no-referrer-when-downgrade"
                        ></iframe>
                </div>
            </div>
        </section>
    )
}

export default ContactPage
