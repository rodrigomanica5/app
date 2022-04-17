import React from 'react'
import { useState, useEffect } from 'react'
import ItemDetail from '../components/ItemDetail';
import { useParams } from 'react-router-dom';


function ItemDetailContainer() {

    const [detail, setDetail] = useState({});
    const { productId } = useParams()

    useEffect(() => {

        const promise = fetch("https://mocki.io/v1/6bdfa5a3-54b4-4ad1-bc6b-58119174c9c7");

        promise.then(data => data.json())
            .then((productDetail) => {

                if (productId) {
                    setDetail(productDetail.find(x => x.id == productId))
                }
            })
            .catch(error => { console.log("Error al cargar el detalle del producto") })

    }, [])

    return (
        <>
            {(Object.keys(detail).length < 1) ? console.log("El detalle se está procesando") : <ItemDetail beerDetail={detail} />}
        </>
    )
}

export default ItemDetailContainer