import { createContext, useContext, useState } from "react";

const CartContext = createContext()
export const useCartContext = () => useContext(CartContext) /* Hacemos esto para evitar exportar dos veces */

const CartContextProvider = ({children}) => {
    
    const [cartList, setCartList] = useState([])
    const [favList, setFavList] = useState([])

    function addToCart (items) {

        if (cartList.find(p => p.id === items.id)) {
            const i = cartList.findIndex(p => p.id === items.id)
            cartList[i].cantidad = cartList[i].cantidad + items.cantidad
            setCartList([...cartList]) /* Spread operator */

        }else{
            setCartList([
                ...cartList,
                items
            ])
        }
    }

    function addToFav (items) {

        if (favList.find(p => p.id === items.id)) {
            setFavList ([...favList])

        }else{
            setFavList ([...favList, items])
        }
    }

    function deleteItem (id) {
        setCartList(cartList.filter(prod => prod.id !== id))
    }

    const totalPrice = () => {
        return cartList.reduce((sum, value) => (sum + (value.precio * value.cantidad)), 0)
    }

    const cartCounter = () => {
        return cartList.reduce((sum, value) => (sum + value.cantidad), 0)
    }

    const isInFav = (id) => {
        return favList.some(prod => prod.id == id)
    }

    function deleteFav (id) {
        setFavList(favList.filter(prod => prod.id !== id))
    }


    return (
        <>
            <CartContext.Provider value={{cartList, deleteFav, addToCart, addToFav, favList, deleteItem, totalPrice, cartCounter, isInFav}}>

                {children}

            </CartContext.Provider>
        </>
    )
}

export default CartContextProvider