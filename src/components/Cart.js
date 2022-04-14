import React, { useContext } from 'react'
import { CartContext } from '../context/CartContext'
import { Link } from 'react-router-dom'

function Cart() {

    const { cart, emptyCart, deleteItem } = useContext(CartContext)

    return (
        <>
            <h1>Soy tu cart favorito</h1>
            <div>
                {
                    cart.length > 0
                        ? cart.map((element, index) => {
                            return <div key={index}>
                                <div key={index}>
                                    <img src={element.pictureURL} width="120px" height="120px"></img>
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
                    cart.length > 0 && <button className='btn btn-warning' onClick={emptyCart} >Vaciar Carrito</button>
                }
            </div>
        </>
    )
}

export default Cart