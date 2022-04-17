import React from 'react'
import { Link } from 'react-router-dom'

function Item({ producto }) {

    return (
        <>
            <div className='card col-xl-2 mx-5 my-2'>
                <Link to={`/product/${producto.id}`}><img className='col-xl-12' src={producto.pictureURL} alt={producto.name} ></img></Link>
                <h3> {producto.name}</h3>
                <h2> ARS {producto.price} </h2>
                <h6> {producto.origin} | {producto.type} </h6>
            </div>
        </>
    )
}

export default Item