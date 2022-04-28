import React from 'react'
import { useState } from 'react'

function CheckoutForm() {

    const { buyer, setBuyer } = useState({
        name: "",
        lastname: "",
        email: "",
        phone: ""
    })


    const handlerSubmit = (e) => {
        e.preventDefault();
        console.log(buyer);
    }

    const getBuyerData = (target) => {
        setBuyer({ ...buyer, [target.name]: target.value })
    }

    return (
        <div className='row col-xl-8 mx-auto mt-5'>
            <form className='col-xl-10 mx-auto d-flex flex-column align-items-center' onSubmit={handlerSubmit} onChange={({target}) => {getBuyerData(target)}}>
                <div className='d-flex flex-column col-xl-6 my-3'>
                    <label>Nombre</label>
                    <input type="text" name="name"></input>
                </div>

                <div className='d-flex flex-column col-xl-6 my-3'>
                    <label>Apellido</label>
                    <input type="text" name="lastname"></input>
                </div>

                <div className='d-flex flex-column col-xl-6 my-3'>
                    <label>Correo Electrónico</label>
                    <input type="email" name="email"></input>
                </div>

                <div className='d-flex flex-column col-xl-6 my-3'>
                    <label>Teléfono</label>
                    <input type="text" name="phone"></input>
                </div>

                <button type='submit' className='btn btn-success'>Finalizar Compra</button>
            </form>
        </div>
    )
}

export default CheckoutForm