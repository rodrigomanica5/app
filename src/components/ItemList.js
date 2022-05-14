import React from 'react'
import Item from './Item'

function ItemList({ arrayCervezas }) {

    return (
        <div className='itemList row mx-auto col-xl-11 justify-content-evenly mt-5'>
            {arrayCervezas.map((element, index) => {
                return <Item key={index} producto={element} />
            })}
        </div>
    )
}

export default ItemList