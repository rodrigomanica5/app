import React from 'react'

function ItemListContainer(props) {
    return (
        <>
            <section className='itemListContainer'>
                <h1>{props.greeting}</h1>
            </section>
        </>
    )
}

export default ItemListContainer