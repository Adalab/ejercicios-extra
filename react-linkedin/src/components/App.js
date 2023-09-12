import React, { useEffect, useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import Filters from './Filters';
import UserList from './UserList';
import UserDetail from './UserDetail';
import getDataFromApi from '../services/getDataFromApi';

const App = () => {
  const [users, setUsers] = useState([]);
  const [nameFilter, setNameFilter] = useState('');
  const [genderFilter, setGenderFilter] = useState('all');
  const [citiesFilter, setCitiesFilter] = useState([]);
  useEffect(() => {
    getDataFromApi().then(data => setUsers(data));
  }, []);

  // event handlers

  const handleFilter = data => {
    console.log(data);
    if (data.key === 'name') {
      setNameFilter(data.value);
    } else if (data.key === 'gender') {
      setGenderFilter(data.value);
    } else if (data.key === 'location') {
      if (data.checked === true) {
        const newCitiesFilter = [...citiesFilter];
        newCitiesFilter.push(data.value);
        setCitiesFilter(newCitiesFilter);
      } else {
        const newCitiesFilter = citiesFilter.filter(city => {
          return city !== data.value;
        });
        setCitiesFilter(newCitiesFilter);
        // const newCitiesFilter = [...citiesFilter];
        // const cityIndex = newCitiesFilter.indexOf(data.value);
        // newCitiesFilter.splice(cityIndex, 1);
        // setCitiesFilter(newCitiesFilter);
      }
    }
  };

  // render

  const filteredUsers = users
    .filter(user => {
      return user.name.toUpperCase().includes(nameFilter.toUpperCase());
    })
    .filter(user => {
      if (genderFilter === 'all') {
        return true;
      } else {
        return user.gender === genderFilter;
      }
      // return genderFilter === 'all' ? true : user.gender === genderFilter;
    })
    .filter(user => {
      if (citiesFilter.length === 0) {
        return true;
      } else {
        return citiesFilter.includes(user.city);
      }
      // return citiesFilter.length === 0 ? true : citiesFilter.includes(user.city);
    });

  const renderUserDetail = props => {
    const userId = props.match.params.userId;
    const foundUser = users.find(user => {
      return user.id === userId;
    });
    if (foundUser !== undefined) {
      return <UserDetail user={foundUser} />;
    }
  };

  const getCities = () => {
    return users.map(user => user.city);
  };
  console.log(citiesFilter);
  return (
    <>
      <h1 className="title--big">Directorio de personas</h1>
      <div className="col2">
        <Filters cities={getCities()} handleFilter={handleFilter} />
        <UserList users={filteredUsers} />
        <Switch>
          <Route path="/user/:userId" render={renderUserDetail} />
        </Switch>
      </div>
    </>
  );
};

export default App;
