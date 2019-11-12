'use strict';

// variables

const data = {
  values: [],
  increment: 10
};

const elements = {
  inputs: [],
  bars: []
};

// functions to store elements

const setElements = (destination, selectors) => {
  for (let idx = 0; idx < selectors.length; idx += 1) {
    destination[idx] = document.querySelector(selectors[idx]);
  }
};

// function to manage the app flow

const ensureApp = () => {
  console.log('Start ensureApp:', data.values);
  validateData();
  setInputsValues();
  setElementsWitdh();
  setElementsGoodClass();
  setBiggestElement();
  console.log('End ensureApp:', data.values);
};

// functions to modify "data" object

const setDataFromInputs = () => {
  for (let idx = 0; idx < elements.inputs.length; idx += 1) {
    data.values[idx] = elements.inputs[idx].value;
  }
  ensureApp();
};

const resetData = () => {
  for (let idx = 0; idx < elements.inputs.length; idx += 1) {
    data.values[idx] = 0;
  }
  ensureApp();
};

const randomData = () => {
  for (let idx = 0; idx < data.values.length; idx += 1) {
    data.values[idx] = Math.round(Math.random() * 100);
  }
  ensureApp();
};

const incrementData = () => {
  for (let idx = 0; idx < data.values.length; idx += 1) {
    data.values[idx] += data.increment;
  }
  ensureApp();
};

const validateData = () => {
  for (let idx = 0; idx < data.values.length; idx += 1) {
    data.values[idx] = parseInt(data.values[idx]);
    if (isNaN(data.values[idx]) || data.values[idx] < 0) {
      data.values[idx] = 0;
    } else if (data.values[idx] > 100) {
      data.values[idx] = 100;
    }
  }
};

// functions to modify the DOM

const setInputsValues = () => {
  for (let idx = 0; idx < elements.inputs.length; idx += 1) {
    elements.inputs[idx].value = data.values[idx];
  }
};

const setElementsWitdh = () => {
  const minWidth = 3;
  for (let idx = 0; idx < elements.bars.length; idx += 1) {
    const value = Math.max(data.values[idx], minWidth);
    elements.bars[idx].style.width = value + '%';
  }
};

const setElementsGoodClass = () => {
  for (let idx = 0; idx < elements.bars.length; idx += 1) {
    if (data.values[idx] > 50) {
      elements.bars[idx].classList.add('good');
    } else {
      elements.bars[idx].classList.remove('good');
    }
  }
};

const setBiggestElement = () => {
  let maxValue = 0;
  for (let idx = 0; idx < data.values.length; idx += 1) {
    maxValue = Math.max(maxValue, data.values[idx]);
  }
  for (let idx = 0; idx < elements.bars.length; idx += 1) {
    if (data.values[idx] === maxValue) {
      elements.bars[idx].classList.add('biggest');
    } else {
      elements.bars[idx].classList.remove('biggest');
    }
  }
};

// listen events
const listenInputEvents = () => {
  // inputs numbers
  for (let idx = 0; idx < elements.inputs.length; idx += 1) {
    elements.inputs[idx].addEventListener('change', setDataFromInputs);
  }
  // reset btn
  const resetBtn = document.querySelector('.js-reset');
  resetBtn.addEventListener('click', resetData);
  // random btn
  const randomBtn = document.querySelector('.js-random');
  randomBtn.addEventListener('click', randomData);
  // increment btn
  const incrementBtn = document.querySelector('.js-increment');
  incrementBtn.addEventListener('click', incrementData);
};

// start app

setElements(elements.inputs, ['.js-input-0', '.js-input-1', '.js-input-2', '.js-input-3', '.js-input-4']);
setElements(elements.bars, ['.js-bar-0', '.js-bar-1', '.js-bar-2', '.js-bar-3', '.js-bar-4']);
resetData();
listenInputEvents();