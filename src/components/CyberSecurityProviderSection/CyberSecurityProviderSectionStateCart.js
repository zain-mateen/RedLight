import React from 'react';

function CyberSecuritySectionStateCart(props) {
    return (
        <div className={`col_state_box_otr ${props.CyberSecuritySectionStateCartClass}`}>
            <div className='col_state_box_inr'>
                <div className='icon_otr'>
                    <img className='icon' src={props.CyberSecuritySectionStateCartIcon} alt='Icon' />
                </div>
                <div className='content_otr'>
                    <h2 className='heading heading-h2'>{props.CyberSecuritySectionStateCartHeading}</h2>
                    <p className='text heading-lb'>{props.CyberSecuritySectionStateCartText}</p>
                </div>
            </div>
        </div>
    )
}

export default CyberSecuritySectionStateCart
