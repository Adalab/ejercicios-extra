'use strict';

// fetch

let products = [];

function getApiCart() {
  console.log('Pido los datos: fase 1');
  fetch('./api/data.json')
    .then(function(response) {
      console.log('Ya tengo los datos');
      return response.json();
    })
    .then(function(data) {
      console.log(data.cart.items);
      products = data.cart.items;
      paintProducts();
      paintCartItems();
    });
  console.log('Pido los datos: fase 2');
}

getApiCart();

// data

// const products = [
//   {
//     name: 'Node JS',
//     price: 12,
//     imageUrl: './images/node-js.jpg',
//     quantity: 1
//   },
//   {
//     name: 'JavaScript',
//     price: 15,
//     imageUrl: './images/javascript.jpg',
//     quantity: 1
//   },
//   {
//     name: 'React JS',
//     price: 13,
//     imageUrl: './images/react.jpg',
//     quantity: 1
//   }
// ];

// product functions

function incQuantity(product) {
  product.quantity += 1;
}

function decQuantity(product) {
  if (product.quantity > 0) {
    product.quantity -= 1;
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
}

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

function getCartTotalHtmlCode() {
  let htmlCode = '';
  htmlCode += `<tr class="text--bold">`;
  htmlCode += `  <td>Total</td>`;
  htmlCode += `  <td colspan="3" class="text-align-right">${getTotalPrice()}€</td>`;
  htmlCode += `</tr>`;
  return htmlCode;
}

function paintCartItems() {
  cartElement.innerHTML = '';
  for (let i = 0; i < products.length; i += 1) {
    cartElement.innerHTML += getCartItemHtmlCode(products[i]);
  }
  cartElement.innerHTML += getCartTotalHtmlCode();
  listenCartBtns();
}

function getTotalPrice() {
  let total = 0;
  for (const product of products) {
    total += product.price * product.quantity;
  }
  return total;
}

// listen events

function handleQuantityBtn(ev) {
  const currentTarget = ev.currentTarget;
  if (currentTarget.classList.contains('js-inc-btn')) {
    incQuantity(products[0]);
  } else if (currentTarget.classList.contains('js-dec-btn')) {
    decQuantity(products[0]);
  }
  paintCartItems();
}

function listenCartBtns() {
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
  const addressInfo = document.querySelector('.js-address-info');
  addressInfo.innerHTML = `${userAddress.address || ''} ${userAddress.city || ''} ${userAddress.zip || ''}`;
}

address.addEventListener('keyup', handleAddress);
city.addEventListener('keyup', handleAddress);
zip.addEventListener('keyup', handleAddress);
