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

const productsElement = document.querySelector('.js-products');

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
  productsElement.innerHTML = productsCode;
  listenAddProductsBtns();
};

// listen products

const listenAddProductsBtns = () => {
  const productsBtns = document.querySelectorAll('.js-add-product');
  for (const productBtn of productsBtns) {
    productBtn.addEventListener('click', addProduct);
  }
};

const addProduct = ev => {
  // obtengo el id del producto clickado
  const clickedId = ev.target.dataset.id;
  // comprobamos si el producto clickado está en la cesta
  let foundItem;
  for (const item of cart) {
    if (item.id === clickedId) {
      foundItem = item;
    }
  }

  if (foundItem === undefined) {
    // si no está en la cesta
    // busco el producto clickado
    let foundProduct;
    for (const product of products) {
      if (product.id === clickedId) {
        foundProduct = product;
      }
    }
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
  paintCartItems();
};

// paint cart items

const cartElement = document.querySelector('.js-cart');

const getCartItemHtmlCode = item => {
  let htmlCode = '';
  htmlCode += `<tr>`;
  htmlCode += `  <td>${item.name}</td>`;
  htmlCode += `  <td>${item.price}</td>`;
  htmlCode += `  <td>`;
  htmlCode += `    <button class="js-dec-btn card__btn">-</button>`;
  htmlCode += `    ${item.quantity}`;
  htmlCode += `    <button class="js-inc-btn card__btn">+</button>`;
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
  cartElement.innerHTML = '';
  for (const item of cart) {
    cartElement.innerHTML += getCartItemHtmlCode(item);
  }
  cartElement.innerHTML += getCartTotalHtmlCode();
};

// start app

getApiData();
paintCartItems();
