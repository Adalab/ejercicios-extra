'use strict';

// data

const products = [
  {
    name: 'Node JS',
    price: 12,
    imageUrl: './images/node-js.jpg',
    quantity: 1,
    incQuantity: incQuantity,
    decQuantity: decQuantity
  },
  {
    name: 'JavaScript',
    price: 15,
    imageUrl: './images/javascript.jpg',
    quantity: 1,
    incQuantity: incQuantity,
    decQuantity: decQuantity
  },
  {
    name: 'React JS',
    price: 13,
    imageUrl: './images/react.jpg',
    quantity: 1,
    incQuantity: incQuantity,
    decQuantity: decQuantity
  }
];

// product objects methods

function incQuantity() {
  this.quantity += 1;
}

function decQuantity() {
  if (this.quantity > 0) {
    this.quantity -= 1;
  }
}

// paint products

const productsElement = document.querySelector('.js-products');

function getProductHtmlCode(product) {
  let htmlCode = '';
  htmlCode += `<article class="card">`;
  htmlCode += `  <img src="${product.imageUrl}" class="card__img" alt="Producto: ${product.name}">`;
  htmlCode += `  <h3 class="card__title">${product.name}</h3>`;
  htmlCode += `  <p class="card__description">${product.price} €</p>`;
  htmlCode += `  <button class="card__btn">Añadir a la cesta</button>`;
  htmlCode += `</article>`;
  return htmlCode;
}

function paintProducts() {
  let productsCode = '';
  for (const product of products) {
    productsCode += getProductHtmlCode(product);
  }
  productsElement.innerHTML = productsCode;
  // const _product1 = getProductHtmlCode(product1);
  // const _product2 = getProductHtmlCode(product2);
  // const _product3 = getProductHtmlCode(product3);
  // productsElement.innerHTML = _product1 + _product2 + _product3;
}

paintProducts();

// paint cart items

const cartElement = document.querySelector('.js-cart');

function getCartItemHtmlCode(product) {
  let htmlCode = '';
  htmlCode += `<tr>`;
  htmlCode += `  <td>${product.name}</td>`;
  htmlCode += `  <td>${product.price}</td>`;
  htmlCode += `  <td>`;
  htmlCode += `    <button class="js-dec-btn card__btn">-</button>`;
  htmlCode += `    ${product.quantity}`;
  htmlCode += `    <button class="js-inc-btn card__btn">+</button>`;
  htmlCode += `  </td>`;
  htmlCode += `  <td class="text-align-right">${product.price * product.quantity}€</td>`;
  htmlCode += `</tr>`;
  return htmlCode;
}

function getCartTotalHtmlCode(totalPrice) {
  let htmlCode = '';
  htmlCode += `<tr class="text--bold">`;
  htmlCode += `  <td>Total</td>`;
  htmlCode += `  <td colspan="3" class="text-align-right">${totalPrice}€</td>`;
  htmlCode += `</tr>`;
  return htmlCode;
}

function paintCartItems() {
  // cartElement.innerHTML = '';
  // for (let i = 0; i < products.length; i += 1) {
  //   cartElement.innerHTML += getCartItemHtmlCode(products[i]);
  // }

  cartElement.innerHTML = '';
  for (let i = products.length - 1; i >= 0; i -= 1) {
    cartElement.innerHTML += getCartItemHtmlCode(products[i]);
  }

  // cartElement.innerHTML = '';
  // for (const product of products) {
  //   cartElement.innerHTML += getCartItemHtmlCode(product);
  // }

  // const totalPrice = product1.price * product1.quantity + product2.price * product2.quantity + product3.price * product3.quantity;
  // const total = getCartTotalHtmlCode(totalPrice);
  // cartElement.innerHTML = item1 + item2 + item3 + total;
  listenCartBtns();
}

paintCartItems();

// listen events

function handleQuantityBtn(ev) {
  const currentTarget = ev.currentTarget;
  if (currentTarget.classList.contains('js-inc-btn')) {
    product1.incQuantity();
  } else if (currentTarget.classList.contains('js-dec-btn')) {
    product1.decQuantity();
  }
  paintCartItems();
}

function listenCartBtns() {
  // usar querySelectorAll
  const incBtn = document.querySelector('.js-inc-btn');
  incBtn.addEventListener('click', handleQuantityBtn);
  const decBtn = document.querySelector('.js-dec-btn');
  decBtn.addEventListener('click', handleQuantityBtn);
}

// address

const userAddress = {};

const address = document.querySelector('.js-address');
const city = document.querySelector('.js-city');
const zip = document.querySelector('.js-zip');

function handleAddress(ev) {
  const name = ev.currentTarget.name;
  userAddress[name] = ev.currentTarget.value;
  paintAddress();
}

function paintAddress() {
  document.querySelector('.js-address-info').innerHTML = `${userAddress.address || ''} ${userAddress.city || ''} ${userAddress.zip || ''}`;
}

address.addEventListener('keyup', handleAddress);
city.addEventListener('keyup', handleAddress);
zip.addEventListener('keyup', handleAddress);
