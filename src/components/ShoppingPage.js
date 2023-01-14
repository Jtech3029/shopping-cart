import NavigationBar from "./NavigationBar";
import Product from "./Product";
import { links } from "../links";
import "../styles/shopping-page.css"

export default function ShoppingPage(props) {

  return(
    <div>
      <NavigationBar itemAmount={props.itemAmount}/>
      <div id="shop-product-organizer">
      {links.map((x) => (
        <Product className="shop-product" imageSource={x[0]} productName={x[1]} productPrice={x[2]} addToCart={props.addToCart}/>
      ))}
      </div>
    </div>
  )
}