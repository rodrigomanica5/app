import React from 'react'
import Item from './Item'

function ItemList({ arrayCervezas }) {

    return (
        <>
            <div className='row col-xl-12 justify-content-evenly mt-5'>
                {arrayCervezas.map((element, index) => {
                    return <Item key={index} producto={element} />
                })}
            </div>
        </>
    )
}

export default ItemList