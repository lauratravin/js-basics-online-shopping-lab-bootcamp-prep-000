var cart = [];

var itemName;

function getCart(itemName) {

   return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(itemName) {

      var  itemPrice = Math.floor((Math.random() * 10) + 1);

      var newItem = {};
//      Object.assign(newItem,{[itemName]:itemPrice});
      cart.push({[itemName]:itemPrice});
//      cart.push(newItem);
      console.log(`${itemName} has been added to your cart.`);

      return cart;
}

function viewCart() {
      var text = 'In your cart, you have ';
      var i =0;
      var keys = Object.keys(cart);
      if (cart.length == 0){
               console.log('Your shopping cart is empty.');

      } else if(cart.length == 1) {
            textFinal = text + Object.keys(cart[i]) +' at $'+ cart[i][Object.keys(cart[0])] +'.';
            console.log(textFinal);
      }


      // {
      //         for(var i=0; i<cart.length; i++){
      //            textFinal = text + cart[i].itemName +' at $'+ cart[i].itemPrice +', ';
      //         }
      //         text = text.slice(0,-2)+'.';
      //         console.log(textFinal);
      // }
}

function total() {
  // write your code here
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}
