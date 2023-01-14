import "../styles/checkout-items.css"

export default function CheckoutItems(props) {
    return(
        <div className="checkout-items">
            <img src={props.imageSource} className="checkout-image" alt="a product"></img>
            <div>
                {props.productName}
            </div>
            <div>
                <div>
                    ${props.productPrice}
                </div>
                <div className="change-amount-buttons">
                    <button onClick={() => props.removeFromCart([props.productName, props.productPrice, 1])}>-</button>
                    <div>{props.quantity}</div>
                    <button onClick={() => props.addToCart([props.productName, props.productPrice, 1])}>+</button>
                </div>
            </div>
        </div>
    )
}