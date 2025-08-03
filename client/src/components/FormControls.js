// src/components/FormControls.js
import React from 'react';

const FormControls = ({ units = [], onSelectChange }) => {
  return (
    <div className="form-controls">
      <select onChange={onSelectChange}>
        <option value="">Select a unit</option>
        {units.map((unit, index) => (
          <option key={index} value={unit.name}>
            {unit.name}
          </option>
        ))}
      </select>

      <button type="button">
        Action
      </button>
    </div>
  );
};

export default FormControls;