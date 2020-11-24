const getDataFromApi = () => {
  return fetch('https://beta.adalab.es/ejercicios-extra/api/eshop/v2/cart.json')
    .then(response => response.json())
    .then(data => {
      // for (let index = 0; index < data.cart.items.length; index++) {
      //   data.cart.items[index].id = 'p' + index;
      // }
      data.cart.items.forEach((item, index) => {
        item.id = 'p' + index;
      });
      return data.cart.items;
    });
};

export default {
  getDataFromApi: getDataFromApi
};
