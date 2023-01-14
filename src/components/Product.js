import "../styles/product-style.css"

export default function Product(props) {
    return (
        <div className="product">
            <img src={props.imageSource} alt="A product" className="product-image"></img>
            <div className="product-name">{props.productName}</div>
            <div>${props.productPrice}</div>
            <button className="product-buttons" onClick=
                {() => props.addToCart([
                props.productName, 
                props.productPrice, 
                1])}
            >Add to cart</button>
        </div>
    )
}