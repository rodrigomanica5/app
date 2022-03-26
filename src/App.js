import Header from "./components/Header";
import ItemListContainer from "./components/ItemListContainer";
import Footer from "./components/Footer";

function App() {
    return (
        <>
            <Header />
            <ItemListContainer greeting="Las mejores cervezas directo a tu casa"/>
            <Footer />
        </>
    )
};

export default App;