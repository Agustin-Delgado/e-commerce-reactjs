import Item from "./Item"

function ItemList (items){


    return (
        <>
            {
                items.productos.map(prod => 

                    <Item key={prod.identificador} nombre={prod.nombre} precio={prod.precio} descripcion={prod.descripcion}/>
                )
            }
        </>
    )
}

export default ItemList