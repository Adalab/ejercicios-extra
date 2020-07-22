import React from 'react';
import { Link } from 'react-router-dom';
import '../../stylesheets/EmailItem.css';

function EmailItem(props) {
  const handleDeleteEmail = ev => {
    ev.stopPropagation();
    props.handleDeleteEmail(props.id, !props.deleted);
  };

  const renderTd = text => {
    return (
      <td className="email--cell">
        <Link className="email--link text--decoration--none" to={`email/${props.id}`}>
          {props.from}
        </Link>
      </td>
    );
  };

  let deletedClass = props.deleted === true ? 'text--decoration--through' : '';
  let readClass = props.read === false ? 'text--bold' : '';
  let trashIconClass = props.deleted ? 'fa-trash-restore' : 'fa-trash';
  return (
    <tr className={`cursor-pointer ${deletedClass} ${readClass}`}>
      {renderTd(props.from)}
      {renderTd(props.subject)}
      {renderTd(props.time)}
      <td className="text-align-right">
        <button className={`form__btn fas ${trashIconClass}`} onClick={handleDeleteEmail}></button>
      </td>
    </tr>
  );
}

export default EmailItem;
