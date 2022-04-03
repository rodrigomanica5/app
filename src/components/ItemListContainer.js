import React from 'react'
import ItemList from './ItemList';
import { useState, useEffect } from 'react'
import { BounceLoader } from 'react-spinners';

function ItemListContainer(props) {

    const [cervezas, setCervezas] = useState([]);

    useEffect(() => {

        const promise = fetch("https://mocki.io/v1/ee37a881-0f59-4288-a3cf-b4049355a341");

        promise.then(data => data.json())
        .then(productos => {

            setTimeout(() => {
                setCervezas(productos);
                console.log("Los productos fueron cargados exitosamente")
            }, 2000)
        })
    }, [])

    return (
        <>
            <section className='itemListContainer'>
                <h1>{props.greeting}</h1>

                {(cervezas.length < 1)
                    ? <div className='loading col-1 mx-auto'> <BounceLoader /> </div>
                    : <ItemList arrayCervezas={cervezas} />}
            </section>
        </>
    )
}

export default ItemListContainer;