import React from 'react';
import { Link } from 'react-router-dom';
import '../stylesheets/EmailItem.css';

function EmailItem(props) {
  const handleDeleteEmail = ev => {
    ev.stopPropagation();
    props.handleDeleteEmail(props.id);
  };

  let deletedClass = props.deleted === true ? 'text--decoration--through' : '';
  let readClass = props.read === false ? 'text--bold' : '';
  return (
    <tr className={`cursor-pointer ${deletedClass} ${readClass}`}>
      <td className="email--cell">
        <Link className="email--link text--decoration--none" to={`email/${props.id}`}>
          {props.from}
        </Link>
      </td>
      <td className="email--cell">
        <Link className="email--link text--decoration--none" to={`email/${props.id}`}>
          {props.subject}
        </Link>
      </td>
      <td className="email--cell">
        <Link className="email--link text--decoration--none" to={`email/${props.id}`}>
          {props.time}
        </Link>
      </td>
      <td className="text-align-right">
        <button className="form__btn fas fa-trash" onClick={handleDeleteEmail}></button>
      </td>
    </tr>
  );
}

export default EmailItem;
