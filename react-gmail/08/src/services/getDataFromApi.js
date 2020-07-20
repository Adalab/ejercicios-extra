const getDataFromApi = () => {
  return fetch('//beta.adalab.es/ejercicios-extra/api/emails/v01.json')
    .then(response => response.json())
    .then(data => {
      for (const result of data.results) {
        result.fromName = result.fromName.toUpperCase();
      }
      return data.results;
    });
};

export { getDataFromApi };
