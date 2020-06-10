'use strict';

// data

const product1Name = 'Node JS';
const product1Price = 12;
const product1ImageUrl = './images/node-js.jpg';
let product1Quantity = 1;

const product2Name = 'JavaScript';
const product2Price = 15;
const product2ImageUrl = './images/javascript.jpg';
let product2Quantity = 1;

const product3Name = 'React JS';
const product3Price = 13;
const product3ImageUrl = './images/react.jpg';
let product3Quantity = 1;

// paint products

const productsElement = document.querySelector('.js-products');

function getProductHtmlCode(name, price, imageUrl) {
  let htmlCode = '';
  htmlCode += `<article class="card">`;
  htmlCode += `  <img src="${imageUrl}" class="card__img" alt="Producto: ${name}">`;
  htmlCode += `  <h3 class="card__title">${name}</h3>`;
  htmlCode += `  <p class="card__description">${price} €</p>`;
  htmlCode += `  <button class="card__btn">Añadir a la cesta</button>`;
  htmlCode += `</article>`;
  return htmlCode;
}

function paintProducts() {
  const product1 = getProductHtmlCode(product1Name, product1Price, product1ImageUrl);
  const product2 = getProductHtmlCode(product2Name, product2Price, product2ImageUrl);
  const product3 = getProductHtmlCode(product3Name, product3Price, product3ImageUrl);
  productsElement.innerHTML = product1 + product2 + product3;
}

paintProducts();

// paint cart items

const cartElement = document.querySelector('.js-cart');

function getCartItemHtmlCode(name, price, quantity) {
  let htmlCode = '';
  htmlCode += `<tr>`;
  htmlCode += `  <td>${name}</td>`;
  htmlCode += `  <td>${price}</td>`;
  htmlCode += `  <td>`;
  htmlCode += `    <button class="js-dec-btn card__btn">-</button>`;
  htmlCode += `    ${quantity}`;
  htmlCode += `    <button class="js-inc-btn card__btn">+</button>`;
  htmlCode += `  </td>`;
  htmlCode += `  <td class="text-align-right">${price * quantity}€</td>`;
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
  cartElement.innerHTML = '';
  const totalPrice = product1Price * product1Quantity + product2Price * product2Quantity + product3Price * product3Quantity;
  const item1 = getCartItemHtmlCode(product1Name, product1Price, product1Quantity);
  const item2 = getCartItemHtmlCode(product2Name, product2Price, product2Quantity);
  const item3 = getCartItemHtmlCode(product3Name, product3Price, product3Quantity);
  const total = getCartTotalHtmlCode(totalPrice);
  cartElement.innerHTML = item1 + item2 + item3 + total;
  listenCartBtns();
}

paintCartItems();

// listen events

function handleQuantityBtn(ev) {
  const currentTarget = ev.currentTarget;
  if (currentTarget.classList.contains('js-inc-btn')) {
    product1Quantity += 1;
  } else if (product1Quantity > 0) {
    product1Quantity -= 1;
  }
  paintCartItems();
}

function listenCartBtns() {
  const incBtn = document.querySelector('.js-inc-btn');
  incBtn.addEventListener('click', handleQuantityBtn);
  const decBtn = document.querySelector('.js-dec-btn');
  decBtn.addEventListener('click', handleQuantityBtn);
}
