import logo from '../img/logoWhite.png';
import CartWidget from './CartWidget';

function NavBar() {
    return (
        <header className="header">

            <img className="header-logo" src={logo} alt="Logo" />

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

                        <a className="header__navbar-list-item-title" href="/#">Inicio</a>

                    </li>

                    <li className="header__navbar-list-item">

                        <a className="header__navbar-list-item-title" href="/#">Favoritos <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-chevron-down" viewBox="0 0 16 16">
                            <path fillRule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"></path>
                        </svg></a>

                    </li>

                    <li className="header__navbar-list-item">

                        <CartWidget/>

                    </li>

                </ul>

            </nav>

        </header>
    )
}

export default NavBar