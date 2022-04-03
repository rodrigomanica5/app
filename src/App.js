import Header from "./components/Header";
import ItemListContainer from "./components/ItemListContainer";
import Footer from "./components/Footer";
import ItemDetailContainer from "./components/ItemDetailContainer";

function App() {
    return (
        <>
            <Header />
            <ItemListContainer greeting="Las mejores cervezas directo a tu casa"/>
            <ItemDetailContainer/>
            <Footer />
        </>
    )
};

export default App;