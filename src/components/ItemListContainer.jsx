import { useEffect, useState } from "react"
import ItemList from "./ItemList"

function ItemListContainer ({titulo}){

    const [items, setItems] = useState([])
    const [loading, setLoading] = useState(true)

    const getItems = async() => {
        
        const data = await fetch("https://raw.githubusercontent.com/Agustin-Delgado/r-commerce/master/public/data.json")
        .finally(()=> setLoading(false))
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
                { 
                    loading ? <div className="lds-dual-ring"></div> :

                    <ItemList productos={items}/>
                }

                </div>

            </section>
        </>
    )
}

export default ItemListContainer