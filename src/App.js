import ItemListContainer from "./components/ItemListContainer";
import Footer from "./components/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Cart from "./components/Cart";
import ItemDetailContainer from "./components/ItemDetailContainer";
import NavBar from "./components/NavBar";
import { CartContext } from "./context/MyContext";
import { useState } from 'react'


function App() {

    const [cart, setCart] = useState([])

    const addToCart = (product) => {
        setCart([...cart, product])
    }

    const isInCart = (id) => {
        return cart.find(x => x.id === id)
    }

    const cartQuantity = () => {
        return cart.length
    }

    return (
        <>
            <CartContext.Provider value={{ cart, addToCart, isInCart, cartQuantity }} >
                <BrowserRouter>
                    <NavBar />
                    <Routes>
                        <Route path="/" element={<ItemListContainer />} />
                        <Route path="/collections/:collectionName" element={<ItemListContainer />} />
                        <Route path="/cart" element={<Cart />} />
                        <Route path="/product/:productId" element={<ItemDetailContainer />} />
                    </Routes>
                    <Footer />
                </BrowserRouter>
            </CartContext.Provider>
        </>
    )
};

export default App;