import React from 'react'
import { useState, useEffect } from 'react'
import ItemDetail from './ItemDetail';


function ItemDetailContainer() {

    const [detail, setDetails] = useState({});

    useEffect(() => {
        
        const promise = fetch("https://mocki.io/v1/c30fe6d2-9797-4083-915b-348491b0e991");

        promise.then(data => data.json())
        .then((productDetail) => {

            setTimeout(() => {
                setDetails(productDetail)
            }, 2000)
        })
    }, [])

    return (
        <>
        {(Object.keys(detail).length < 1) ? console.log("El detalle se está procesando") : <ItemDetail beerDetail={detail}/>}
        </>
    )
}

export default ItemDetailContainer