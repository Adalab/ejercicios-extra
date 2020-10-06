const ENDPOINT = 'https://randomuser.me/api/?results=50';

const getPersons = () => fetch(ENDPOINT).then(response => response.json());

export { getPersons };
