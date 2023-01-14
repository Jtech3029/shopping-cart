import NavigationBar from "./NavigationBar";
import Product from "./Product";
import { links } from "../links";
export default function ShoppingPage(props) {

  return(
    <div>
      <NavigationBar itemAmount={props.itemAmount}/>
      {links.map((x) => (
        <Product imageSource={x[0]} productName={x[1]} productPrice={x[2]} addToCart={props.addToCart}/>
      ))}

    </div>
  )
}