import React from 'react'
import logo from "../img/brewsy.PNG"
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import NavBar from './NavBar';

function Header() {
    return (
        <>
            <header>
                <div className="logoNav">
                    <img src={logo} alt="Logo Brewsy" />
                </div>
                <NavBar/>
                <div className="divBag">
                    <ShoppingBagOutlinedIcon fontSize="large" className="bag" />
                </div>
            </header>
        </>
    )
}

export default Header