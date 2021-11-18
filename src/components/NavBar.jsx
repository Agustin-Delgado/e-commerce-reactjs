import { useState } from 'react';
import { Link } from "react-router-dom";
import logo from '../img/logoWhite.png';
import CartWidget from './CartWidget';
import { useCartContext } from "../context/CartContext"

function NavBar() {

    const { favList, deleteFav } = useCartContext()
    const [showCategory, toggleShowCategory] = useState(false)
    const [showFavs, toggleShowFavs] = useState(false)

    return (

        <header className="header">

            <Link to="/">

                <img className="header-logo" src={logo} alt="Logo" />

            </Link>

            <form className="header__form" action="">

                <input className="header__form-search" placeholder="Buscar productos, marcas y más..." type="text" />
                <button className="header__form-submit">

                    <svg pointerEvents="all" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
                        <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"></path>
                    </svg>

                </button>

            </form>

            <nav className="header__navbar">

                <ul className="header__navbar-list">

                    <li className="header__navbar-list-item">

                        <Link to="/" className="header__navbar-list-item-title" href="/#">Inicio</Link>

                    </li>

                    <li onMouseEnter={() => toggleShowCategory(!showCategory)} onMouseLeave={() => toggleShowCategory(!showCategory)} className="header__navbar-list-item">

                        <a className="header__navbar-list-item-title" href="/#">Categorias <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-chevron-down" viewBox="0 0 16 16">
                            <path fillRule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"></path>
                        </svg></a>

                        {showCategory && <div className="header__navbar-list-item-categoria">

                            <ul className="header__navbar-list-item-categoria-list">

                                <li className="header__navbar-list-item-categoria-list-item">

                                    <Link to={`/categoria/tecnologia`} className="header__navbar-list-item-categoria-list-item-title">Técnologia</Link>

                                </li>

                                <li className="header__navbar-list-item-categoria-list-item">

                                    <Link to={`/categoria/accesorios`} className="header__navbar-list-item-categoria-list-item-title" href="">Accesorios</Link>

                                </li>

                                <li className="header__navbar-list-item-categoria-list-item">

                                    <Link to={`/categoria/muebles`} className="header__navbar-list-item-categoria-list-item-title" href="">Muebles</Link>

                                </li>

                                <li className="header__navbar-list-item-categoria-list-item">

                                    <Link to={`/categoria/herramientas`} className="header__navbar-list-item-categoria-list-item-title" href="">Herramientas</Link>

                                </li>

                            </ul>

                        </div>}

                    </li>

                    <li onMouseEnter={() => toggleShowFavs(!showFavs)} onMouseLeave={() => toggleShowFavs(!showFavs)} className="header__navbar-list-item">

                        <a className="header__navbar-list-item-title" href="/#">Favoritos <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-chevron-down" viewBox="0 0 16 16">
                            <path fillRule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"></path>
                        </svg></a>

                        {
                            showFavs && <div className="header__navbar-list-item-favoritos">

                                {favList == "" ?

                                    <div className="header__navbar-list-item-favoritos-empty">

                                        <h2 className="header__navbar-list-item-favoritos-empty-title">Aún no hay productos en guardados
                                            en favoritos</h2>
                                        <p className="header__navbar-list-item-favoritos-empty-text">Sigue explorando para encontrar tu
                                            proxima compra!</p>

                                    </div>

                                    :

                                    favList.map(prod =>

                                        <div className="header__navbar-list-item-favoritos-contains">

                                            <Link to={`/detalle/${prod.id}`}>

                                                <img className="header__navbar-list-item-favoritos-contains-img" src={prod.img} alt="" />
                                            </Link>

                                            <div className="header__navbar-list-item-favoritos-contains-text">

                                                <Link to={`/detalle/${prod.id}`}>

                                                    <h3 className="header__navbar-list-item-favoritos-contains-text-title">{prod.nombre}</h3>

                                                    {
                                                        prod.oferta ?

                                                            <div className="header__navbar-list-item-favoritos-contains-text-off">   

                                                                <span className="header__navbar-list-item-favoritos-contains-text-off-price">${prod.precio - ((prod.precio * prod.oferta) / 100)}</span>
                                                                <span className="header__navbar-list-item-favoritos-contains-text-off-title">{prod.oferta}% OFF</span>

                                                            </div>


                                                            :

                                                            <span className="header__navbar-list-item-favoritos-contains-text-price">${prod.precio}</span>
                                                    }

                                                </Link>

                                            </div>

                                            <div className="header__navbar-list-item-favoritos-contains-options">

                                                <a onClick={() => deleteFav(prod.id)} className="header__navbar-list-item-favoritos-contains-options-delete">Eliminar</a>

                                            </div>

                                        </div>


                                    )
                                }

                            </div>
                        }

                    </li>

                    <li className="header__navbar-list-item">

                        <Link to={`/cart`}>

                            <CartWidget />

                        </Link>

                    </li>

                </ul>

            </nav>

        </header>
    )
}

export default NavBar
