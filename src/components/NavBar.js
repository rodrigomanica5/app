import logo from "../img/brewsy.PNG"
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';

function NavBar() {
    return (
        <>
            <nav>
                <div className="logoNav">
                    <img src={logo} alt="Logo Brewsy" />
                </div>
                <div className="tabs">
                    <a href="#">Origen</a>
                    <a href="#">Estilos</a>
                    <a href="#">Marcas</a>
                    <a href="#">Recomendadas</a>
                </div>
                <div className="divBag">
                    <ShoppingBagOutlinedIcon fontSize="large" className="bag" />
                </div>
            </nav>
        </>
    )
};

export default NavBar;