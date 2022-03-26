import React from 'react';
import paulaner from '../img/paulaner.png';
import { useState } from 'react';

function ItemCount({ stock, initial, onAdd }) {

    const [cantidad, setCantidad] = useState(initial);

    const agregar = () => {
        if (cantidad < stock) {
            setCantidad(cantidad + 1);
        };
    };

    const quitar = () => {
        if (cantidad > initial) {
            setCantidad(cantidad - 1);
        };
    };

    const checkout = () => {
        onAdd(cantidad)
    }

    return (
        <>
            <div className='card'>
                <img src={paulaner} alt="Paulaner" />
                <div className='detailCard'>
                    <h2>Paulaner Hefe-Weissbier 0,5l</h2>
                    <h3>$ 230</h3>
                    <div className='controls'>
                        <button onClick={quitar}>-</button>
                        <p>Cantidad: {cantidad}</p>
                        <button onClick={agregar}>+</button>
                    </div>
                    <button className='checkout' onClick={checkout}>Checkout</button>
                </div>
            </div>
        </>
    )
}

export default ItemCount