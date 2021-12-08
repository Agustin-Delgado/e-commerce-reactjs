import { useCartContext } from "../context/CartContext"
import ItemCount from "./ItemCount"

function ItemDetail({ id, img, precio, descripcion, stock, nombre, oferta }) {

    const { addToCart, addToFav, favList } = useCartContext()

    const onAdd = (cantidad) => {
        addToCart({ id, img, precio, descripcion, stock, nombre, cantidad, oferta })
    }

    const onFav = (state) => {
        var i = 0
        state ?
            addToFav({ id, img, precio, descripcion, stock, nombre, oferta })
            :
            i = favList.findIndex(p => p.id === id)
            favList.splice(i, 1)
    }

    return <>
        <div className="product__detail">

            <div className="product__detail-b1">

                <img className="product__detail-b1-img" src={img} alt="" />

            </div>

            <div className="product__detail-b2">

                <h1 className="product__detail-b2-title">{nombre}</h1>

                {
                    oferta ?

                        <div className="product__detail-b2-off">

                            <span className="product__detail-b2-off-oldprice">${precio}</span>

                            <div>

                                <span className="product__detail-b2-price">${precio - ((precio * oferta) / 100)}</span>
                                <span className="product__detail-b2-off-title">{oferta}% OFF</span>

                            </div>

                        </div>

                        :

                        <span className="product__detail-b2-price">${precio}</span>
                }

                <div className="product__detail-b2-description">
                    <h2 className="product__detail-b2-description-title">Descripción</h2>
                    <p className="product__detail-b2-description-text">{descripcion}</p>
                </div>

                <ItemCount id={id} onFav={onFav} initial={1} stock={stock} onAdd={onAdd} />

            </div>

        </div>
    </>
}

export default ItemDetail