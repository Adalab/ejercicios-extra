import React from 'react';

function EmailItem(props) {
  return (
    <tr className='cursor-pointer'>
      <td>
        <a href='/' className='text--decoration--none'>
          {props.from}
        </a>
      </td>
      <td>
        <a href='/' className='text--decoration--none'>
          {props.subject}
        </a>
      </td>
      <td>
        <a href='/' className='text--decoration--none'>
          {props.time}
        </a>
      </td>
      <td className='text-align-right'>
        <button className='form__btn fas fa-trash'></button>
      </td>
    </tr>
  );
}

export default EmailItem;
