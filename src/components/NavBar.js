import React from 'react';
import { Link } from 'react-router-dom'
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
        url: "/collections/triple-karmeliet"
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
        <nav className="navbar navbar-expand-lg navbar-light sticky-top">
            <div className="container-fluid d-flex justify-content-around px-0 px-xl-5">
                <Link to="/"><img className='logoNav' src='/img/brewsy.svg' alt='Logo de Brewsy' height="60px" width="150px"></img></Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="row col-xl-8 d-xl-flex justify-content-evenly justify-content-xl-end collapse navbar-collapse" id="navbarNavDropdown">
                    <ul className="col-9 col-xl-6 d-flex align-items-start align-items-xl-center justify-content-evenly p-0 navbar-nav mb-2 mb-lg-0">

                        {tabs.map((element, index) => {
                            return <li key={index} className="nav-item dropdown"> <p className="categories m-0 nav-link dropdown-toggle" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false"> {element.tag} </p>

                                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    {(element.tag === "origen") ? origen.map((element, index) => {
                                        return <li key={index}><Link className="dropdown-item" to={element.url}>{element.country}</Link></li>
                                    })
                                        : (element.tag === "estilos") ? estilos.map((element, index) => {
                                            return <li key={index}><Link className="dropdown-item" to={element.url}>{element.style}</Link></li>
                                        })
                                            : (element.tag === "marcas") ? marcas.map((element, index) => {
                                                return <li key={index}><Link className="dropdown-item" to={element.url}>{element.brand}</Link></li>
                                            })
                                                : ""}
                                </ul>
                            </li>
                        })}
                    </ul>

                    <Link className='col-2 col-xl-1 d-flex justify-content-center align-self-start mt-2 mt-xl-0' to="/cart"> <CartWidget /> </Link>

                    <form className="col-8 col-xl-3 d-flex">
                        <input className="form-control me-2" type="search" placeholder="Busca tu cerveza..." aria-label="Search" disabled />
                    </form>
                </div>
            </div>
        </nav>
    )
};

export default NavBar;