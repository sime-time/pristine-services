import React, { useState } from 'react';
import SelectDropdown from './SelectDropdown/SelectDropdown.jsx'

function FormCTA() {

  const bathrooms = ["1 bathroom", "2 bathroom", "3 bathroom", "4 bathroom", "5 bathroom"];
  const bedrooms = ["1 bedroom", "2 bedroom", "3 bedroom", "4 bedroom", "5 bedroom"];
  const cleantype = ["Standard", "Deep Clean",]

  return (
    <div className="container">
      <h1>Save Time.<br />Reset Your Space.</h1>
      <div className="d-flex justify-content-start">
        <SelectDropdown items={bedrooms} />
        <SelectDropdown items={bathrooms} />
        <SelectDropdown items={cleantype} />
        <button className="btn btn-primary btn-lg" type="submit">Book Now</button>
      </div>
    </div>
  );
}

export default FormCTA;