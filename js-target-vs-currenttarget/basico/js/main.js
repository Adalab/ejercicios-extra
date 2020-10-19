'use strict';

const handleCardClick = function (ev) {
  console.log('Elemento clickado que lanza el evento', ev.target);
  console.log('Elemento que escucha el evento', ev.currentTarget);
};

const cardElement = document.querySelector('.js-card');

cardElement.addEventListener('click', handleCardClick);
