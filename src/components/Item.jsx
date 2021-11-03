import { Link } from "react-router-dom";
import ItemCount from "./ItemCount"
import { useState } from "react";

const onAdd = (count) => {

    console.log(`Cantidad seleccionada: ${count}`)
}

function Item({ id, img, nombre, precio, categoria, descripcion, favoritos, stock, cantidad }) {

    const [show, toggleShow] = useState(false)
    console.log(stock)

    return (
        <>

            <div id={`${id}`} className="productos__row-card">

                <Link to={`/detalle/${id}`}>

                    <h2 className="productos__row-card-title">{nombre}</h2>

                </Link>

                <Link to={`/detalle/${id}`}>

                    <img className="productos__row-card-img" src={`${img}`} alt="" />

                </Link>

                <span className="productos__row-card-price">{`$${precio}`}</span>
                {!show && <p className="productos__row-card-description">{descripcion}</p>}
                {show && <ItemCount initial={1} stock={stock} onAdd={onAdd} />}

                <div className="productos__row-card-buy">

                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-heart notFillHeart" viewBox="0 0 16 16">
                        <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z"></path>
                    </svg>

                    <a className="productos__row-card-buy-link" href="#/checkout">Comprar</a>

                    <svg onClick={() => toggleShow(!show)} className="bi bi-cart3" xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
                        <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"></path>
                    </svg>
                    <div className="productos__row-card-buy-quantity"></div>

                </div>

            </div>

        </>
    )
}

export default Item