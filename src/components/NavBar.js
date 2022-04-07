import React from 'react';
import { Link, NavLink } from 'react-router-dom'
import CartWidget from './CartWidget';

const tabs = [{ tag: "origen" }, { tag: "estilos" }, { tag: "marcas" }];

const origen = [
    {
        country: "Alemania",
        url: "/collections/alemania"
    },
    {
        country: "Bélgica",
        url: "/collections/belgica"
    }
]

const estilos = [
    {
        style: "Weissbier",
        url: "/collections/weissbier"
    },
    {
        style: "Witbier",
        url: "/collections/witbier"
    },
    {
        style: "Belgian Ale",
        url: "/collections/belgian-ale"
    },
    {
        style: "Abbey Dubbel",
        url: "/collections/abbey-dubbel"
    },
    {
        style: "Belgian Strong Ale",
        url: "/collections/belgian-strong-ale"
    },
    {
        style: "Abbey Tripel",
        url: "/collections/abbey-tripel"
    },
    {
        style: "Helles",
        url: "/collections/helles"
    },
    {
        style: "Pils",
        url: "/collections/pils"
    },
    {
        style: "Imperial Stout",
        url: "/collections/imperial-stout"
    },
    {
        style: "Sour Red",
        url: "/collections/sour-red"
    },
    {
        style: "Oktoberfest",
        url: "/collections/oktoberfest"
    },
]

const marcas = [
    {
        brand: "Paulaner",
        url: "/collections/paulaner"
    },
    {
        brand: "Leffe",
        url: "/collections/leffe"
    },
    {
        brand: "Hoegaarden",
        url: "/collections/hoegaarden"
    },
    {
        brand: "Franziskaner",
        url: "/collections/franziskaner"
    },
    {
        brand: "Triple Karmeliet",
        url: "/collections/karmeliet"
    },
    {
        brand: "Augustiner",
        url: "/collections/augustiner"
    },
    {
        brand: "Bastogne",
        url: "/collections/bastogne"
    },
    {
        brand: "Becks",
        url: "/collections/becks"
    },
    {
        brand: "Bitburger",
        url: "/collections/bitburger"
    },
]

function NavBar() {

    return (
        <>
            <nav className="navbar navbar-expand-lg">
                <div className="container-fluid">
                    <Link className='col-xl-4' to="/"><img className='logoNav' src='./img/brewsy.png' alt='Logo de Brewsy'></img></Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="col-xl-8 collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="col-xl-6 d-flex align-items-center justify-content-evenly p-0 navbar-nav me-auto mb-2 mb-lg-0">

                        {tabs.map((element, index) => {
                            return <li key={index} className="nav-item dropdown"> <p className="categories m-0 nav-link dropdown-toggle" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false"> {element.tag} </p>

                                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    {(element.tag == "origen") ? origen.map((element, index) => {
                                        return <li key={index}><Link className="dropdown-item" to={element.url}>{element.country}</Link></li>
                                    })
                                        : (element.tag == "estilos") ? estilos.map((element, index) => {
                                            return <li key={index}><Link className="dropdown-item" to={element.url}>{element.style}</Link></li>
                                        })
                                            : (element.tag == "marcas") ? marcas.map((element, index) => {
                                                return <li key={index}><Link className="dropdown-item" to={element.url}>{element.brand}</Link></li>
                                            })
                                                : console.log("no")}
                                </ul>
                            </li>
                        })}
                        </ul>

                        <Link className='col-xl-3 d-flex justify-content-center' to="/cart"> <CartWidget /> </Link>

                        <form className="col-xl-3 d-flex">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            {/* <button class="btn btn-outline-success" type="submit">Search</button> */}
                        </form>
                    </div>
                </div>
            </nav>
        </>
    )
};

export default NavBar;