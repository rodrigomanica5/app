import React from 'react'
import { useState, useEffect } from 'react'
import ItemDetail from '../components/ItemDetail';
import { useParams } from 'react-router-dom';
import { db } from '../firebase/firebase'
import { doc, getDoc, collection } from 'firebase/firestore'
import { BounceLoader } from 'react-spinners';


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
            {(Object.keys(detail).length > 0)
                ? <ItemDetail beerDetail={detail} />
                : <div className='loading col-1 mx-auto' color={"#4c23e1"}> <BounceLoader /> </div>}
        </>
    )
}

export default ItemDetailContainer