import React from 'react';
import Header from './Header';
import EmailItem from './EmailItem';
import EmailReader from './EmailReader';
import emails from '../data/emails.json';
import '../stylesheets/App.css';

const renderEmails = () => {
  return emails.map(email => {
    return <EmailItem key={email.id} from={email.fromName} subject={email.subject} time={email.date} />;
  });
};

function App() {
  return (
    <div>
      <Header />

      <table className='table'>
        <tbody>{renderEmails()}</tbody>
      </table>

      <EmailReader />
    </div>
  );
}

export default App;
