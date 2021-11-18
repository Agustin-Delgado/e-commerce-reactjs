import { useCartContext } from "../context/CartContext"

function Checkout() {

    const { cartList, totalPrice } = useCartContext()

    return <>

        <h1 class="checkout-title">Checkout</h1>
        <div class="checkout__contain">
            <div class="checkout__contain-content">
                <div class="checkout__contain-content-card">
                    <div class="checkout__contain-content-card-flip">
                        <div class="checkout__contain-content-card-flip-front">
                            <div class="checkout__contain-content-card-flip-front-chip"></div>
                            <div class="checkout__contain-content-card-flip-front-logo">
                                <svg version="1.1" id="visa" xmlns="http://www.w3.org/2000/svg"
                                    x="0px" y="0px" width="47.834px"
                                    height="47.834px" viewBox="0 0 47.834 47.834">
                                    <g>
                                        <g>
                                            <path d="M44.688,16.814h-3.004c-0.933,0-1.627,0.254-2.037,1.184l-5.773,13.074h4.083c0,0,0.666-1.758,0.817-2.143
                                        c0.447,0,4.414,0.006,4.979,0.006c0.116,0.498,0.474,2.137,0.474,2.137h3.607L44.688,16.814z M39.893,26.01
                                        c0.32-0.819,1.549-3.987,1.549-3.987c-0.021,0.039,0.317-0.825,0.518-1.362l0.262,1.23c0,0,0.745,3.406,0.901,4.119H39.893z
                                        M34.146,26.404c-0.028,2.963-2.684,4.875-6.771,4.875c-1.743-0.018-3.422-0.361-4.332-0.76l0.547-3.193l0.501,0.228
                                        c1.277,0.532,2.104,0.747,3.661,0.747c1.117,0,2.313-0.438,2.325-1.393c0.007-0.625-0.501-1.07-2.016-1.77
                                        c-1.476-0.683-3.43-1.827-3.405-3.876c0.021-2.773,2.729-4.708,6.571-4.708c1.506,0,2.713,0.31,3.483,0.599l-0.526,3.092
                                        l-0.351-0.165c-0.716-0.288-1.638-0.566-2.91-0.546c-1.522,0-2.228,0.634-2.228,1.227c-0.008,0.668,0.824,1.108,2.184,1.77
                                        C33.126,23.546,34.163,24.783,34.146,26.404z M0,16.962l0.05-0.286h6.028c0.813,0.031,1.468,0.29,1.694,1.159l1.311,6.304
                                        C7.795,20.842,4.691,18.099,0,16.962z M17.581,16.812l-6.123,14.239l-4.114,0.007L3.862,19.161
                                        c2.503,1.602,4.635,4.144,5.386,5.914l0.406,1.469l3.808-9.729L17.581,16.812L17.581,16.812z M19.153,16.8h3.89L20.61,31.066
                                        h-3.888L19.153,16.8z" />
                                        </g>
                                    </g>
                                </svg>
                            </div>
                            <div class="checkout__contain-content-card-flip-front-number"></div>
                            <div class="checkout__contain-content-card-flip-front-holder">
                                <label>Nombre y apellido</label>
                                <div></div>
                            </div>
                            <div class="checkout__contain-content-card-flip-front-expiration">
                                <label>Fecha de expiración</label>
                                <div></div>
                            </div>
                        </div>
                        <div class="checkout__contain-content-card-flip-back">
                            <div class="checkout__contain-content-card-flip-back-strip"></div>
                            <div class="checkout__contain-content-card-flip-back-logo">
                                <svg version="1.1" id="visa" xmlns="http://www.w3.org/2000/svg"
                                    x="0px" y="0px" width="47.834px"
                                    height="47.834px" viewBox="0 0 47.834 47.834">
                                    <g>
                                        <g>
                                            <path d="M44.688,16.814h-3.004c-0.933,0-1.627,0.254-2.037,1.184l-5.773,13.074h4.083c0,0,0.666-1.758,0.817-2.143
                                        c0.447,0,4.414,0.006,4.979,0.006c0.116,0.498,0.474,2.137,0.474,2.137h3.607L44.688,16.814z M39.893,26.01
                                        c0.32-0.819,1.549-3.987,1.549-3.987c-0.021,0.039,0.317-0.825,0.518-1.362l0.262,1.23c0,0,0.745,3.406,0.901,4.119H39.893z
                                        M34.146,26.404c-0.028,2.963-2.684,4.875-6.771,4.875c-1.743-0.018-3.422-0.361-4.332-0.76l0.547-3.193l0.501,0.228
                                        c1.277,0.532,2.104,0.747,3.661,0.747c1.117,0,2.313-0.438,2.325-1.393c0.007-0.625-0.501-1.07-2.016-1.77
                                        c-1.476-0.683-3.43-1.827-3.405-3.876c0.021-2.773,2.729-4.708,6.571-4.708c1.506,0,2.713,0.31,3.483,0.599l-0.526,3.092
                                        l-0.351-0.165c-0.716-0.288-1.638-0.566-2.91-0.546c-1.522,0-2.228,0.634-2.228,1.227c-0.008,0.668,0.824,1.108,2.184,1.77
                                        C33.126,23.546,34.163,24.783,34.146,26.404z M0,16.962l0.05-0.286h6.028c0.813,0.031,1.468,0.29,1.694,1.159l1.311,6.304
                                        C7.795,20.842,4.691,18.099,0,16.962z M17.581,16.812l-6.123,14.239l-4.114,0.007L3.862,19.161
                                        c2.503,1.602,4.635,4.144,5.386,5.914l0.406,1.469l3.808-9.729L17.581,16.812L17.581,16.812z M19.153,16.8h3.89L20.61,31.066
                                        h-3.888L19.153,16.8z" />
                                        </g>
                                    </g>
                                </svg>
                            </div>
                            <div class="checkout__contain-content-card-flip-back-ccv">
                                <label>Código de seguridad</label>
                                <div></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="checkout__contain-content-dni">
                    <div class="checkout__contain-content-dni-flip">
                        <div class="checkout__contain-content-dni-flip-front">
                            <div class="checkout__contain-content-dni-flip-front-chip"></div>
                            <div class="checkout__contain-content-dni-flip-front-holder">
                                <label>Nombre y apellido</label>
                                <div></div>
                            </div>
                            <div class="checkout__contain-content-dni-flip-front-expiration">
                                <label>Numero de documento</label>
                                <div></div>
                            </div>
                        </div>
                    </div>
                </div>
                <form class="checkout__contain-content-form">
                    <fieldset>
                        <label for="card-number">Número de tarjeta</label>
                        <input type="num" id="card-number" class="input-cart-number" maxlength="4" />
                        <input type="num" id="card-number-1" class="input-cart-number" maxlength="4" />
                        <input type="num" id="card-number-2" class="input-cart-number" maxlength="4" />
                        <input type="num" id="card-number-3" class="input-cart-number" maxlength="4" />
                    </fieldset>
                    <fieldset>
                        <label for="card-holder">Nombre y apellido del titular</label>
                        <input type="text" id="card-holder" />
                    </fieldset>
                    <fieldset class="fieldset-expiration">
                        <label for="card-expiration-month">Fecha de expiración</label>
                        <div class="select">
                            <select id="card-expiration-month">
                                <option></option>
                                <option>01</option>
                                <option>02</option>
                                <option>03</option>
                                <option>04</option>
                                <option>05</option>
                                <option>06</option>
                                <option>07</option>
                                <option>08</option>
                                <option>09</option>
                                <option>10</option>
                                <option>11</option>
                                <option>12</option>
                            </select>
                        </div>
                        <div class="select">
                            <select id="card-expiration-year">
                                <option></option>
                                <option>2021</option>
                                <option>2022</option>
                                <option>2023</option>
                                <option>2024</option>
                                <option>2026</option>
                                <option>2027</option>
                                <option>2028</option>
                                <option>2029</option>
                                <option>2030</option>
                                <option>2031</option>
                            </select>
                        </div>
                    </fieldset>
                    <fieldset class="fieldset-ccv">
                        <label for="card-ccv">CVV</label>
                        <input type="text" id="card-ccv" maxlength="3" />
                    </fieldset>
                </form>
                <form class="checkout__contain-content-form-two">
                    <div class="double-fieldset">
                        <fieldset>
                            <label>Número de documento</label>
                            <input id="dni-number" type="num" class="input-dni-number" maxlength="10" />
                        </fieldset>
                        <fieldset>
                            <label for="">Numero de telefono</label>
                            <input id="tel-number" type="text" name="" />
                        </fieldset>
                    </div>
                    <fieldset>
                        <label for="">Correo electronico</label>
                        <input id="email-text" type="text" name="" />
                    </fieldset>
                </form>
                <div class="checkout__contain-content-button">
                    <a id="nextButton" class="checkout__contain-content-button-next">Siguiente</a>

                    <div id="formError">

                        <svg class="productos__row-card-buy-quantity-container-error-icon" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-exclamation-lg" viewBox="0 0 16 16">
                            <path d="M6.002 14a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm.195-12.01a1.81 1.81 0 1 1 3.602 0l-.701 7.015a1.105 1.105 0 0 1-2.2 0l-.7-7.015z" />
                        </svg>
                        <span class="productos__row-card-buy-quantity-container-error-text">Verificar datos</span>

                    </div>

                    <a id="backButton" class="checkout__contain-content-button-back">
                        <svg
                            xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                            class="bi bi-arrow-left" viewBox="0 0 16 16">
                            <path fill-rule="evenodd"
                                d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z">
                            </path>
                        </svg>
                        Volver
                    </a>
                </div>
            </div>
            <div class="checkout__contain-details">
                <h2 class="checkout__contain-details-title">Detalle de la compra</h2>
                {
                    cartList.map(prod =>

                        <div class="checkout__contain-details-content">
                            <img class="checkout__contain-details-content-img" src={prod.img}
                                alt=""/>
                            <h3 class ="checkout__contain-details-content-title">{prod.nombre}</h3>
                            <span class ="checkout__contain-details-content-subtotal">Subtotal: ${prod.precio * prod.cantidad}</span>
                        </div >
                    )
                }
                <h3 class="checkout__contain-details-total-title">Total: ${totalPrice()}</h3>
            </div>
        </div>

    </>
}

export default Checkout