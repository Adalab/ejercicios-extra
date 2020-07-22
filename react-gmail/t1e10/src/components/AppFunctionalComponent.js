import React, { useEffect, useState } from 'react';
import { Route, Switch } from 'react-router-dom';
// components
import Header from './Header/Header';
import EmailTable from './Email/EmailTable';
import EmailReader from './Email/EmailReader';
import Footer from './Footer/Footer';
import Loading from './Loading';
// services
import getDataFromApi from '../services/getDataFromApi';
import ls from '../services/localStorage';
import filterEmails from '../services/filterEmails';

const App = () => {
  // get data from local storage
  let localStorageData = ls.get('emailFilters', {
    textFilter: '',
    showInbox: true
  });

  // states
  const [emails, setEmails] = useState([]);
  const [textFilter, setTextFilter] = useState(localStorageData.textFilter);
  const [showInbox, setShowInbox] = useState(localStorageData.showInbox);
  const [loading, setLoading] = useState(true);

  // get data from api
  useEffect(() => {
    getDataFromApi()
      .then(data => setEmails(data))
      .then(() => setLoading(false));
  }, []);

  // local storage: set
  useEffect(() => {
    ls.set('emailFilters', { textFilter, showInbox });
  });

  // user event handlers >>> change state

  const handleInboxFilter = () => setShowInbox(true);
  const handleDeleteFilter = () => setShowInbox(false);
  const handleTextFilter = data => setTextFilter(data.value);
  const handleReadEmail = emailId => setEmailAttribute(emailId, 'read', true);
  const handleDeleteEmail = (emailId, deleted) => setEmailAttribute(emailId, 'deleted', deleted);
  const setEmailAttribute = (emailId, attribute, value) => {
    const email = emails.find(email => email.id === emailId);
    email[attribute] = value;
    setEmails([...emails]);
  };

  // render methods >>> paint state

  const renderEmailDetail = props => {
    const selectedEmail = emails.find(email => email.id === props.match.params.emailId);
    if (selectedEmail !== undefined) {
      return (
        <EmailReader
          id={selectedEmail.id}
          fromName={selectedEmail.fromName}
          fromEmail={selectedEmail.fromEmail}
          subject={selectedEmail.subject}
          body={selectedEmail.body}
          deleted={selectedEmail.deleted}
          handleReadEmail={handleReadEmail}
          handleDeleteEmail={handleDeleteEmail}
        />
      );
    } else {
      return <p>Email no encontrado</p>;
    }
  };

  return (
    <>
      <Header
        textFilter={textFilter}
        showInbox={showInbox}
        handleInboxFilter={handleInboxFilter}
        handleDeleteFilter={handleDeleteFilter}
        handleTextFilter={handleTextFilter}
      />

      <Switch>
        <Route path="/email/:emailId" render={renderEmailDetail} />
        <Route path="/">
          <EmailTable
            emails={filterEmails(emails, textFilter, showInbox)}
            handleDeleteEmail={handleDeleteEmail}
          />
        </Route>
      </Switch>

      <Loading loading={loading} />

      <Footer />
    </>
  );
};

export default App;
