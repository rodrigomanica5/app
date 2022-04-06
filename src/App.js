import ItemListContainer from "./components/ItemListContainer";
import Footer from "./components/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Cart from "./components/Cart";
import ItemDetailContainer from "./components/ItemDetailContainer";
import NavBar from "./components/NavBar";

function App() {
    return (
        <>
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
        </>
    )
};

export default App;

{/* <ItemDetailContainer /> */ }