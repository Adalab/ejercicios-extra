const getDataFromApi = () => {
  return fetch('https://randomuser.me/api/?results=10')
    .then(response => response.json())
    .then(data => {
      return data.results.map(user => {
        return {
          id: user.login.uuid,
          username: user.login.username,
          city: user.location.city,
          country: user.location.country,
          name: user.name.first + ' ' + user.name.last,
          email: user.email,
          gender: user.gender,
          image: user.picture.large
        };
      });
    });
};

export default getDataFromApi;
