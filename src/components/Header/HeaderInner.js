import React from 'react'

function HeaderInner(props) {
    return (
        <div className='headerInner_wrapper'>
            <h2 className='heading heading-h2'>{props.HeaderWrapperHeading}</h2>
            <p className='desc heading-s'>{props.HeaderWrapperDescription}</p>
        </div>
    )
}

export default HeaderInner
