// IMPORTANTE: este componente no se está usando, es para poder compararlo con App.js, que es el equivalente en modo funcional
import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Header from './Header';
import EmailItem from './EmailItem';
import EmailReader from './EmailReader';
import Footer from './Footer';
import getDataFromApi from '../services/getDataFromApi';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      emails: [],
      textFilter: '',
      showInbox: true
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
        emails: data
      });
    });
    // get data from local storage
    let localStorageData = JSON.parse(localStorage.getItem('emailFilters'));
    if (localStorageData !== null) {
      this.setState({
        textFilter: localStorageData.textFilter,
        showInbox: localStorageData.showInbox
      });
    }
  }

  componentDidUpdate() {
    const localStorageData = {
      textFilter: this.state.textFilter,
      showInbox: this.state.showInbox
    };
    localStorage.setItem('emailFilters', JSON.stringify(localStorageData));
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
    this.setEmailAttribute(emailId, 'read');
  }

  handleDeleteEmail(emailId) {
    this.setEmailAttribute(emailId, 'deleted');
  }

  setEmailAttribute(emailId, attribute) {
    this.setState(prevState => {
      const email = prevState.emails.find(email => email.id === emailId);
      email[attribute] = true;
      return { emails: prevState.emails };
    });
  }

  // render methods >>> paint state

  renderFilters() {
    const emailType = this.state.showInbox ? 'recibidos' : 'borrados';
    const text =
      this.state.textFilter === '' ? (
        'y sin filtrar.'
      ) : (
        <span>
          y filtrando por <span className="text--bold">{this.state.textFilter}</span>.
        </span>
      );
    return (
      <p className="mb-1">
        La usuaria está visualizando los emails <span className="text--bold">{emailType}</span>{' '}
        {text}
      </p>
    );
  }

  renderEmails() {
    const lowerCaseTextFilter = this.state.textFilter.toLowerCase();
    return (
      this.state.emails
        // filter by inbox vs deleted
        .filter(email => {
          // return this.state.showInbox !== email.deleted;
          return this.state.showInbox === true ? !email.deleted : email.deleted;
        })
        // filter by inboxFilter text
        .filter(email => {
          return (
            email.fromName.toLowerCase().includes(lowerCaseTextFilter) ||
            email.subject.toLowerCase().includes(lowerCaseTextFilter) ||
            email.body.toLowerCase().includes(lowerCaseTextFilter)
          );
        })
        .map(email => {
          return (
            <EmailItem
              key={email.id}
              id={email.id}
              from={email.fromName}
              subject={email.subject}
              time={email.date}
              read={email.read}
              deleted={email.deleted}
              handleDeleteEmail={this.handleDeleteEmail}
            />
          );
        })
    );
  }

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
      <div>
        <Header
          textFilter={this.state.textFilter}
          handleInboxFilter={this.handleInboxFilter}
          handleDeleteFilter={this.handleDeleteFilter}
          handleTextFilter={this.handleTextFilter}
        />
        {this.renderFilters()}

        <Switch>
          <Route path="/email/:emailId" render={this.renderEmailDetail} />
          <Route path="/">
            <table className="table">
              <tbody>{this.renderEmails()}</tbody>
            </table>
          </Route>
        </Switch>

        <Footer />
      </div>
    );
  }
}

export default App;
