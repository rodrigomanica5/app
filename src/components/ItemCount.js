import { Link } from 'react-router-dom'

function ItemCount({ stock, quantity, setQuantity, onAdd, checkout }) {

    const handleAdd = () => {
        if (quantity < stock) {
            setQuantity(quantity + 1)
        }
    }

    const handleRemove = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1)
        }
    }

    return (
        <div className={`col-xl-8 d-flex ${checkout ? "justify-content-end" : ""}`}>
            {
                (checkout === true)
                    ? <Link to="/cart" className='col-xl-6'><button className='btn btnComprar col-xl-12 mx-auto'>Ver Carrito</button></Link>
                    :
                    <div className='col-xl-12 d-flex'>
                        <div className='col-xl-6 d-flex'>
                            <button className='btn btnComprar btnControl col-xl-auto' onClick={handleRemove}>-</button>
                            <p className='d-flex col-xl-2 m-0 align-items-center justify-content-center'>{quantity} </p>
                            <button className='btn btnComprar btnControl col-xl-3' onClick={handleAdd}>+</button>
                        </div>
                        <button className='btn btnComprar col-xl-6 mx-auto' onClick={onAdd}>Agregar al Carrito</button>
                    </div>
            }
        </div>
    )
}

export default ItemCount