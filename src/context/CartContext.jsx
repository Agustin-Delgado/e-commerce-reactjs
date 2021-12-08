import { createContext, useContext, useState } from "react";

const CartContext = createContext()
export const useCartContext = () => useContext(CartContext)

const CartContextProvider = ({ children }) => {

    const [cartList, setCartList] = useState([])
    const [favList, setFavList] = useState([])

    function addToCart(items) {

        if (cartList.find(p => p.id === items.id)) {
            const i = cartList.findIndex(p => p.id === items.id)
            cartList[i].cantidad = cartList[i].cantidad + items.cantidad
            setCartList([...cartList])

        } else {
            setCartList([
                ...cartList,
                items
            ])
        }
    }

    function addToFav(items) {

        if (favList.find(p => p.id === items.id)) {
            setFavList([...favList])

        } else {
            setFavList([...favList, items])
        }
    }

    function deleteItem(id) {
        setCartList(cartList.filter(prod => prod.id !== id))
    }

    const totalPriceCart = () => {

        return cartList.reduce((sum, value) => (sum + (value.precio - ((value.precio * value.oferta) / 100))), 0)
    }

    const cartCounter = () => {

        return cartList.reduce((sum, value) => (sum + value.cantidad), 0)
    }

    const isInFav = (id) => {
        return favList.some(prod => prod.id === id)
    }

    function deleteFav(id) {
        setFavList(favList.filter(prod => prod.id !== id))
    }

    function clearCart() {
        setCartList([])
    }


    return (
        <>
            <CartContext.Provider value={{ clearCart, cartList, deleteFav, addToCart, addToFav, favList, deleteItem, totalPriceCart, cartCounter, isInFav }}>

                {children}

            </CartContext.Provider>
        </>
    )
}

export default CartContextProvider