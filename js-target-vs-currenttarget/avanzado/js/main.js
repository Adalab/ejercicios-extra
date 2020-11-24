'use strict';

// data

const cards = [
  {
    title: 'Título 0',
    description: 'Descripción 0',
    active: false,
    img: {
      src: '//beta.adalab.es/resources/images/adalab-logo-128x128.png'
    }
  },
  {
    title: 'Título 1',
    description: 'Descripción 1',
    active: false,
    img: {
      src: '//beta.adalab.es/resources/images/adalab-logo-128x128.png'
    }
  }
];

// paint cards

const paintCards = function () {
  let codeHtml = '';
  for (let i = 0; i < cards.length; i += 1) {
    if (cards[i].active === true) {
      codeHtml += `<li id="${i}" class="js-card card active">`;
    } else {
      codeHtml += `<li id="${i}" class="js-card card">`;
    }
    codeHtml += `  <img class="card__img" alt="${cards[i].title}" src="${cards[i].img.src}" />`;
    codeHtml += `  <h3 class="card__title">${cards[i].title}</h3>`;
    codeHtml += `  <p class="card__description">${cards[i].description}</p>`;
    codeHtml += `  <button class="card__btn">Botón</button>`;
    codeHtml += `</li>`;
  }
  const cardsContanierElement = document.querySelector('.js-cards');
  cardsContanierElement.innerHTML = codeHtml;
};

// listen events

const handleCardClick = function (ev) {
  const clickedCardId = ev.currentTarget.id;
  console.log('Id del elemento clickado', clickedCardId);
  console.log('Elemento clickado que lanza el evento', ev.target);
  console.log('Elemento que escucha el evento', ev.currentTarget);
  // show clicked card in result paragraph
  const resultElement = document.querySelector('.js-result');
  resultElement.innerHTML = clickedCardId;
  // update clicked card data in array
  cards[clickedCardId].active = true;
  cards[clickedCardId].title = 'Seleccionado';
  // paint cards and listen events again
  paintCards();
  listenEvents();
};

const listenEvents = function () {
  // get all cards elements
  const cardsElements = document.querySelectorAll('.js-card');
  // listen click event on each card
  for (const cardElement of cardsElements) {
    cardElement.addEventListener('click', handleCardClick);
  }
};

// start app

paintCards();
listenEvents();
