import React, { useContext } from 'react'
import { CartContext } from '../context/CartContext'
import { Link } from 'react-router-dom'
import { CgRemove } from 'react-icons/cg'
import CheckoutForm from './CheckoutForm'

function Cart() {

    const { cart, emptyCart, deleteItem, getItemPrice } = useContext(CartContext)

    return (
        <div className='cartView row'>
            <div className={`pt-4 ${cart.length > 0 ? "col-xl-7" : "col-xl-12"}`}>
                {
                    cart.length > 0
                        ? cart.map((element, index) => {
                            return <div className='my-4 col-xl-10 mx-auto' key={index}>
                                <div className='cartItemCard d-flex justify-content-between mx-auto py-4' key={index}>
                                    <img src={element.pictureURL} width="160px" height="160px" alt={element.name}></img>
                                    <div className='col-xl-8'>
                                        <h5>{element.name}</h5>
                                        <hr />
                                        <h5>${element.price}</h5>
                                        <hr />
                                        <h5>Cantidad: {element.qty}</h5>
                                    </div>
                                    <CgRemove className='gg-remove m-auto' onClick={() => deleteItem(element.id)} />
                                </div>
                            </div>
                        })
                        : <div className='emptyCartAlert col-xl-6 mx-auto text-center'>
                            <h3>Tu carrito está vacío :( </h3>
                            <Link to="/" className='btn btnComprar col-xl-4 mt-4 py-3' >Volver al catálogo</Link>
                        </div>
                }

                {
                    cart.length > 0 &&
                    <div className='col-xl-10 mx-auto'>
                        <button className="btn btn-warning mx-auto" onClick={emptyCart} >Vaciar Carrito</button>
                        <hr/>
                        <h2 className='mt-4'>TOTAL: ${getItemPrice()}</h2>
                    </div>
                }
            </div>
            {
                cart.length > 0 &&
                <div className='col-xl-5 pt-4'>
                    <CheckoutForm />
                </div>
            }
        </div>
    )
}

export default Cart