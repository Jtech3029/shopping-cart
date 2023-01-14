export default function addItemToCart(cart, setCart, item, setItemAmount, itemAmount) {
    //check if item is in the array
    const check = cart.findIndex(x => x[0] === item[0]);
    //add another to the quantity
    if(check !== -1) {
      let copyCart = copyAllArray(cart);
      copyCart[check][2] += item[2];
      setCart(copyCart);
    }
    //add the item to the state
    else{
      let copyCart = copyAllArray(cart);
      copyCart.push(item);
      setCart(copyCart);
    }
    //update count
    setItemAmount(itemAmount + item[2]);
  }
  
  function copyAllArray(array) {
    let newArray = [];
    array.forEach(element => {
      newArray.push(element.slice())
    });
    return newArray;
  }