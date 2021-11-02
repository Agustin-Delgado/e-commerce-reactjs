import Item from "./Item"

function ItemList (items){

    return (
        <>
            {
                items.productos.map(prod => 

                    <Item key={prod.id} id={prod.id} nombre={prod.nombre} precio={prod.precio} descripcion={prod.descripcion} img={prod.img}/> 
                )
            }
        </>
    )
}

export default ItemList