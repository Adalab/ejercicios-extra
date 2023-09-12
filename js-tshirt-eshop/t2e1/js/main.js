'use strict';

let products = [];

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
  htmlCode += `  <button class="card__btn">Añadir a la cesta</button>`;
  htmlCode += `</article>`;
  return htmlCode;
};

const paintProducts = () => {
  let productsCode = '';
  for (const product of products) {
    productsCode += getProductHtmlCode(product);
  }
  productsElement.innerHTML = productsCode;
};

// start app

getApiData();
