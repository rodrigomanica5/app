import React from 'react'
import ItemList from './ItemList';
import { useState, useEffect } from 'react'
import { BounceLoader } from 'react-spinners';
import { useParams } from 'react-router-dom'

function ItemListContainer(props) {

    const [cervezas, setCervezas] = useState([]);

    const { collectionName } = useParams();

    console.log(collectionName)

    useEffect(() => {

        const promise = fetch("https://mocki.io/v1/0c1c80ad-4da2-450c-865a-ba10d6d58af2");

        promise.then(data => data.json())
            .then(listaProductos => {

                if (collectionName == undefined) {
                    setCervezas(listaProductos)
                } else if (collectionName == "alemania") {
                    setCervezas(listaProductos.filter(x => x.origin == "Alemania"))
                } else if (collectionName == "belgica") {
                    setCervezas(listaProductos.filter(x => x.origin == "Bélgica"))
                } else if (collectionName == "weissbier") {
                    setCervezas(listaProductos.filter(x => x.type == "Weissbier"))
                } else if (collectionName == "witbier") {
                    setCervezas(listaProductos.filter(x => x.type == "Witbier"))
                } else if (collectionName == "belgian-ale") {
                    setCervezas(listaProductos.filter(x => x.type == "Belgian Ale"))
                } else if (collectionName == "abbey-dubbel") {
                    setCervezas(listaProductos.filter(x => x.type == "Abbey Dubbel"))
                } else if (collectionName == "belgian-strong-ale") {
                    setCervezas(listaProductos.filter(x => x.type == "Belgian Strong Ale"))
                } else if (collectionName == "abbey-tripel") {
                    setCervezas(listaProductos.filter(x => x.type == "Abbey Tripel"))
                } else if (collectionName == "helles") {
                    setCervezas(listaProductos.filter(x => x.type == "Helles"))
                } else if (collectionName == "pils") {
                    setCervezas(listaProductos.filter(x => x.type == "Pils"))
                } else if (collectionName == "imperial-stout") {
                    setCervezas(listaProductos.filter(x => x.type == "Imperial Stout"))
                } else if (collectionName == "sour-red") {
                    setCervezas(listaProductos.filter(x => x.type == "Sour Red"))
                } else if (collectionName == "oktoberfest") {
                    setCervezas(listaProductos.filter(x => x.name.includes("Oktoberfest")))
                } else if (collectionName == "imperial-stout") {
                    setCervezas(listaProductos.filter(x => x.type == "Imperial Stout"))
                } else if (collectionName == "paulaner") {
                    setCervezas(listaProductos.filter(x => x.name.includes("Paulaner")))
                } else if (collectionName == "leffe") {
                    setCervezas(listaProductos.filter(x => x.name.includes("Leffe")))
                } else if (collectionName == "hoegaarden") {
                    setCervezas(listaProductos.filter(x => x.name.includes("Hoegaarden")))
                } else if (collectionName == "franziskaner") {
                    setCervezas(listaProductos.filter(x => x.name.includes("Franziskaner")))
                } else if (collectionName == "triple-karmeliet") {
                    setCervezas(listaProductos.filter(x => x.name.includes("Triple Karmeliet")))
                } else if (collectionName == "augustiner") {
                    setCervezas(listaProductos.filter(x => x.name.includes("Augustiner")))
                } else if (collectionName == "bastogne") {
                    setCervezas(listaProductos.filter(x => x.name.includes("Bastogne")))
                } else if (collectionName == "becks") {
                    setCervezas(listaProductos.filter(x => x.name.includes("Becks")))
                } else if (collectionName == "bitburger") {
                    setCervezas(listaProductos.filter(x => x.name.includes("Bitburger")))
                }
            })
    }, [collectionName])

    // else if (collectionName) {
    //     setCervezas(listaProductos.filter(x => x.type == collectionName))
    // }

    return (
        <>
            <section className='itemListContainer'>
                <img className='hero' src='./img/hero.jpg'></img>
                <h1>{props.greeting}</h1>

                {(cervezas.length < 1)
                    ? <div className='loading col-1 mx-auto'> <BounceLoader /> </div>
                    : <ItemList arrayCervezas={cervezas} />}
            </section>
        </>
    )
}

export default ItemListContainer;

// const boton = document.getElementById("btn1")

// boton.addEventListener("click", (e) => {
//     e.stopPropagation
//     console.log("boton clickeado")
// })


