import { createContext, useState } from "react";

export const CartContext = createContext()

const { Provider } = CartContext

const MyProvider = ({ children }) => {

    const [cart, setCart] = useState([])

    const isInCart = (id) => {
        return cart.some(x => x.id === id)
    }

    const addItem = (item, qty) => {

        const newItem = {
            ...item,
            qty
        };

        if (isInCart(newItem.id)) {
            const productFind = cart.find(x => x.id === newItem.id)
            const productIndex = cart.indexOf(productFind)
            const auxArray = [...cart]
            auxArray[productIndex].qty += qty
            setCart(auxArray)
        } else {
            setCart([...cart, newItem])
        }
    }

    const deleteItem = (id) => {
        setCart(cart.filter(x => x.id !== id))
    }

    const emptyCart = () => {
        setCart([])
    }

    const getItemQty = () => {
        return cart.reduce((acc, x) => acc += x.qty, 0)
    }

    const getItemPrice = () => {
        return cart.reduce((acc, x) => acc += x.price * x.qty, 0)
    }

    return (
        <Provider value={{ cart, addItem, isInCart, deleteItem, emptyCart, getItemQty, getItemPrice }}>{children}</Provider>
    )
}

export default MyProvider;