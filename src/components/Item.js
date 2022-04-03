import React from 'react'

function Item({ producto }) {

    return (
        <>
            <div className='card col-xl-2 mx-5 my-2'>
                <img src={producto.pictureURL}></img>
                <h3> {producto.name}</h3>
                <h2> ARS {producto.price} </h2>
                <h6> {producto.origin} | {producto.type} </h6>
            </div>
        </>
    )
}

export default Item