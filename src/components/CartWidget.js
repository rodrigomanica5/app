import React from 'react'
import { FiShoppingBag } from 'react-icons/fi'

function CartWidget() {
    return (
        <>
            <div className='cartWidget'>
                <FiShoppingBag color="#FFFFF" size="24px" strokeWidth={1}/>
            </div>
        </>
    )
}

export default CartWidget