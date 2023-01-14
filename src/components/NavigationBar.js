import { useNavigate } from "react-router-dom"

export default function NavigationBar(props) {
    const navigate = useNavigate();

    return(
        <div>
            <button onClick={() => navigate("/")}>
                Home
            </button>
            <button onClick={() => navigate("/shopping-page")}>
                Shop
            </button>
            <button onClick={() => navigate("/checkout")}>
                Checkout
            </button>

            {props.itemAmount > 0 && <div>{props.itemAmount}</div>}

        </div>
    )
}