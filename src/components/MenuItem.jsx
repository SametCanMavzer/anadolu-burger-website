import React from 'react'


function MenuItem({ image, name, content, price }) {
    return (
        <div className='menuItem'>
            <div style={{ backgroundImage: `url(${image})` }}></div>
            <h2>{name}</h2>
            <h6>{content}</h6>
            <p>
                <span>{price} TL </span></p>
        </div>
    )
}

export default MenuItem