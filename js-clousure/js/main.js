const one = 1;

const addEvent = (inputSelector, resultSelector, prefix = '') => {
  const inputHandle = (ev) => {
    const resultElement = document.querySelector(resultSelector);
    resultElement.innerHTML = prefix + ev.target.value;
  }
  const inputElement = document.querySelector(inputSelector);
  inputElement.addEventListener('keyup', inputHandle);
}

addEvent('.js-name', '.js-result-name', '');
addEvent('.js-github', '.js-result-github', 'https://github.com/');
