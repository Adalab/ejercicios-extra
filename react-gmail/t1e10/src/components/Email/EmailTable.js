import React from 'react';
import EmailItem from './EmailItem';

function EmailList(props) {
  const emails = props.emails.map(email => {
    return (
      <EmailItem
        key={email.id}
        id={email.id}
        from={email.fromName}
        subject={email.subject}
        time={email.date}
        read={email.read}
        deleted={email.deleted}
        handleDeleteEmail={props.handleDeleteEmail}
      />
    );
  });
  return (
    <table className="table">
      <tbody>{emails}</tbody>
    </table>
  );
}

export default EmailList;
