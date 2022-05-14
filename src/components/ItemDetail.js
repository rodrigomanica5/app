import ItemCount from './ItemCount'
import { useContext, useState } from 'react'
import { CartContext } from '../context/CartContext'

function ItemDetail({ beerDetail }) {

    const [quantity, setQuantity] = useState(1)
    const [checkout, setCheckout] = useState(false)

    const { addItem, isInCart } = useContext(CartContext)

    const onAdd = () => {

        setCheckout(true)
        addItem(beerDetail, quantity)
        isInCart(beerDetail.id)
    }

    return (
        <div className='detailSection row col-xl-9 mx-auto my-5 py-3'>
            <div className='col-xl-6'>
                <img src={beerDetail.pictureURL} alt={beerDetail.name} ></img>
            </div>
            <div className='col-xl-6 mt-5'>
                <h3> {beerDetail.name} {beerDetail.size} </h3>
                <h5>{beerDetail.origin} | {beerDetail.type} | ABV: {beerDetail.abv} </h5>
                <hr />
                <div className='col-xl-12 d-flex justify-content-evenly'>
                    <h3 className='col-xl-4 mb-0 pt-1'>${beerDetail.price} </h3>
                    <ItemCount stock={beerDetail.stock} quantity={quantity} setQuantity={setQuantity} onAdd={onAdd} checkout={checkout} />
                </div>
                <hr />
                <p className='mb-0'>Stock: {beerDetail.stock} unidades.</p>
                <h5 className='mt-4 mb-3'>Información del producto</h5>
                {beerDetail.description && <p> {beerDetail.description} </p>}
            </div>
        </div>
    )
}

export default ItemDetail