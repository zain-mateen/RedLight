import React from 'react'
import { CaretDown } from 'phosphor-react';
import { Accordion } from 'react-bootstrap';
import './FaqSection.scss';

function FaqCart(props) {
    return (
        <div className='Faq_accordion_otr'>
            <Accordion.Item className='Accordion_item' eventKey={props.KeyNum}>
                <div className='Accordion_header_body'>
                    <Accordion.Header>{props.FaqCartHeading} <CaretDown size={24} weight='bold' /></Accordion.Header>
                    <Accordion.Body>
                        {props.FAQCartDesc}
                    </Accordion.Body>
                </div>
            </Accordion.Item>
        </div>
    )
}

export default FaqCart
