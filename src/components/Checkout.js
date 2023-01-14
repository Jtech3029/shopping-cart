import { useNavigate } from "react-router-dom";
import { imageLink } from "../links";
import CheckoutItems from "./CheckoutItems";
import NavigationBar from "./NavigationBar";

export default function Checkout(props) {
    const navigate = useNavigate();

    function getSum() {
        let sum = 0;
        props.cart.forEach(element => {
            sum += (element[1] * element[2]);
        });
        return sum;
    }

    return(<div>
        <NavigationBar itemAmount={props.itemAmount}/>
        {props.cart.length > 0 && props.cart.map(element => (
        <CheckoutItems 
        productName={element[0]}
        productPrice={element[1]}
        imageSource={imageLink[element[0]]}
        key={element[0]}
        quantity={element[2]}
        addToCart={props.addToCart}
        removeFromCart={props.removeFromCart}
        />            
        ))
        }
        {props.cart.length > 0 && <div id="purchase">
            <div>Total: ${getSum()}</div>
            <button id="purchase-button" onClick={() => navigate("/")}>Complete Order</button>
            </div>}
        {props.cart.length <= 0 && <div id="empty-cart-text">Your cart is empty</div>}
    </div>)
} 