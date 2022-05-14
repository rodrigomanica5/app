import React, { useContext } from 'react'
import { CartContext } from '../context/CartContext'
import { useState } from 'react'
import { collection, addDoc, serverTimestamp } from 'firebase/firestore'
import { db } from '../firebase/firebase'
import { Navigate, Link } from 'react-router-dom'

function CheckoutForm() {

    const { cart, getItemPrice, emptyCart } = useContext(CartContext)

    const [orderId, setOrderId] = useState(null)

    const [costumer, setCostumer] = useState({
        name: '',
        lastname: '',
        email: '',
        phone: '',
        cardNumber: '',
        cardName: '',
        cardCvv: ''
    })

    const handlerSubmit = (e) => {
        e.preventDefault()

        const order = {
            items: cart,
            total: getItemPrice(),
            buyer: { ...costumer },
            date: serverTimestamp()
        }

        const ordersRef = collection(db, "Orders")
        addDoc(ordersRef, order)
            .then((doc) => {
                setOrderId(doc.id)
                emptyCart()
            })
    }

    const handlerChangeInputs = (e) => {
        setCostumer({
            ...costumer,
            [e.target.name]: e.target.value,
        })
    }

    if (orderId) {
        return <>

            <div className='mx-auto col-xl-8 text-center'>
                <h2>Tu orden fue registrada con éxito.</h2>
                <hr />
                <h4>Conserva tu número de orden para poder visualizar el estado de tu compra.</h4>
                <h4>Número de Orden:</h4>
                <h3>{orderId}</h3>
                <hr />
                <Link to="/" className="btn btn-success">Volver al Inicio</Link>
            </div>
        </>
    }

    if (cart.length === 0) {
        return <Navigate to="/" />
    }

    return (
        <div className='row col-xl-12 mx-auto mt-3'>

            <h2>Checkout</h2>
            <hr />

            <form onSubmit={handlerSubmit} className='d-flex flex-column align-content-center mx-auto'>

                <div className='d-flex flex-wrap justify-content-evenly align-items-center'>

                    <h6 className='col-xl-12'>Datos personales</h6>

                    <div className='d-flex flex-column col-xl-5 mt-3 mb-2'>
                        <input
                            type="text"
                            name="name"
                            className='form-control'
                            placeholder='Nombre'
                            value={costumer.name}
                            onChange={handlerChangeInputs}
                        />
                    </div>

                    <div className='d-flex flex-column col-xl-5 mt-3 mb-2'>
                        <input
                            type="text"
                            name="lastname"
                            className='form-control'
                            placeholder='Apellido'
                            value={costumer.lastname}
                            onChange={handlerChangeInputs}
                        />
                    </div>

                    <div className='d-flex flex-column col-xl-5 mt-3 mb-2'>
                        <input
                            type="email"
                            name="email"
                            className='form-control'
                            placeholder='Correo Electrónico'
                            value={costumer.email}
                            onChange={handlerChangeInputs}
                        />
                    </div>

                    <div className='d-flex flex-column col-xl-5 my-3'>
                        <input
                            type="text"
                            name="phone"
                            className='form-control'
                            placeholder='Teléfono'
                            value={costumer.phone}
                            onChange={handlerChangeInputs}
                        />
                    </div>
                </div>

                <hr />

                <div className='d-flex flex-wrap justify-content-evenly align-items-center'>

                    <h6 className='col-xl-12'>Datos del medio de pago</h6>

                    <div className='d-flex flex-column col-xl-5 my-3'>
                        <input
                            type="text"
                            name="cardName"
                            className='form-control'
                            placeholder='Titular de la tarjeta'
                            value={costumer.cardName}
                            onChange={handlerChangeInputs}
                        />
                    </div>

                    <div className='d-flex flex-column col-xl-5 my-3'>
                        <input
                            type="text"
                            name="cardNumber"
                            className='form-control'
                            placeholder='Número de la tarjeta'
                            value={costumer.cardNumber}
                            onChange={handlerChangeInputs}
                        />
                    </div>

                    <div className='d-flex flex-column col-xl-5 my-3'>
                        <input
                            type="text"
                            name="cardOutdate"
                            className='form-control'
                            placeholder='Fecha de vencimiento'
                            value={costumer.cardOutdate}
                            onChange={handlerChangeInputs}
                        />
                    </div>

                    <div className='d-flex flex-column col-xl-5 my-3'>
                        <input
                            type="password"
                            name="cardCvv"
                            className='form-control'
                            placeholder='CVV'
                            value={costumer.cardCvv}
                            onChange={handlerChangeInputs}
                        />
                    </div>
                </div>

                <button type='submit' className='btn btnComprar col-xl-10 mx-auto mt-4 py-3'>Finalizar compra</button>
            </form>
        </div>
    )
}

export default CheckoutForm