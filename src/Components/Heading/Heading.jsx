import React from 'react'
import './Heading.css'

const Heading = ({heading}) => {
    return (
        <div className='heading'>
            <h2>{heading}</h2>
            <div className="box">
                <div className="line"></div>
            </div>
        </div>
    )
}

export default Heading