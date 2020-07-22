// IMPORTANTE: este componente no se está usando, es para poder compararlo con App.js, que es el equivalente en modo funcional
import React from 'react';
import Header from './Header';
import EmailItem from './EmailItem';
import EmailReader from './EmailReader';
import apiEmails from '../data/emails.json';
import '../stylesheets/App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      emails: apiEmails,
      inboxFilter: '',
      showInbox: true,
      showEmailId: ''
    };
    this.handleInboxFilter = this.handleInboxFilter.bind(this);
    this.handleDeleteFilter = this.handleDeleteFilter.bind(this);
    this.handleTextFilter = this.handleTextFilter.bind(this);
    this.handleCloseEmail = this.handleCloseEmail.bind(this);
    this.handleSelectEmail = this.handleSelectEmail.bind(this);
    this.handleDeleteEmail = this.handleDeleteEmail.bind(this);
  }

  // user event handlers >>> change state

  handleInboxFilter() {
    this.setState({
      showInbox: true
    });
  }

  handleDeleteFilter() {
    this.setState({
      showInbox: false
    });
  }

  handleTextFilter(data) {
    this.setState({
      inboxFilter: data.value
    });
  }

  handleSelectEmail(emailId) {
    this.setState((prevState) => {
      const email = prevState.emails.find((email) => email.id === emailId);
      email.read = true;
      return {
        emails: prevState.emails,
        showEmailId: emailId
      };
    });
  }

  handleDeleteEmail(emailId) {
    this.setState((prevState) => {
      const email = prevState.emails.find((email) => email.id === emailId);
      email.deleted = true;
      return {
        emails: prevState.emails,
        // if user deletes the selected email, we deselect it
        showEmailId: emailId === prevState.showEmailId ? '' : prevState.showEmailId
      };
    });
  }

  handleCloseEmail() {
    this.setState({
      showEmailId: ''
    });
  }

  // render methods >>> paint state

  renderFilters() {
    const emailType = this.state.showInbox ? 'recibidos' : 'borrados';
    const filterText =
      this.state.inboxFilter === '' ? (
        'y sin filtrar.'
      ) : (
        <span>
          y filtrando por <span className="text--bold">{this.state.inboxFilter}</span>.
        </span>
      );
    return (
      <p className="mb-1">
        La usuaria está visualizando los emails <span className="text--bold">{emailType}</span>{' '}
        {filterText}
      </p>
    );
  }

  renderEmails() {
    const inboxFilter = this.state.inboxFilter.toLowerCase();
    return (
      this.state.emails
        // filter by inbox vs deleted
        .filter((email) => {
          // return this.state.showInbox !== email.deleted;
          return this.state.showInbox === true ? !email.deleted : email.deleted;
        })
        // filter by inboxFilter text
        .filter((email) => {
          return (
            email.fromName.toLowerCase().includes(inboxFilter) ||
            email.subject.toLowerCase().includes(inboxFilter) ||
            email.body.toLowerCase().includes(inboxFilter)
          );
        })
        .map((email) => {
          return (
            <EmailItem
              key={email.id}
              id={email.id}
              from={email.fromName}
              subject={email.subject}
              time={email.date}
              read={email.read}
              deleted={email.deleted}
              handleSelectEmail={this.handleSelectEmail}
              handleDeleteEmail={this.handleDeleteEmail}
            />
          );
        })
    );
  }

  renderEmailDetail() {
    const selectedEmail = this.state.emails.find((email) => email.id === this.state.showEmailId);
    if (selectedEmail) {
      return (
        <EmailReader
          id={selectedEmail.id}
          fromName={selectedEmail.fromName}
          fromEmail={selectedEmail.fromEmail}
          subject={selectedEmail.subject}
          body={selectedEmail.body}
          handleCloseEmail={this.handleCloseEmail}
          handleDeleteEmail={this.handleDeleteEmail}
        />
      );
    }
  }

  render() {
    return (
      <div>
        <Header
          inboxFilter={this.state.inboxFilter}
          handleInboxFilter={this.handleInboxFilter}
          handleDeleteFilter={this.handleDeleteFilter}
          handleTextFilter={this.handleTextFilter}
        />
        {this.renderFilters()}

        <table className="table">
          <tbody>{this.renderEmails()}</tbody>
        </table>

        {this.renderEmailDetail()}
      </div>
    );
  }
}

export default App;
