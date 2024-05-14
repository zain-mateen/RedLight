import React from 'react';
import './ContactPage.scss';
import PagesHeader from '../Header/PagesHeader';
import ThemeInput from '../ThemeInput/ThemeInput';
import ThemeBtn from '../ThemeBtn/ThemeBtn';

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
                                <div className='contact_ul'>
                                    <li className='contact_li'>
                                        <div className='icon_otr'>
                                            <svg className='icon' aria-hidden="true" viewBox="0 0 576 512" xmlns="http://www.w3.org/2000/svg"><path d="M288 0c-69.59 0-126 56.41-126 126 0 56.26 82.35 158.8 113.9 196.02 6.39 7.54 17.82 7.54 24.2 0C331.65 284.8 414 182.26 414 126 414 56.41 357.59 0 288 0zm0 168c-23.2 0-42-18.8-42-42s18.8-42 42-42 42 18.8 42 42-18.8 42-42 42zM20.12 215.95A32.006 32.006 0 0 0 0 245.66v250.32c0 11.32 11.43 19.06 21.94 14.86L160 448V214.92c-8.84-15.98-16.07-31.54-21.25-46.42L20.12 215.95zM288 359.67c-14.07 0-27.38-6.18-36.51-16.96-19.66-23.2-40.57-49.62-59.49-76.72v182l192 64V266c-18.92 27.09-39.82 53.52-59.49 76.72-9.13 10.77-22.44 16.95-36.51 16.95zm266.06-198.51L416 224v288l139.88-55.95A31.996 31.996 0 0 0 576 426.34V176.02c0-11.32-11.43-19.06-21.94-14.86z"></path></svg>
                                        </div>
                                        <div className='content'>
                                            <p className='contact_heading heading-lb'>Where We Are:</p>
                                            <p className='contact_text heading-m'>121 King Street Melbourne, 3000, Australia</p>
                                        </div>
                                    </li>
                                    <li className='contact_li'>
                                        <div className='icon_otr'>
                                        <svg className='icon' aria-hidden="true" viewBox="0 0 320 512" xmlns="http://www.w3.org/2000/svg"><path d="M272 0H48C21.5 0 0 21.5 0 48v416c0 26.5 21.5 48 48 48h224c26.5 0 48-21.5 48-48V48c0-26.5-21.5-48-48-48zM160 480c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32zm112-108c0 6.6-5.4 12-12 12H60c-6.6 0-12-5.4-12-12V60c0-6.6 5.4-12 12-12h200c6.6 0 12 5.4 12 12v312z"></path></svg>
                                        </div>
                                        <div className='content'>
                                            <p className='contact_heading heading-lb'>Phone:</p>
                                            <div className='contact_link_otr'>
                                                <a className='contact_link_text heading-m' href='tel:03221713121'>03221713121</a>
                                                <p className='contact_link_line heading-l'>|</p>
                                                <a className='contact_link_text heading-m' href='tel:03471883772'>03471883772</a>
                                            </div>
                                        </div>
                                    </li>
                                    <li className='contact_li'>
                                        <div className='icon_otr'>
                                        <svg className='icon' aria-hidden="true" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="M176 216h160c8.84 0 16-7.16 16-16v-16c0-8.84-7.16-16-16-16H176c-8.84 0-16 7.16-16 16v16c0 8.84 7.16 16 16 16zm-16 80c0 8.84 7.16 16 16 16h160c8.84 0 16-7.16 16-16v-16c0-8.84-7.16-16-16-16H176c-8.84 0-16 7.16-16 16v16zm96 121.13c-16.42 0-32.84-5.06-46.86-15.19L0 250.86V464c0 26.51 21.49 48 48 48h416c26.51 0 48-21.49 48-48V250.86L302.86 401.94c-14.02 10.12-30.44 15.19-46.86 15.19zm237.61-254.18c-8.85-6.94-17.24-13.47-29.61-22.81V96c0-26.51-21.49-48-48-48h-77.55c-3.04-2.2-5.87-4.26-9.04-6.56C312.6 29.17 279.2-.35 256 0c-23.2-.35-56.59 29.17-73.41 41.44-3.17 2.3-6 4.36-9.04 6.56H96c-26.51 0-48 21.49-48 48v44.14c-12.37 9.33-20.76 15.87-29.61 22.81A47.995 47.995 0 0 0 0 200.72v10.65l96 69.35V96h320v184.72l96-69.35v-10.65c0-14.74-6.78-28.67-18.39-37.77z"></path></svg>
                                        </div>
                                        <div className='content'>
                                            <p className='contact_heading heading-lb'>Email:</p>
                                            <div className='contact_link_otr'>
                                                <a className='contact_link_text heading-m' href='mailto:zainmateen259@gmail.com'>zainmateen259@gmail.com</a>
                                                <p className='contact_link_line heading-l'>|</p>
                                                <a className='contact_link_text heading-m' href='mailto:zaini_2223@yahoo.com'>zaini_2223@yahoo.com</a>
                                            </div>
                                        </div>
                                    </li>
                                </div>
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
