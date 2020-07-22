import React from 'react';

function HeaderFilters(props) {
  const emailType = props.showInbox ? 'recibidos' : 'borrados';
  const text =
    props.textFilter === '' ? (
      'y sin filtrar.'
    ) : (
      <span>
        y filtrando por <span className="text--bold">{props.textFilter}</span>.
      </span>
    );
  return (
    <p className="mb-1">
      La usuaria está visualizando los emails <span className="text--bold">{emailType}</span> {text}
    </p>
  );
}

export default HeaderFilters;
