import React, { useContext, useEffect, useState } from 'react'
import { CartContext } from '../context/CartContext'
import { Link } from 'react-router-dom'
import { addDoc, collection, serverTimestamp } from 'firebase/firestore'
import { db } from '../firebase/firebase'
import CheckoutForm from './CheckoutForm'

function Cart() {

    const { cart, emptyCart, deleteItem, getItemPrice } = useContext(CartContext)

    const { orderId, setOrderId } = useState([])


    useEffect(() => {

        const finalizarCompra = () => {
            const orderCollection = collection(db, "Orders")
            addDoc(orderCollection, {
                buyer: "",
                items: cart,
                total: getItemPrice(),
                date: serverTimestamp()
            })
                .then((result) => {
                    setOrderId(result.id)
                })

                emptyCart()
        }
    }, [])

    
    return (
        <>
            <h1>Soy tu cart favorito</h1>

            {
                cart.length > 0 &&
                <div>
                    <h2>Precio Total: ARS {getItemPrice()} </h2>
                </div>
            }

            <div>
                {
                    cart.length > 0
                        ? cart.map((element, index) => {
                            return <div key={index}>
                                <div key={index}>
                                    <img src={element.pictureURL} width="120px" height="120px" alt={element.name}></img>
                                    <div>
                                        <h4>{element.name}</h4>
                                        <h4>Precio: {element.price}</h4>
                                        <h4>Cantidad: {element.qty}</h4>
                                    </div>
                                    <button className='btn btn-danger' onClick={() => deleteItem(element.id)}>Borrar Producto</button>
                                </div>
                            </div>
                        })
                        : <>
                            <h3>No hay productos en tu carrito</h3>
                            <Link to="/" className='btn btn-success' >Buscar Productos!</Link>
                        </>
                }

                {
                    cart.length > 0 &&
                    <>
                        <button className="btn btn-warning" onClick={emptyCart} >Vaciar Carrito</button>
                        {/* <button className="btn btn-success" onClick={checkout}>Checkout</button> */}
                    </>
                }
            </div>
        </>
    )
}

export default Cart