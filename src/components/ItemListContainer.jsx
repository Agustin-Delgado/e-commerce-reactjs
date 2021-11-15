import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";
import { getFirestore } from "../services/getFirestore";
import ItemList from "./ItemList"

function ItemListContainer() {

    const [items, setItems] = useState([])
    const [loading, setLoading] = useState(true)
    const { categoriaId } = useParams()

    useEffect(() => {

        if (categoriaId) {

            const db = getFirestore()
            const dbQuery = db.collection('productos').where('categoria', '==', categoriaId)
            dbQuery.get()
                .then(resp => setItems(resp.docs.map(prod => prod.data())))
                .finally(() => setLoading(false))
        }
        else {
            const db = getFirestore()
            const dbQuery = db.collection('productos').get()
            dbQuery
                .then(resp => setItems(resp.docs.map(prod => prod.data())))
                .finally(() => setLoading(false))
        }

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