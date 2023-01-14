export default function CheckoutItems(props) {
    return(
        <div>
            <img src={props.imageSource} alt="a product"></img>
            <div>
                {props.productName}
            </div>
            <div>
                <div>
                    {props.productPrice}
                </div>
                <div>
                    <button onClick={() => props.removeFromCart([props.productName, props.productPrice, 1])}>-</button>
                    <div>{props.quantity}</div>
                    <button onClick={() => props.addToCart([props.productName, props.productPrice, 1])}>+</button>
                </div>
            </div>
        </div>
    )
}