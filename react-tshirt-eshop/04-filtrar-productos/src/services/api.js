const getDataFromApi = () => {
  return fetch('https://beta.adalab.es/ejercicios-extra/api/eshop/v2/cart.json')
    .then(response => response.json())
    .then(data => {
      return data.cart.items;
    });
};

export default {
  getDataFromApi: getDataFromApi
};
