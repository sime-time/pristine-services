import React, { useState } from 'react';
import Dropdown from './Dropdown/Dropdown.jsx';
import DropdownItem from './Dropdown/DropdownItem.jsx';

function FormCTA() {
  const items = [1, 2, 3, 4, 5, 6, 7]

  return (
    <Dropdown buttonText="Dropdown button" content={
      <>
        {items.map(item => (<DropdownItem key={item}>
          {`Item ${item}`}
        </DropdownItem>))}
      </>
    } />
  );
}

export default FormCTA;