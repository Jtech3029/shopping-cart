export default function removeItemFromCart(cart, setCart, item, setItemAmount, itemAmount) {
    //check where the item is in the array
    const index = cart.findIndex(x => x[0] === item[0]);
    //add another to the quantity
    console.log(cart)

    if((cart[index][2] - 1) !== 0) {
      let copyCart = copyAllArray(cart);
      copyCart[index][2] -= item[2];
      setCart(copyCart);
    }
    //add the item to the state
    else{
      let copyCart = copyAllArray(cart);
      copyCart.splice(index, 1);
      setCart(copyCart);
    }
    //update count
    setItemAmount(itemAmount - item[2]);
  }
  
  function copyAllArray(array) {
    let newArray = [];
    array.forEach(element => {
      newArray.push(element.slice())
    });
    return newArray;
  }