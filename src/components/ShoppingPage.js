import NavigationBar from "./NavigationBar";
import Product from "./Product";
export default function ShoppingPage(props) {

  return(
    <div>
      <NavigationBar itemAmount={props.itemAmount}/>
      <Product productName="1" productPrice={123} addToCart={props.addToCart}></Product>
      <Product productName="5" productPrice={123} addToCart={props.addToCart}></Product>

    </div>
  )
}