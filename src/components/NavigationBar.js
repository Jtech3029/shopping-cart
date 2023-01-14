import { useNavigate } from "react-router-dom"
import "../styles/navBar.css"

export default function NavigationBar(props) {
    const navigate = useNavigate();

    return(
        <div id="nav-bar">
            <button className="nav-bar-button" onClick={() => navigate("/")}>
                Home
            </button>
            <button className="nav-bar-button" onClick={() => navigate("/shopping-page")}>
                Shop
            </button>
            <button className="nav-bar-button" id="checkout" onClick={() => navigate("/checkout")}>
                Checkout
                {props.itemAmount > 0 && <div id="checkout-number">{props.itemAmount}</div>}
            </button>


        </div>
    )
}