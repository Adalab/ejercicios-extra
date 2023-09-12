'use strict';

let products = [];
let cart = [];

// get data from api

const getApiData = () => {
  fetch('./api/data.json')
    .then(response => response.json())
    .then(data => {
      products = data.cart.items;
      paintProducts();
    });
};

// paint products

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

const paintProducts = () => {
  let productsCode = '';
  for (const product of products) {
    productsCode += getProductHtmlCode(product);
  }
  const productsElement = document.querySelector('.js-products');
  productsElement.innerHTML = productsCode;
  listenAddProductsBtns();
};

// listen products

const listenAddProductsBtns = () => {
  const productsBtns = document.querySelectorAll('.js-add-product');
  for (const productBtn of productsBtns) {
    productBtn.addEventListener('click', incProductQuantity);
  }
};

const incProductQuantity = ev => {
  // obtengo el id del producto clickado
  const clickedId = ev.target.dataset.id;
  // comprobamos si el producto clickado está en la cesta
  let foundItem = findInArray(clickedId, cart);
  if (foundItem === undefined) {
    // si no está en la cesta
    // busco el producto clickado
    let foundProduct = findInArray(clickedId, products);
    // añado el producto a la cesta
    cart.push({
      id: foundProduct.id,
      name: foundProduct.name,
      price: foundProduct.price,
      quantity: 1
    });
  } else {
    // si si está lo incremento
    foundItem.quantity += 1;
  }
  // después de modificar el cart guardo en el local store y repinto
  setInLocalStorage();
  paintCartItems();
};

const decProductQuantity = ev => {
  // obtengo el id del producto clickado
  const clickedId = ev.target.dataset.id;
  // busco el producto clickado
  let foundItem = findInArray(clickedId, cart);
  // compruebo si tengo más de una unidad en el producto
  if (foundItem.quantity > 1) {
    foundItem.quantity -= 1;
  } else {
    // buscar la posición del elemento clickado en cart
    let foundIndex = findIndexInArray(clickedId, cart);
    // borrar el elemento que está en esa posición
    cart.splice(foundIndex, 1);
  }
  // después de modificar el cart guardo en el local store y repinto
  setInLocalStorage();
  paintCartItems();
};

// helpers

const findInArray = (id, arr) => {
  for (const item of arr) {
    if (item.id === id) {
      return item;
    }
  }
  return undefined;
};

const findIndexInArray = (id, arr) => {
  for (let index = 0; index < arr.length; index += 1) {
    if (arr[index].id === id) {
      return index;
    }
  }
  return undefined; // -1
};

// paint cart items

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
  let htmlCode = '';
  htmlCode += `<tr class="text--bold">`;
  htmlCode += `  <td>Total</td>`;
  htmlCode += `  <td colspan="3" class="text-align-right">${getTotalPrice()}€</td>`;
  htmlCode += `</tr>`;
  return htmlCode;
};

const getTotalPrice = () => {
  let total = 0;
  for (const item of cart) {
    total += item.price * item.quantity;
  }
  return total;
};

const paintCartItems = () => {
  const cartElement = document.querySelector('.js-cart');
  cartElement.innerHTML = '';
  for (const item of cart) {
    cartElement.innerHTML += getCartItemHtmlCode(item);
  }
  cartElement.innerHTML += getCartTotalHtmlCode();
  listenCartBtns();
};

// listen cart buttons

const listenCartBtns = () => {
  // escucho los botones más
  const cartIncBtns = document.querySelectorAll('.js-inc-btn');
  for (const caritIncBtn of cartIncBtns) {
    caritIncBtn.addEventListener('click', incProductQuantity);
  }
  // escucho los botones menos
  const cartDecBtns = document.querySelectorAll('.js-dec-btn');
  for (const cartDecBtn of cartDecBtns) {
    cartDecBtn.addEventListener('click', decProductQuantity);
  }
};

// local stogare

const getFromLocalStorage = () => {
  const localStorageCart = localStorage.getItem('cart');
  if (localStorageCart !== null) {
    cart = JSON.parse(localStorageCart);
    paintCartItems();
  }
};

const setInLocalStorage = () => {
  const stringifyCart = JSON.stringify(cart);
  localStorage.setItem('cart', stringifyCart);
};

// start app

getFromLocalStorage();
getApiData();
paintCartItems();
