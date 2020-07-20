const getDataFromApi = () => {
  return fetch('//beta.adalab.es/ejercicios-extra/api/emails/v01.json')
    .then(response => response.json())
    .then(data => {
      return data.results;
    });
};

export default getDataFromApi;
