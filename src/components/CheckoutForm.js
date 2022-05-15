import React, { useContext } from 'react'
import { CartContext } from '../context/CartContext'
import { useState } from 'react'
import { collection, addDoc, serverTimestamp } from 'firebase/firestore'
import { db } from '../firebase/firebase'

function CheckoutForm({setOrderId}) {

    const { cart, getItemPrice, emptyCart } = useContext(CartContext)

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

    return (
        <div className='row col-xl-12 mx-auto mt-3'>

            <h2 className='checkoutTitleM'>Checkout</h2>
            <hr />

            <form onSubmit={handlerSubmit} className='d-flex flex-column align-content-center mx-auto'>

                <div className='d-flex flex-wrap justify-content-evenly align-items-center'>

                    <h6 className='col-xl-12'>Datos personales</h6>

                    <div className='d-flex col-10 col-xl-5 mt-3 mb-2'>
                        <input
                            type="text"
                            name="name"
                            className='form-control'
                            placeholder='Nombre'
                            value={costumer.name}
                            onChange={handlerChangeInputs}
                        />
                    </div>

                    <div className='d-flex col-10 col-xl-5 mt-3 mb-2'>
                        <input
                            type="text"
                            name="lastname"
                            className='form-control'
                            placeholder='Apellido'
                            value={costumer.lastname}
                            onChange={handlerChangeInputs}
                        />
                    </div>

                    <div className='d-flex col-10 col-xl-5 mt-3 mb-2'>
                        <input
                            type="email"
                            name="email"
                            className='form-control'
                            placeholder='Correo Electrónico'
                            value={costumer.email}
                            onChange={handlerChangeInputs}
                        />
                    </div>

                    <div className='d-flex col-10 col-xl-5 my-3'>
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

                    <div className='d-flex col-10 col-xl-5 my-3'>
                        <input
                            type="text"
                            name="cardName"
                            className='form-control'
                            placeholder='Titular de la tarjeta'
                            value={costumer.cardName}
                            onChange={handlerChangeInputs}
                        />
                    </div>

                    <div className='d-flex col-10 col-xl-5 my-3'>
                        <input
                            type="text"
                            name="cardNumber"
                            className='form-control'
                            placeholder='Número de la tarjeta'
                            value={costumer.cardNumber}
                            onChange={handlerChangeInputs}
                        />
                    </div>

                    <div className='d-flex col-10 col-xl-5 my-3'>
                        <input
                            type="text"
                            name="cardOutdate"
                            className='form-control'
                            placeholder='Fecha de vencimiento'
                            value={costumer.cardOutdate}
                            onChange={handlerChangeInputs}
                        />
                    </div>

                    <div className='d-flex col-10 col-xl-5 my-3'>
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

                <button type='submit' className='btn btnComprar col-10 col-xl-10 mx-auto mb-4 mt-3 mb-xl-0 mt-xl-4 py-3'>Finalizar compra</button>
            </form>
        </div>
    )
}

export default CheckoutForm