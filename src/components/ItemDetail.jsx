import { useCartContext } from "../context/CartContext"
import ItemCount from "./ItemCount"

function ItemDetail({ id, img, precio, descripcion, stock, nombre }) {

    const { addToCart, cartList, addToFav, favList } = useCartContext()

    const onAdd = (cantidad) => {

        alert(`Cantidad seleccionada: ${cantidad}`)
        addToCart({ id, img, precio, descripcion, stock, nombre, cantidad })
    }

    const onFav = (state) => {
        console.log(state)
        state ? 
            addToFav({ id, img, precio, descripcion, stock, nombre }) 
            : 
            console.log('no anadido')
            const i = favList.findIndex(p => p === { id, img, precio, descripcion, stock, nombre })
            favList.splice(i, 1)
    }
    
    console.log(cartList)
    console.log(favList)

    return <>
        <div className="product__detail">

            <div className="product__detail-b1">

                <img className="product__detail-b1-img" src={img} alt="" />

            </div>

            <div className="product__detail-b2">

                <h1 className="product__detail-b2-title">{nombre}</h1>
                <span className="product__detail-b2-price">${precio}</span>
                <div className="product__detail-b2-description">
                    <h2 className="product__detail-b2-description-title">Descripción</h2>
                    <p className="product__detail-b2-description-text">{descripcion}</p>
                </div>
                
                <ItemCount onFav={onFav} initial={1} stock={stock} onAdd={onAdd} />

            </div>

        </div>
    </>
}

export default ItemDetail