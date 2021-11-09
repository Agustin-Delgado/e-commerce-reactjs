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
        setFavList ([...favList, items])
    }
 
    const showList = () => {
        console.log(cartList)
    }

    return (
        <>
            <CartContext.Provider value={{cartList, showList, addToCart, addToFav, favList}}>

                {children}

            </CartContext.Provider>
        </>
    )
}

export default CartContextProvider