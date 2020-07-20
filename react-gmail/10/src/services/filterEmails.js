const filterEmails = (emails, textFilter, showInbox) => {
  const lowerCaseTextFilter = textFilter.toLowerCase();
  return (
    emails
      // filter by inbox vs deleted
      .filter(email => (showInbox === true ? !email.deleted : email.deleted))
      // filter by textFilter text
      .filter(
        email =>
          email.fromName.toLowerCase().includes(lowerCaseTextFilter) ||
          email.subject.toLowerCase().includes(lowerCaseTextFilter) ||
          email.body.toLowerCase().includes(lowerCaseTextFilter)
      )
  );
};

export default filterEmails;
