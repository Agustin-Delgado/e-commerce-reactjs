import { useCartContext } from "../context/CartContext"
import { useParams } from "react-router"
import { useEffect, useState } from "react"
import { getFirestore } from "../services/getFirestore"
import firebase from "firebase"
import { useHistory } from "react-router"

function Checkout() {

    const history = useHistory()
    const [order, setOrder] = useState('')
    const { cartList, totalPriceCart, clearCart } = useCartContext()
    const { checkoutId } = useParams()
    const [checkout, setCheckout] = useState([])
    const [formData, setFormData] = useState({ name: "", phone: "", email: "", doc: "" })


    useEffect(() => {

        if (checkoutId) {

            const db = getFirestore()
            const dbQuery = db.collection('productos').where('id', '==', checkoutId)
            dbQuery.get()
                .then(resp => setCheckout(resp.docs.map(prod => prod.data())))
        }
        else {

            setCheckout(cartList)
        }

    }, [checkoutId, cartList])

    const generarOrden = (e) => {

        e.preventDefault()

        let orden = {}
        orden.date = firebase.firestore.Timestamp.fromDate(new Date())
        orden.buyer = formData
        orden.total = totalPriceCart()
        orden.items = checkout.map(prod => {
            const id = prod.id
            const nombre = prod.nombre
            const precio = prod.precio
            const cantidad = prod.cantidad
            const img = prod.img
            const oferta = prod.oferta

            return { id, nombre, precio, cantidad, img, oferta }
        })

        const dbQuery = getFirestore()
        dbQuery.collection('orders').add(orden)
            .then(resp => setOrder(resp.id))
            .finally(clearCart())


        const itemsToUpdate = dbQuery.collection('productos').where(
            firebase.firestore.FieldPath.documentId(), 'in', checkout.map(i => i.id)
        )

        const batch = dbQuery.batch()

        itemsToUpdate.get()
            .then(collection => {
                collection.docs.forEach(docSnapshot => {
                    batch.update(docSnapshot.ref, {
                        stock: docSnapshot.data().stock - checkout.find(item => item.id === docSnapshot.id).cantidad
                    })
                })

                batch.commit()
            })
    }

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        })
    }

    useEffect(() => {

        if (order) {

            return history.push(`/checkout/purchased/${order}`)
        }

    }, [order, history])

    return <>

        <h1 className="checkout-title">Checkout</h1>
        <div className="checkout__contain">
            <div className="checkout__contain-content">
                <div className="checkout__contain-content-card">
                    <div className="checkout__contain-content-card-flip">
                        <div className="checkout__contain-content-card-flip-front">
                            <div className="checkout__contain-content-card-flip-front-chip"></div>
                            <div className="checkout__contain-content-card-flip-front-logo">
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
                            <div className="checkout__contain-content-card-flip-front-number"></div>
                            <div className="checkout__contain-content-card-flip-front-holder">
                                <label>Nombre y apellido</label>
                            </div>
                            <div className="checkout__contain-content-card-flip-front-expiration">
                                <label>Fecha de expiración</label>
                            </div>
                        </div>
                        <div className="checkout__contain-content-card-flip-back">
                            <div className="checkout__contain-content-card-flip-back-strip"></div>
                            <div className="checkout__contain-content-card-flip-back-logo">
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
                            <div className="checkout__contain-content-card-flip-back-ccv">
                                <label>Código de seguridad</label>
                            </div>
                        </div>
                    </div>
                </div>

                <form onSubmit={generarOrden} onChange={handleChange} className="checkout__contain-content-form">

                    <fieldset>
                        <label htmlFor="card-holder">Nombre y apellido del titular</label>
                        <input defaultValue={formData.name} name='name' type="text" id="card-holder" required />
                    </fieldset>
                    <fieldset className="fieldset-expiration">
                    <label htmlFor="">Numero de telefono</label>
                            <input defaultValue={formData.phone} name='phone' id="tel-number" type="text" required />
                    </fieldset>
                    <fieldset className="fieldset-ccv">
                            <label>Número de documento</label>
                            <input defaultValue={formData.doc} name="doc" id="dni-number" type="num" className="input-dni-number" maxLength="10" required />
 
                    </fieldset>

                    <fieldset>
                        <label htmlFor="">Correo electronico</label>
                        <input defaultValue={formData.email} name='email' id="email-text" type="text" required />
                    </fieldset>

                    <div className="checkout__contain-content-button">

                        <button className="checkout__contain-content-button-next">Finalizar compra</button>

                    </div>

                </form>

            </div>


            <div className="checkout__contain-details">
                <h2 className="checkout__contain-details-title">Detalle de la compra</h2>

                {
                    checkout.map(prod =>

                        <div key={prod.id} className="checkout__contain-details-content">
                            <img className="checkout__contain-details-content-img" src={prod.img}
                                alt="" />
                            <h3 className="checkout__contain-details-content-title">{prod.nombre}</h3>
                            <span className="checkout__contain-details-content-quantity">Cantidad: {prod.cantidad}</span>

                            {
                                prod.oferta ?

                                    <div className="checkout__contain-details-content-off">

                                        <span className="checkout__contain-details-content-off-oldprice">${prod.precio}</span>

                                        <div>

                                            <span className="checkout__contain-details-content-price">${prod.precio - ((prod.precio * prod.oferta) / 100)}</span>
                                            <span className="checkout__contain-details-content-off-title">{prod.oferta}% OFF</span>

                                        </div>

                                    </div>

                                    :

                                    <span className="checkout__contain-details-content-subtotal">Subtotal: ${prod.precio * prod.cantidad}</span>
                            }

                        </div >
                    )
                }

                <h3 className="checkout__contain-details-total-title">Total: ${checkout.reduce((sum, value) => (sum + (value.precio - ((value.precio * value.oferta) / 100))), 0)}</h3>

            </div>

        </div>


    </>
}

export default Checkout