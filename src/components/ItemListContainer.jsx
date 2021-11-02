import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";
import ItemList from "./ItemList"

function ItemListContainer() {

    const [items, setItems] = useState([])
    const [loading, setLoading] = useState(true)
    const { categoriaId } = useParams()

    useEffect(() => {

        const getItems = async () => {

            if (categoriaId) {

                const data = await fetch("https://raw.githubusercontent.com/Agustin-Delgado/r-commerce/master/public/data.json")
                .finally(() => setLoading(false))
                const dataItems = await data.json()
                setItems(dataItems.filter(prod => prod.categoria === categoriaId))
            }
            else {

                const data = await fetch("https://raw.githubusercontent.com/Agustin-Delgado/r-commerce/master/public/data.json")
                .finally(() => setLoading(false))
                const dataItems = await data.json()
                setItems(dataItems)
            }

        }
        setTimeout(() => getItems(), 2000)
        
    }, [categoriaId])

    return (
        <>
            <section className="productos">

                <h1 className="productos-title">Productos</h1>
                <div className="productos__row">
                    {
                        loading ? <div className="lds-dual-ring"></div> :

                            <ItemList productos={items} />
                    }

                </div>

            </section>
        </>
    )
}

export default ItemListContainer