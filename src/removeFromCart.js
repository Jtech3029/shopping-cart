export default function removeItemFromCart(cart, setCart, item, setItemAmount, itemAmount) {
    //check where the item is in the array
    const index = cart.findIndex(x => x[0] === item[0]);

    //if quantity isn't zero then just subtract the quantity
    if((cart[index][2] - 1) !== 0) {
      let copyCart = copyAllArray(cart);
      copyCart[index][2] -= item[2];
      setCart(copyCart);
    }
    //otherwise remove the item from the array
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