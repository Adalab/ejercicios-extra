import React from 'react';

function EmailItem(props) {
  const handleSelectEmail = () => {
    props.handleSelectEmail(props.id);
  };

  const handleDeleteEmail = (ev) => {
    ev.stopPropagation();
    props.handleDeleteEmail(props.id);
  };

  let deletedClass = props.deleted === true ? 'text--decoration--through' : '';
  let readClass = props.read === false ? 'text--bold' : '';
  return (
    <tr className={`cursor-pointer ${deletedClass} ${readClass}`} onClick={handleSelectEmail}>
      <td>
        {props.from}
        {/* <a href="/" className="text--decoration--none"></a> */}
      </td>
      <td>
        {props.subject}
        {/* <a href="/" className="text--decoration--none"></a> */}
      </td>
      <td>
        {props.time}
        {/* <a href="/" className="text--decoration--none"></a> */}
      </td>
      <td className="text-align-right">
        <button className="form__btn fas fa-trash" onClick={handleDeleteEmail}></button>
      </td>
    </tr>
  );
}

export default EmailItem;
