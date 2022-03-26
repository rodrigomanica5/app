import React from 'react'
import ItemCount from './ItemCount';

function ItemListContainer(props) {

    const onAdd = (var1) => {
        console.log(`Has comprado ${var1} unidades.`)
    };

    return (
        <>
            <section className='itemListContainer'>
                <h1>{props.greeting}</h1>
                <ItemCount stock={10} initial={1} onAdd={onAdd} />
            </section>
        </>
    )
}

export default ItemListContainer;
