import ItemList from '../components/ItemList';
import { useState, useEffect } from 'react'
import { BounceLoader } from 'react-spinners';
import { useParams } from 'react-router-dom'
import { db } from '../firebase/firebase'
import { getDocs, collection, query, where } from 'firebase/firestore'

function ItemListContainer() {

    const [cervezas, setCervezas] = useState([]);

    const { collectionName } = useParams();

    useEffect(() => {

        const productsCollection = collection(db, "ItemCollection")

        const filter = () => {

            if (!collectionName) {
                return productsCollection
            } else if ((collectionName === "alemania") || (collectionName === "belgica")) {
                return query(productsCollection, where("categoryOrigin", "==", `${collectionName}`))
            } else if (
                (collectionName === "weissbier") ||
                (collectionName === "witbier") ||
                (collectionName === "belgian-ale") ||
                (collectionName === "abbey-dubbel") ||
                (collectionName === "belgian-strong-ale") ||
                (collectionName === "abbey-tripel") ||
                (collectionName === "helles") ||
                (collectionName === "pils") ||
                (collectionName === "imperial-stout") ||
                (collectionName === "sour-red") ||
                (collectionName === "oktoberfest")) {
                return query(productsCollection, where("categoryType", "==", `${collectionName}`))
            } else {
                return query(productsCollection, where("categoryBrand", "==", `${collectionName}`))
            }
        }

        getDocs(filter())
            .then((result) => {
                const docs = result.docs;
                const productsList = docs.map((element) => {
                    const product = {
                        id: element.id,
                        ...element.data()
                    }
                    return product;
                })
                setCervezas(productsList)
            })
            .catch(() => {
                console.log("Error al cargar los productos.")
            })

    }, [collectionName])

    return (
        <section className='itemListContainer'>
            <img className='hero' src='/img/hero.jpg' alt='Bienvenido a Brewsy'></img>

            {(cervezas.length < 1)
                ? <div className='loading col-1 mx-auto'> <BounceLoader /> </div>
                : <ItemList arrayCervezas={cervezas} />}
        </section>
    )
}

export default ItemListContainer;