import React from 'react'
import './Heading.css'

const Heading = ({heading}) => {
    return (
        <div className='heading-cmp ' >
            <div className='h6'>{heading}</div>
            <div className="box">
                <div className="line"></div>
            </div>
        </div>
    )
}

export default Heading