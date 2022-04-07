import React from 'react'
import ItemList from './ItemList';
import { useState, useEffect } from 'react'
import { BounceLoader } from 'react-spinners';
import { useParams } from 'react-router-dom'

function ItemListContainer(props) {

    const [cervezas, setCervezas] = useState([]);

    const { collectionName } = useParams();

    useEffect(() => {

        const promise = fetch("https://mocki.io/v1/ca5615d9-7498-4c99-b9da-a28ec0613b04");

        promise.then(data => data.json())
            .then(listaProductos => {

                if (!collectionName) {
                    setCervezas(listaProductos)
                } else if ((collectionName == "alemania") || (collectionName == "belgica")) {
                    setCervezas(listaProductos.filter(x => x.origin == collectionName))
                } else if (
                    (collectionName == "weissbier") || 
                    (collectionName == "witbier") || 
                    (collectionName == "belgian-ale") || 
                    (collectionName == "abbey-dubbel") || 
                    (collectionName == "belgian-strong-ale") || 
                    (collectionName == "abbey-tripel") || 
                    (collectionName == "helles") || 
                    (collectionName == "pils") || 
                    (collectionName == "imperial-stout") || 
                    (collectionName == "sour-red") || 
                    (collectionName == "oktoberfest") ) {
                    setCervezas(listaProductos.filter(x => x.type == collectionName))
                } else {
                    setCervezas(listaProductos.filter(x => x.name.includes(collectionName)))
                }
            })
            .catch(console.log("Error al cargar los productos"))

    }, [collectionName])

    return (
        <>
            <section className='itemListContainer'>
                <img className='hero' src='./img/hero.jpg' alt='Bienvenido a Brewsy'></img>
                <h1>{props.greeting}</h1>

                {(cervezas.length < 1)
                    ? <div className='loading col-1 mx-auto'> <BounceLoader /> </div>
                    : <ItemList arrayCervezas={cervezas} />}
            </section>
        </>
    )
}

export default ItemListContainer;

