import React from 'react'
import ItemList from './ItemList';
import { useState, useEffect } from 'react'
import { BounceLoader } from 'react-spinners';

const productos = [
    {
        name: "Paulaner",
        type: "Weiss",
        price: 230,
        origin: "Alemania",
        pictureURL: "img/products/PaulanerHefeWeissbierNaturtrub.jpg",
        ABV: "",
        Size: ""
    },
    {
        name: "Franziskaner",
        type: "Weiss",
        price: 210,
        origin: "Alemania",
        pictureURL: "img/products/FranziskanerWeissbier.jpg",
        ABV: "",
        Size: ""

    },
    {
        name: "Hoegaarden",
        type: "Witbier",
        price: 180,
        origin: "Bélgica",
        pictureURL: "img/products/HoegaardenWit330ml.jpg",
        ABV: "",
        Size: ""
    },
    {
        name: "Leffe Blonde",
        type: "Belgian Ale",
        price: 180,
        origin: "Bélgica",
        pictureURL: "img/products/LeffeBlonde330ml.jpg",
        ABV: "",
        Size: ""
    },
    {
        name: "Triple Karmeliet",
        type: "Abbey Tripel",
        price: 210,
        origin: "Bélgica",
        pictureURL: "img/products/TripelKarmeliet330ml.jpg",
        ABV: "",
        Size: ""
    }
]

function ItemListContainer(props) {

    const [cervezas, setCervezas] = useState([]);

    const promesa = new Promise((resolve, reject) => {

        setTimeout(() => {
            resolve(productos);
        }, 2000)
    })

    useEffect(() => {

        promesa.then(() => {
            setCervezas(productos)
            console.log("Los productos fueron cargados exitosamente")
        })
            .catch(() => {
                console.log("Surgió un error al cargar los productos")
            })
            .finally(() => {
                console.log("Comencemos!")
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
