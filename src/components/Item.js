import React from 'react'
import { Link } from 'react-router-dom'

function Item({ producto }) {

    return (
        <div className='itemCard col-xl-2 mx-1 my-4 pt-4 pb-4 d-flex flex-column justify-content-between'>
            <img className='col-xl-12' src={producto.pictureURL} alt={producto.name} ></img>
            <h5 className='mt-3'> {producto.name}</h5>
            <h4>${producto.price}</h4>
            <h6> {producto.origin} | {producto.type} </h6>
            <Link to={`/product/${producto.id}`} className='btn btnComprar col-xl-12 mt-2'>Comprar</Link>
        </div>
    )
}

export default Item