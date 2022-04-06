import React from 'react'
import { useState, useEffect } from 'react'
import ItemDetail from './ItemDetail';
import { useParams } from 'react-router-dom';


function ItemDetailContainer() {

    const [detail, setDetails] = useState({});
    const { productId } = useParams()

    console.log(productId)

    useEffect(() => {

        const promise = fetch("https://mocki.io/v1/0c1c80ad-4da2-450c-865a-ba10d6d58af2");

        promise.then(data => data.json())
            .then((productDetail) => {

                if (productId) {
                    setDetails(productDetail.filter(x => x.id == productId))
                }
            })

    }, [])

    console.log(detail)

    return (
        <>
            {(Object.keys(detail).length < 1) ? console.log("El detalle se está procesando") : <ItemDetail beerDetail={detail} />}
        </>
    )
}

export default ItemDetailContainer


// https://mocki.io/v1/c30fe6d2-9797-4083-915b-348491b0e991