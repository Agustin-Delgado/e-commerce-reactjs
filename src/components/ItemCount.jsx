import { useState } from "react"

function ItemCount ({stock, onAdd}) {

    const [count, setCount] = useState(1)

    const handlerAdd =()=>{
        if(count < stock) setCount(count + 1)    
    }

    const handlerRm =()=>{
        if(count > 1) setCount(count - 1)
    }   

    const handlerOnAdd=()=>{
        onAdd(count)
        setCount(1)
    }


    return (
        <>
              <div className="productos__row-card-buy-quantity-container">

                    <div className="productos__row-card-buy-quantity-container-selector">

                        <svg onClick={handlerRm} className="productos__row-card-buy-quantity-container-selector-substract" xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
                            <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"></path>
                            <path d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8z"></path>
                        </svg>
                        <label>{count}</label>
                        <svg onClick={handlerAdd} className ="productos__row-card-buy-quantity-container-selector-add" xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
                        <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"></path>
                        <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"></path>
                        </svg>

                    </div>

                    <a onClick={handlerOnAdd} className="productos__row-card-buy-quantity-container-apply" href="/#">Aplicar</a>
            </div>
        </>
    )
}

export default ItemCount