import React from 'react'
import { useState, useEffect } from 'react'
import ItemDetail from '../components/ItemDetail';
import { useParams } from 'react-router-dom';
import { db } from '../firebase/firebase'
import { doc, getDoc, collection } from 'firebase/firestore'


function ItemDetailContainer() {

    const [detail, setDetail] = useState({});
    const { productId } = useParams()

    useEffect(() => {

        const productsCollection = collection(db, "ItemCollection");
        const refDoc = doc(productsCollection, productId);
        getDoc(refDoc)
        .then((result) => {
            const productDetail = {
                id: result.id,
                ...result.data()
            }
            setDetail(productDetail)
        })

    }, [])

    return (
        <>
            {(Object.keys(detail).length > 0) && <ItemDetail beerDetail={detail} />}
        </>
    )
}

export default ItemDetailContainer