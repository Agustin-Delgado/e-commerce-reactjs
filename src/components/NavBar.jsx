import logo from '../img/logoWhite.png';

function NavBar() {
    return (
        <header className="header">

            <img className="header-logo" src={logo} alt="Logo" />
            {/* <img src="asset/img/,,,"/> */} {/* Para añadir img desde asset */}

            <form className="header__form" action="">

                <input className="header__form-search" placeholder="Buscar productos, marcas y más..." type="text" />
                <button className="header__form-submit">

                    <svg pointer-events="all" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
                        <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"></path>
                    </svg>

                </button>

            </form>

            <nav className="header__navbar">

                <ul className="header__navbar-list">

                    <li className="header__navbar-list-item">

                        <a className="header__navbar-list-item-title" href>Inicio</a>

                    </li>

                    <li className="header__navbar-list-item">

                        <a className="header__navbar-list-item-title" href>Favoritos <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-down" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"></path>
                        </svg></a>

                    </li>

                    <li className="header__navbar-list-item">

                        <a className="header__navbar-list-item-title" href>
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-cart" viewBox="0 0 16 16">
                                <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"></path>
                            </svg>
                        </a>

                    </li>

                </ul>

            </nav>

        </header>
    )
}

export default NavBar
