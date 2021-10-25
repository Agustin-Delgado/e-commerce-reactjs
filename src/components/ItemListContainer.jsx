import { useEffect, useState } from "react"
import ItemList from "./ItemList"

function ItemListContainer ({titulo}){


    const [items, setItems] = useState([])
    console.log(items)


    const getItems = async() => {
        const data = await fetch("https://raw.githubusercontent.com/Agustin-Delgado/r-commerce/master/productos.json")
        const dataItems = await data.json()
        setItems(dataItems)
    } 

    useEffect(() => {
        setTimeout(() => getItems(),2000)
    }, [])

    return (
        <>
            <section className="productos">
                
                <h1 className="productos-title">{titulo}</h1>
                <div className="productos__row">

                    <ItemList productos={items}/>

                </div>

            </section>
        </>
    )
}

export default ItemListContainer