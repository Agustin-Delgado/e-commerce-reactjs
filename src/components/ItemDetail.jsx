function ItemDetail() {

    return <>
        <div className="product__detail">

            <div className="product__detail-b1">

                <img className="product__detail-b1-img" src="../src/img/productos/p1.webp" alt=""/>

            </div>

            <div className="product__detail-b2">

                <h1 className="product__detail-b2-title">title</h1>
                <span className="product__detail-b2-price">precio</span>
                <p className="product__detail-b2-description">descripcion</p>
                <span className="product__detail-b2-stock">stock disponible</span>

                <div className="product__detail-b2-options">

                    <a className="product__detail-b2-options-buy" href="">comprar</a>
                    <a className="product__detail-b2-options-cart" href="">agregar al carrito</a>
                    <a className="product__detail-b2-options-fav" href="">agregar a fav</a>

                </div>

            </div>

        </div>
    </>
}