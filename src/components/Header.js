import React from 'react'
import NavBar from './NavBar';

function Header() {

    const tabs = [
        {
            link: "#",
            tag: "origen"
        },

        {
            link: "#",
            tag: "estilos"
        },
        {
            link: "#",
            tag: "marcas"
        },
        {
            link: "#",
            tag: "recomendadas"
        }
    ];

    return (
        <>
            <header>
                <div className="logoNav">
                    <a href='index.html'><img src="img/brewsy.PNG" alt="Logo Brewsy" /></a>
                </div>
                <NavBar sections={tabs} />
            </header>
        </>
    )
}

export default Header