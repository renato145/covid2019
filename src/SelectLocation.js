import React from 'react';
import './SelectLocation.css';

export const SelectLocation = ({ locations, selection, setSelection }) => {
  return (
    <>
      <label className="selection-label mb-0 ml-2">Select location</label>
      <select
        value={selection}
        className="custom-select"
        onChange={e => setSelection(e.target.value)}
      >
        {locations.map((d, i) => (
          <option key={i} value={d}>
            {d}
          </option>
        ))}
      </select>
    </>
  );
};
