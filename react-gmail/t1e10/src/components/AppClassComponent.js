// IMPORTANTE: este componente no se está usando, es para poder compararlo con App.js, que es el equivalente en modo funcional
import React from 'react';
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

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      emails: [],
      textFilter: '',
      showInbox: true,
      loading: true
    };
    this.handleInboxFilter = this.handleInboxFilter.bind(this);
    this.handleDeleteFilter = this.handleDeleteFilter.bind(this);
    this.handleTextFilter = this.handleTextFilter.bind(this);
    this.handleReadEmail = this.handleReadEmail.bind(this);
    this.handleDeleteEmail = this.handleDeleteEmail.bind(this);
    this.renderEmailDetail = this.renderEmailDetail.bind(this);
  }

  componentDidMount() {
    // get data from api
    getDataFromApi().then(data => {
      this.setState({
        emails: data,
        loading: false
      });
    });
    // get data from local storage
    let localStorageData = ls.get('emailFilters', {
      textFilter: this.state.textFilter,
      showInbox: this.state.showInbox
    });
    this.setState(localStorageData);
  }

  componentDidUpdate() {
    ls.set('emailFilters', {
      textFilter: this.state.textFilter,
      showInbox: this.state.showInbox
    });
  }

  // user event handlers >>> change state

  handleInboxFilter() {
    this.setState({ showInbox: true });
  }

  handleDeleteFilter() {
    this.setState({ showInbox: false });
  }

  handleTextFilter(data) {
    this.setState({ textFilter: data.value });
  }

  handleReadEmail(emailId) {
    this.setEmailAttribute(emailId, 'read', true);
  }

  handleDeleteEmail(emailId, deleted) {
    this.setEmailAttribute(emailId, 'deleted', deleted);
  }

  setEmailAttribute(emailId, attribute, value) {
    this.setState(prevState => {
      const email = prevState.emails.find(email => email.id === emailId);
      email[attribute] = value;
      return { emails: prevState.emails };
    });
  }

  // render methods >>> paint state

  renderEmailDetail(props) {
    const selectedEmail = this.state.emails.find(email => email.id === props.match.params.emailId);
    if (selectedEmail !== undefined) {
      return (
        <EmailReader
          id={selectedEmail.id}
          fromName={selectedEmail.fromName}
          fromEmail={selectedEmail.fromEmail}
          subject={selectedEmail.subject}
          body={selectedEmail.body}
          deleted={selectedEmail.deleted}
          handleReadEmail={this.handleReadEmail}
          handleDeleteEmail={this.handleDeleteEmail}
        />
      );
    } else {
      return <p>Email no encontrado</p>;
    }
  }

  render() {
    return (
      <>
        <Header
          textFilter={this.state.textFilter}
          showInbox={this.state.showInbox}
          handleInboxFilter={this.handleInboxFilter}
          handleDeleteFilter={this.handleDeleteFilter}
          handleTextFilter={this.handleTextFilter}
        />

        <Switch>
          <Route path="/email/:emailId" render={this.renderEmailDetail} />
          <Route path="/">
            <EmailTable
              emails={filterEmails(this.state.emails, this.state.textFilter, this.state.showInbox)}
              handleDeleteEmail={this.handleDeleteEmail}
            />
          </Route>
        </Switch>

        <Loading loading={this.state.loading} />

        <Footer />
      </>
    );
  }
}

export default App;
