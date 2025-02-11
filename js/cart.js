/* global Cart */
'use strict';

// Create an event listener so that when the delete link is clicked, the removeItemFromCart method is invoked.
const table = document.getElementById('cart');
table.addEventListener('click', removeItemFromCart);
let cart;
let parentEl;

function loadCart() {
  const cartItems = JSON.parse(localStorage.getItem('cart')) || [];
  cart = new Cart(cartItems);
}

// Make magic happen --- re-pull the Cart, clear out the screen and re-draw it
function renderCart() {
  loadCart();
  clearCart();
  showCart();
}

// TODO: Remove all of the rows (tr) in the cart table (tbody)
function clearCart() {
  parentEl.innerHTML = '';
}

// TODO: Fill in the <tr>'s under the <tbody> for each item in the cart
function showCart(event) {

  // TODO: Find the table body
  let parentEl = document.querySelector('tbody');
  // TODO: Iterate over the items in the cart
    for (let i = 0; i < cart.items.length; i++) {
      itemInfo = cart.items[i];
      // TODO: Create a TR
    let rowEl = document.createElement('tr');

    // TODO: Create a TD for the delete link, quantity,  and the item
    let dataEl1 = document.createElement('td');
    let dataEl2 = document.createElement('td');
    let dataEl3 = document.createElement('td');

    dataEl1.innerText = 'X';
    dataEl1.id = itemInfo.product.name;
    dataEl2.innerText = itemInfo.quantity;
    dataEl3.innerText = itemInfo.product.name;
    
    rowEl.appendchild(dataEl1)
    rowEl.appendchild(dataEl3)
    rowEl.appendchild(dataEl2)

    // TODO: Add the TR to the TBODY and each of the TD's to the TR
    parentEl.appendchild(rowEl);
    }
}

function removeItemFromCart(event) {

  let productName = event.target.id;
  // TODO: When a delete link is clicked, use cart.removeItem to remove the correct item
  if (productName) {
    cart.removeItem(productName);
  }
  
  // TODO: Save the cart back to local storage
  cart.saveToLocalStorage();
  // TODO: Re-draw the cart table
  renderCart();

}

// This will initialize the page and draw the cart on screen
renderCart();
