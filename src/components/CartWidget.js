import React, { useContext } from 'react'
import { FiShoppingBag } from 'react-icons/fi'
import { CartContext } from '../context/MyContext'

function CartWidget() {

    const { cartQuantity } = useContext(CartContext)

    return (
        <>
            <div className='cartWidget'>
                <FiShoppingBag color="#FFFFF" size="24px" strokeWidth={1}/>
                <span> {cartQuantity()} </span>
            </div>
        </>
    )
}

export default CartWidget