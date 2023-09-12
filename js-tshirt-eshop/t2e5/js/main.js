'use strict';

// global data

let products = [];
let cart = [];

// get data from api

const startApp = () => {
  getApiData().then(() => {
    paintProducts();
    listenAddProductsBtns();
  });
  getFromLocalStorage();
  paintCartItems();
  listenCartBtns();
};

const incProductQuantity = ev => {
  const id = getClickedProductId(ev);
  if (isProductInCart(id)) {
    incCartQuantity(id);
  } else {
    addProductoToCart(id);
  }
  ensureCart();
  setInLocalStorage();
  paintCartItems();
  listenCartBtns();
};

const decProductQuantity = ev => {
  const id = getClickedProductId(ev);
  decCartQuantity(id);
  ensureCart();
  setInLocalStorage();
  paintCartItems();
  listenCartBtns();
};

// cart helpers

const getClickedProductId = ev => ev.target.dataset.id;

const ensureCart = () => {
  cart = cart.filter(item => item.quantity > 0);
};

const addProductoToCart = id => {
  const product = products.find(item => item.id === id);
  cart.push({
    id: product.id,
    name: product.name,
    price: product.price,
    quantity: 1
  });
};

const incCartQuantity = id => {
  const item = cart.find(item => item.id === id);
  item.quantity += 1;
};

const decCartQuantity = id => {
  const item = cart.find(item => item.id === id);
  item.quantity -= 1;
};

const isProductInCart = id => {
  return !!cart.find(item => item.id === id);
};

// listen buttons

const listenAddProductsBtns = () => {
  listenEvents('.js-add-product', incProductQuantity);
};

const listenCartBtns = () => {
  listenEvents('.js-inc-btn', incProductQuantity);
  listenEvents('.js-dec-btn', decProductQuantity);
};

// paint products

const paintProducts = () => {
  let productsCode = '';
  for (const product of products) {
    productsCode += getProductHtmlCode(product);
  }
  const productsElement = document.querySelector('.js-products');
  productsElement.innerHTML = productsCode;
};

const getProductHtmlCode = product => {
  let htmlCode = '';
  htmlCode += `<article class="card">`;
  htmlCode += `  <img src="${product.imageUrl}" class="card__img" alt="Producto: ${product.name}">`;
  htmlCode += `  <h3 class="card__title">${product.name}</h3>`;
  htmlCode += `  <p class="card__description">${product.price} €</p>`;
  htmlCode += `  <button class="js-add-product card__btn" data-id="${product.id}">Añadir a la cesta</button>`;
  htmlCode += `</article>`;
  return htmlCode;
};

// paint cart items

const paintCartItems = () => {
  const cartElement = document.querySelector('.js-cart');
  cartElement.innerHTML = '';
  for (const item of cart) {
    cartElement.innerHTML += getCartItemHtmlCode(item);
  }
  cartElement.innerHTML += getCartTotalHtmlCode();
};

const getCartItemHtmlCode = item => {
  let htmlCode = '';
  htmlCode += `<tr>`;
  htmlCode += `  <td>${item.name}</td>`;
  htmlCode += `  <td>${item.price}</td>`;
  htmlCode += `  <td>`;
  htmlCode += `    <button class="js-dec-btn card__btn" data-id="${item.id}">-</button>`;
  htmlCode += `    ${item.quantity}`;
  htmlCode += `    <button class="js-inc-btn card__btn" data-id="${item.id}">+</button>`;
  htmlCode += `  </td>`;
  htmlCode += `  <td class="text-align-right">${item.price * item.quantity}€</td>`;
  htmlCode += `</tr>`;
  return htmlCode;
};

const getCartTotalHtmlCode = () => {
  const total = cart.reduce((total, item) => total + item.price * item.quantity, 0);
  let htmlCode = '';
  htmlCode += `<tr class="text--bold">`;
  htmlCode += `  <td>Total</td>`;
  htmlCode += `  <td colspan="3" class="text-align-right">${total}€</td>`;
  htmlCode += `</tr>`;
  return htmlCode;
};

// api

const getApiData = () => {
  return fetch('./api/data.json')
    .then(response => response.json())
    .then(data => (products = data.cart.items));
};

// local storage

const getFromLocalStorage = () => {
  const localStorageCart = localStorage.getItem('cart');
  if (localStorageCart !== null) {
    cart = JSON.parse(localStorageCart);
  }
};

const setInLocalStorage = () => {
  const stringifyCart = JSON.stringify(cart);
  localStorage.setItem('cart', stringifyCart);
};

// events

const listenEvents = (selector, handler, eventType = 'click') => {
  const elements = document.querySelectorAll(selector);
  for (const element of elements) {
    element.addEventListener(eventType, handler);
  }
};

// start app

startApp();
