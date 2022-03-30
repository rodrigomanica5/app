/* import React from 'react';
import paulaner from '../img/paulaner.png';
import {useState, useEffect} from 'react'

const productos = [
    {
        nombre: "Paulaner",
        tipo: "Weiss",
        precio: 230,
        origen: "Alemania",
    },
    {
        nombre: "Hoegaarden",
        tipo: "Weiss",
        precio: 180,
        origen: "Belgica",
    },
    {
        nombre: "Faxe",
        tipo: "Pils",
        precio: 250,
        origen: "Dinamarca",
    }
]

function ItemCount({stock, initial, onAdd}) {

    const [cantidad, setCantidad] = useState(initial);
    const [cerveza, setCerveza] = useState([]);

    const agregar = () => {

        if (cantidad < stock) {
            setCantidad(cantidad + 1)
        } 
    }

    const quitar = () => {
        
        if (cantidad > initial) {
            setCantidad(cantidad - 1)
        }
    }

    const checkout = () => {
        onAdd(cantidad)
    }

    useEffect(() => {
        
        setTimeout(() => {
            setCerveza(productos)
        }, 2000)
    }, [])

    console.log("hola")

    return (
        <>
            <div className='card'>
                <img src={paulaner} alt="Paulaner" />
                <div className='detailCard'>
                    <h2>Paulaner Hefe-Weissbier 0,5l</h2>
                    <h3>$ 230</h3>
                    <div className='controls'>
                        <button onClick={quitar}>-</button>
                        <p>Cantidad: {cantidad} </p>
                        <button onClick={agregar}>+</button>
                    </div>
                    <button className='checkout' onClick={checkout}>Checkout</button>
                </div>
            </div>
        </>
    )
}

export default ItemCount */