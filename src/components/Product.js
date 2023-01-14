export default function Product(props) {
    return (
        <div>
            <img src={props.imageSource} alt="A product"></img>
            <div>{props.productName}</div>
            <div>{props.productPrice}</div>
            <button onClick=
                {() => props.addToCart([
                props.productName, 
                props.productPrice, 
                1])}
            >Add to cart</button>
        </div>
    )
}