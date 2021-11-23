

function Purchased() {

    return <>
        <div class="purchased__contain">
            
            <svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" fill="currentColor" class="bi bi-check2" viewBox="0 0 16 16">
                <path d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z"></path>
            </svg>
            <h2 class="purchased__contain-text">¡Gracias 432432432 por elegirnos!</h2>
    
            <span class="purchased__contain-email">Corroborá las instrucciones de retiro en tu correo: 432432432432</span>
    
            <div class="checkout__contain-details">
    
                <h2 class="checkout__contain-details-title">Detalle de la compra</h2><div class="checkout__contain-details-content">
                  <img class="checkout__contain-details-content-img" src="./resources/images/productos/p4.webp" alt=""/>
                  <h3 class="checkout__contain-details-content-title">Silla Sillón Gamer</h3>
                  <span class="checkout__contain-details-content-quantity">Cantidad: 1</span>
                  <span class="checkout__contain-details-content-subtotal">Subtotal: $29999</span>
              </div>

                <div class="checkout__contain-details-total">
                    
                    <h3 class="checkout__contain-details-total-title">Total: $29999</h3>
                </div>

            </div></div>
    </>
}

export default Purchased