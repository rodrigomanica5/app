import React from 'react'
import ItemCount from './ItemCount'
import { useState } from 'react'

function ItemDetail({ beerDetail }) {

    const [quantity, setQuantity] = useState(1)
    const [checkout, setCheckout] = useState(false)

    const onAdd = () => {

        setCheckout(true)

        const selectedItem = {
            img: beerDetail.pictureURL,
            name: beerDetail.name,
            unitPrice: beerDetail.price,
            totalPrice: beerDetail.price * quantity,
            quantity: quantity
        }

        console.log(selectedItem)
    }

    return (
        <>
            <div className='detailSection row col-xl-8 mx-auto my-5 py-3'>
                <div className='col-xl-6'>
                    <img src={beerDetail.pictureURL} alt={beerDetail.name} ></img>
                </div>
                <div className='col-xl-6 mt-5'>
                    <h3> {beerDetail.name} {beerDetail.size} </h3>
                    <h5>{beerDetail.type} | {beerDetail.origin} </h5>
                    <h5>ABV: {beerDetail.abv} </h5>
                    <h3 className='mt-4'>$ {beerDetail.price} </h3>
                    {(beerDetail.description)
                        ? <p className='mt-4'> {beerDetail.description} </p>
                        : console.log("No hay descripción")}

                    <ItemCount stock={beerDetail.stock} quantity={quantity} setQuantity={setQuantity} onAdd={onAdd} checkout={checkout} />
                </div>
            </div>
        </>
    )
}

export default ItemDetail