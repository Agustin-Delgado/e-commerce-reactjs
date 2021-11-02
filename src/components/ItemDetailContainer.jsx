import { useEffect, useState } from "react"
import { useParams } from "react-router"
import ItemDetail from "./ItemDetail"

function ItemDetailContainer() {

    const [detail, setDetail] = useState([])
    const { detalleId } = useParams()
    const [loading, setLoading] = useState(true)

    useEffect(() => {

        const getItem = async () => {

            const data = await fetch("https://raw.githubusercontent.com/Agustin-Delgado/r-commerce/master/public/data.json")
            .finally(() => setLoading(false))
            const dataItems = await data.json()
            console.log(dataItems);
            setDetail(dataItems.find(prod => prod.id === detalleId))
        }

        setTimeout(() =>

            getItem(), 2000)
            
    }, [detalleId])

    console.log(detail);

    return <>

        <section className="productos">

            <h1 className="productos-title">Productos</h1>
            <div className="productos__row">
                {
                    loading ? <div className="lds-dual-ring"></div> :

                        <ItemDetail nombre={detail.nombre} img={detail.img} precio={detail.precio} descripcion={detail.descripcion} stock={detail.stock} />
                }

            </div>

        </section>
    </>

}

export default ItemDetailContainer