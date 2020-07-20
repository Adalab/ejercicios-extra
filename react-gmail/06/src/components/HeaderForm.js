import React from 'react';

function HeaderForm(props) {
  const handleInboxFilter = ev => {
    ev.preventDefault();
    props.handleInboxFilter();
  };

  const handleDeleteFilter = ev => {
    ev.preventDefault();
    props.handleDeleteFilter();
  };

  const handleTextFilter = ev => {
    ev.preventDefault();
    const data = {
      value: ev.target.value
    };
    props.handleTextFilter(data);
  };

  return (
    <form className="text-align-right">
      <button className="form__btn" onClick={handleInboxFilter}>
        <span className="fas fa-inbox mr-1"></span>
        Recibidos
      </button>
      <button className="form__btn" onClick={handleDeleteFilter}>
        <span className="fas fa-trash mr-1"></span>
        Papelera
      </button>
      <input
        className="form__input-text"
        type="text"
        placeholder="Buscar un correo"
        onKeyUp={handleTextFilter}
      />
    </form>
  );
}

export default HeaderForm;
