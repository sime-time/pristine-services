import React, { useState } from 'react';
import Select from 'react-select';

function FormCTA() {

  const bathrooms = [
    { value: "1-bathroom", label: "1 bathroom" },
    { value: "2-bathroom", label: "2 bathroom" },
    { value: "3-bathroom", label: "3 bathroom" },
    { value: "4-bathroom", label: "4 bathroom" },
    { value: "5-bathroom", label: "5 bathroom" },
  ];

  const bedrooms = [
    { value: "studio", label: "Studio" },
    { value: "1-bedroom", label: "1 bedroom" },
    { value: "2-bedroom", label: "2 bedroom" },
    { value: "3-bedroom", label: "3 bedroom" },
    { value: "4-bedroom", label: "4 bedroom" },
    { value: "5-bedroom", label: "5 bedroom" },
  ];

  const cleantypes = [
    { value: "standard", label: "Standard Clean" },
    { value: "deep", label: "Deep Clean" },
    { value: "move-in-out", label: "Move in/out Clean" },
    { value: "airbnb-turnover", label: "Airbnb Turnover" },
    { value: "airbnb-deep", label: "Airbnb Deluxe Deep Clean" },
  ];

  return (
    <div className="container">
      <h1 className="fs-1">Save Time.<br />Reset Your Space.</h1>
      <div className="d-flex justify-content-start">
        <div className="flex-fill"><Select options={bedrooms} defaultValue={bedrooms[0]} /></div>
        <div className="flex-fill"><Select options={bathrooms} defaultValue={bathrooms[0]} /></div>
        <div className="flex-fill"><Select options={cleantypes} defaultValue={cleantypes[0]} /></div>
        <button className="btn btn-primary btn-lg flex-fill" type="submit">Book Now</button>
      </div>
    </div>
  );
}

export default FormCTA;