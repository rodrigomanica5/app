import React, { useContext } from 'react'
import {Link} from 'react-router-dom'
import { CartContext } from '../context/CartContext'

function ItemCount({ stock, quantity, setQuantity, onAdd, checkout }) {

    const handleAdd = () => {
        if (quantity < stock) {
            setQuantity(quantity + 1)
        }
    }

    const handleRemove = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1)
        }
    }

    return (
        <>
            <div className='col-xl-5 d-flex flex-column'>
                {
                    (checkout === true)
                        ? <Link to="/cart" className='col-xl-9 mt-3 mx-auto'><button className='btn btn-success col-xl-12 mx-auto'>Checkout</button></Link>
                        : <>
                            <div className='d-flex my-3'>
                                <button className='btn btn-success col-xl-3' onClick={handleRemove}>-</button>
                                <p className='d-flex col-xl-6 m-0 align-items-center justify-content-center'>Cantidad: {quantity} </p>
                                <button className='btn btn-success col-xl-3' onClick={handleAdd}>+</button>
                            </div>
                            <p className='mx-auto'>Stock disponible: {stock} </p>
                            <button className='btn btn-success col-xl-9 mx-auto' onClick={onAdd}>Agregar al Carrito</button>
                        </>
                }
            </div>
        </>
    )
}

export default ItemCount